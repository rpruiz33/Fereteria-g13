const db = require("../database/models");
const sequelize = db.sequelize;
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const { Sequelize } = require("../database/models");
const { Console } = require("console");
const sal = bcrypt.genSaltSync(10);
const Op = Sequelize.Op;

const usersFilePath = path.join(__dirname, "../data/usersList.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersController = {
  // LOGIN
  login: (req, res) => {
    
    res.render("login");
    
  },

  // REGISTRO
  registro: (req, res) => {
    res.render("register");
  },

  //NUEVO USUARIO
  registrar: (req, res) => {
    const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		
    }
        let img;


    if (req.files.length > 0) {
      img = "/images/" + req.files[0].filename;
    } else {
      img = "default-image.png";
    }

    let pass = bcrypt.hashSync(req.body.contrasenia, 10);

    db.Usuarios.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      localidad: req.body.localidad,
      pais: req.body.pais,
      edad: req.body.edad,
      email: req.body.email,
      contraseña: pass,
      nombre_Usuario: req.body.usuario,
      imagen: img,
      tipo_usuario: req.body.tipoUsuario
    })
      .then(function (users) {
  
          
          res.redirect("/");
        })
        
      .catch((error) => console.log(error));
  
    console.log("Entra por errores")
    res.render('home', {resultValidation : resultValidation .array(), old: req.body})
  },
  processLogin: (req, res) => {
    // let contraseña;
    // let email;
    // req.session.userLogged = email

    // res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
    const errores = validationResult(req);
  
    db.Usuarios.findOne({
      where: { email: req.body.email },
    }) .then((user) => {
      
        if (bcrypt.compareSync(req.body.contrasenia, user.contraseña)) {
          req.session.userLogged= user;
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
          
          res.redirect ('/');
        } else {
          res.render("login", {
            errors: {
              pass: {
                msg: "La contraseña es incorrecta",
              }
            }
          })
        }
  }})
      .catch((err) => {
        res.render("login", {
          errors: {
            email: {
              msg: "Credenciales invalidas",
            }
          }
        })
      })

    /*let contraseña=req.body.contraseña
    db.Usuarios.findOne(contraseña)
    .then( console.log("contraseña valida"))
    .catch(err=>console.log(err));*/

    /* let password=req.body.contraseña
    let usuarioContraseña=bcrypt.compareSync(req.body.contrasenia, userToLogin.contrasenia);
      */
  },
    /*let contraseña=req.body.contraseña
    db.Usuarios.findOne(contraseña)
    .then( console.log("contraseña valida"))
    .catch(err=>console.log(err));*/

    /* let password=req.body.contraseña
    let usuarioContraseña=bcrypt.compareSync(req.body.contrasenia, userToLogin.contrasenia);
      */
  
  /*
      if(userToLogin) {
        let isOkThePassword = bcrypt.compareSync(req.body.contrasenia, userToLogin.contrasenia);
        if (isOkThePassword) {
          delete userToLogin.contrasenia;
          req.session.userLogged = userToLogin;
  
          if(req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
          }
           return res.render('home', {
            user: req.session.userLogged.email
          });
        } 
        return  res.render('login', {
          errors: {
            email: {
              msg: 'La contraseña es incorrecta'
            }
          }
        });
      }
  
      return  res.render('login', {
        errors: {
          password: {
            msg: ' Email invalido'
          }
        }
      });
    },
    
  */

  actualizar: (req, res) => {
    console.log("actualizar-------------------------------------------------");
    // MODIFICAR CUANDO CARGA LA IMAGEN QUE YA TIENE
    let img;
    if (req.files && req.files.length > 0) {
      img = "/images/" + req.files[0].filename;
    } else {
      img = "default-image.png";
    }
 
    let pass = bcrypt.hashSync(req.body.contrasenia, 10);
    let usuario = {
      usuario_id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      direccion: req.body.direccion,
      localidad: req.body.localidad,
      pais: req.body.pais,
      edad: req.body.edad,
      email: req.body.email,
      contraseña: pass,
      nombre_Usuario: req.body.usuario,
      imagen: img,
      tipo_usuario: req.body.tipoUsuario
    };
    db.Usuarios.update(usuario, {
      where: { usuario_id: req.params.id },
    })
      .then(function (user) {
        res.render("home", {user})})
      .catch((error) => console.log(error));
  },
  editar: (req, res) => {
    db.Usuarios.findOne({where:{ usuario_id: req.params.id }})
      .then(function (usuario) {
        res.render("edit-user", { usuario});
      })
      .catch((err) => console.log(err));
  },

  perfil: (req, res) => {

    db.Usuarios.findOne({where:{ usuario_id: req.params.id,
      
       }}).then(function (user) {
      res.render("Usuario",{user})
    });
  },
home:function (req, res) {
res.render("home")

},


  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;

