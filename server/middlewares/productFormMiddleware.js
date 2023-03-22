const {body, check} = require ('express-validator')
const path = require('path');

const productFormMiddleware = [
    check('nombre')
    .notEmpty().withMessage('Debes completar el campo Nombre')
    .isLength({min:5}).withMessage("El nombre de producto debe tener al menos 5 caracteres"),
    check('marca').notEmpty().withMessage('Debes completar el campo Marca'),
    check('tamanio').notEmpty().withMessage('Debes completar el campo Tamaño'),
    check('precio').notEmpty().withMessage('Debes completar el campo Precio'),
    check('stock').notEmpty().withMessage('Debes completar el campo Stock'),
    check('categoria').notEmpty().withMessage('Debes seleccionar al menos una categoria'),
    check('descripcion')
    .notEmpty().withMessage('Debes completar el campo Descipcion')
    .isLength({min:20}).withMessage("La descripcion de producto debe tener al menos 20 caracteres"),
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

module.exports = productFormMiddleware;