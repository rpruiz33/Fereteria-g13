const path = require('path');
let db = require('../../database/models');

const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const apiProductosController = {
    total: (req, res) => {
        let acum=0;
        let prod =db.Productos.findAll({include:['categorias']});
        let catego =db.Categorias.findAll({include:['productos']});
        let categoriasDelProducto = db.ProductoCategorias.findAll()
        Promise.all([prod, catego,categoriasDelProducto])
        .then(function([productos,categorias,prodCates ]) {
            let respuesta = { 
               
                count: productos.length,
                countByCategory: categorias.map(categoria=>({"categoria": categoria.categoria_id,
                "nombre":categoria.nombre,"cantidad de productos":categoria.productos.length
               })),
             products:productos.map(producto=>({
                "id":producto.producto_id,
                "name":producto.nombre,
                "descripcion":producto.descripcion,
                //aca puse en el array la relacion de muchos  a muchos
                "array":[producto.categorias],
                "detail":"http://localhost:3030/api/products/"+producto.producto_id
            }))
             
             }  
                res.json({respuesta});
                
               }).catch(err=>console.log(err));
    },
    detalleProducto:function(req, res){
        db.Productos.findOne({where:{producto_id:req.params.id}})
        
        .then(producto => {
            let respuesta={
                producto:{
               "producto id " :producto.producto_id,
               "nombre" :producto.nombre,
                "marca" :producto.marca,
                "tamanio":producto.tamanio,
                "color":producto.color,
                "precio":producto.precio,
                "fabricante:":producto.fabricante,
                "modelo":producto.modelo,
                "stock": producto.stock,
                "descuento":producto.descuento,
                "imagen":"http://localhost:3030"+producto.imagen,
                //no SABRIA que poner las relaciones son uno a uno o muchos a muchos
               // "array":[]
                }
            
            }
            res.json(respuesta);
        }).catch(err=>console.log(err))


    } ,
        ultimo: (req, res)=>{      
        db.Productos.findOne ({
            order: [['producto_id', 'DESC']],
            limit: 1,
          
        
        })
        .then(producto => {
            let respuesta={
                data:{
               "producto id " :producto.producto_id,
               "nombre" :producto.nombre,
                "marca" :producto.marca,
                "tamanio":producto.tamanio,
                "color":producto.color,
                "precio":producto.precio,
                "fabricante:":producto.fabricante,
                "modelo":producto.modelo,
                "stock": producto.stock,
                "descuento":producto.descuento,
                "descripcion":producto.descripcion,
                "imagen":"http://localhost:3030/"+producto.imagen,
                //no SABRIA que poner las relaciones son uno a uno o muchos a muchos
               // "array":[]
                }
            
            }
         res.json(respuesta);
        }).catch(err=>console.log(err))

},

lista: (req, res) => {
    db.Productos
        .findAll()
        .then(product =>{
            return res.json({
                total: product.length,
                data: product,
                
            })
        })
},

categorias: (req, res) => {
    db.Categorias.findAll().then(categorias =>{
        res.json({
            total:categorias.length
        })

    })
}
}
module.exports =apiProductosController;