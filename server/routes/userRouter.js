const {body, check} = require ('express-validator')
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require ('multer');
const path = require('path');
const logueadoMiddleware= require('../middlewares/logueadoMiddleware');
const userFormMiddleware = require ('../middlewares/userFormMiddleware');
const db = require('../database/models/');

const fs = require('fs');


const User = db.Usuarios;

// ************ Configuracion Multer para los midleware ************
const storage = multer.diskStorage({
    
    destination: function(req, file, cb){
        cb(null, 'public/images/')
    },

    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + path.extname(file.originalname)

        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer ({storage: storage})
// // LOGIN
router.get('/login', logueadoMiddleware,userController.login);
router.post('/login',userController.processLogin);
router.get('/logout', userController.logout);
// // NUEVO USUARIO
router.get('/registro', userController.registro);
router.post('/registro/',upload.any(''),userFormMiddleware, userController.registrar)
router.get('/editar/:id/',userController.editar);
router.post('/editar/:id/', upload.any(''), userController.actualizar)
router.get('/perfil/:id/',userController.perfil)
router.post('/home/', userController.home);

  









// DETALLE DEL USUARIO
// router.get('/users/:id/', userController.usuario);

// EDITAR PRODUCTO
// router.get('/editar/:id/', userController.editar);
// router.put('/editar/:id/', upload.any(''), userController.update)

// //BORRAR EL USUARIO
// router.delete('/delete/:id/', userController.eliminar)

module.exports = router