const path = require('path');
let db = require('../../database/models');

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const apiUsuariosController = {
    total: (req, res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            let respuesta = {
                count: usuarios.length,
                users:usuarios.map(usuario=>({"id":usuario.usuario_id,
                "name":usuario.nombre, 
                "email" : usuario.email, 
                "detail": "http://localhost:3030/api/users/"+usuario.usuario_id})),
            }
              res.json({respuesta});
            
            })
                 
        },

        detalle:(req, res) => {
            db.Usuarios.findOne({where:{usuario_id:req.params.id}})
            .then(usuario => {
                let respuesta={
                    user:{
                   "user id " : usuario.usuario_id,
                   "nombre" : usuario.nombre,
                    "apellido" :usuario.apellido,
                    "email":usuario.email,
                    "direccion":usuario.direccion,
                    "localidad":usuario.localidad,
                    "pais:":usuario.pais,
                    "edad":usuario.edad,
                    "imagen": "http://localhost:3030/"+usuario.imagen
                    }
                
                }
                res.json(respuesta);
            })

        }
    }
            
    
    
module.exports = apiUsuariosController;