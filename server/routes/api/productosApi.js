const express = require('express');
const router = express.Router();
const apiController=require('../../controllers/api/apiProductosController')

router.get('/products/', apiController.total);
router.get('/lista', apiController.lista);
router.get('/products/:id', apiController.detalleProducto);
router.get('/ultimo', apiController.ultimo);
router.get('/categorias', apiController.categorias);
module.exports=router