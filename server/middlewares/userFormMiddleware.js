const {body, check} = require ('express-validator')
const path = require('path');
console.log("Valida usuario")

const userFormMiddleware = [
    check('nombre').notEmpty().withMessage('Debes completar el campo Nombre')
    .isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
    check('apellido').notEmpty().withMessage('Debes completar el campo Apellido')
    .isLength({min:2}).withMessage("El apellido debe tener al menos 2 caracteres"),

    check('edad').notEmpty().withMessage('Debes completar el campo Edad'),
    check('direccion').notEmpty().withMessage('Debes completar el campo Direccion'),
    check('localidad').notEmpty().withMessage('Debes completar el campo Localidad'),
    check('pais').notEmpty().withMessage('Debes completar el campo Pais'),
    check('email')
        .notEmpty().withMessage('Debes completar el campo Correo electronico')
        .isEmail().withMessage('Debe ingrear un Email valido'),
    check('usuario')
        .notEmpty().withMessage('Debes completar el campo Nombre usuario')
        .isLength({min:8, max:20}).withMessage("El nombre de usuario debe tener como minimo 8 caracteres y maximo 20 caracteres"),
    check('contrasenia')
        .notEmpty().withMessage('Debes completar el campo Contraseña')
        .isLength({min:8, max:20}).withMessage("La contraseña debe tener como minimo 8 caracteres y maximo 20 caracteres"),
    check('repetirContrasenia')
        .notEmpty().withMessage('Debes completar el campo Repetir Contraseña')   
        .isLength({min:8, max:20}).withMessage("La contraseña debe tener como minimo 8 caracteres y maximo 20 caracteres"),
    check('img').custom((value, { req }) => {
            let file = req.files[0];
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
            if (file) {
            
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
    
            return true;
        })  
    
]

module.exports = userFormMiddleware;