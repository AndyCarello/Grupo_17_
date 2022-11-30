//Declaro una funcion para buscar un producto por id

const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");
const db = require('../database/models');
const { Op } = require('sequelize');
const {validationResult} = require("express-validator");
const e = require("express");







//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {

    add: async (req,res)=>{
        const categorias = await db.Category.findAll();
        res.render("productos/crear", {
            title: "Desplegable de categorias",
            estilos: [
                "style.css"        
            ],
            categorias: categorias
        });
        console.log("Mostrando desplegable de categorias");
    },

    productList: function(req,res){

        db.Product.findAll()
        .then((productos) =>{

            res.render("productos/productos", {
                title: "Listado de productos",
                estilos: [
                    "style.css",
                    "productos.css"       
                ],
                productos: productos
            });
            console.log("Mostrando Pagina de productos");

  

        })
    },
    
    productDetail: function(req , res) {

        db.Product.findByPk(req.params.id)
            .then((productoEncontrado) => {

                res.render("productos/producto", {
                    title: producto.nombre,
                    estilos: [
                        "style.css"        
                    ],
                    producto: productoEncontrado
                });
                console.log("Mostrando pagina del producto con id: " + req.params.id);
            })
    },

    productCreate: function(req,res) {

        res.render("productos/crear", {
            title: "Creacion de Producto",
            estilos: [
                "style.css" 
            ]
        });
        console.log("Mostrando formulario de creacion de producto");
    },

    crearProducto: async(req, res) =>{

        db.Product.create({

            name: req.body.name ,
            desciption: req.body.descripcion,
            price: req.body.precio,
            category_id: req.body.categoria,
            //image: req.file.filename,
            
        })
        .then(function(){

            res.render("productos/crear", {
                title: "Creacion de Producto",
                estilos: [
                    "style.css" 
                ]
            });
            console.log("Mostrando formulario de creacion de producto");

        })


        
    },

    actualizarProducto: function(req,res) {

        db.Product.update ({

            name: req.body.nombre,
            price: req.body.precio,
            description: req.body.descripcion,
            //image: req.file.filename,
        },{

            where: {id:req.params.id}
        })
        .then(res.redirect("/productos/" + req.params.id));
    },

    borrarProducto: function(req,res){

        db.Product.destroy ({

            where: {id:req.params.id}
        })
        .then(res.redirect('/productos/productos'));
    },

    productEdit: function(req,res){

        db.Product.findByPk(req.params.id)
            .then((productoEncontrado) =>{

                res.render(path.join(__dirname,'../views/productos/actualizar.ejs'), {
                    
                title: "Actualización de Producto",
                estilos: [
                    "style.css" 
                ],
                producto:productoEncontrado});

                
            })
    }

    

}
module.exports = controller; 




















/*  

//TODO EL CODIGO ANTERIOR COMENTADO (METODO ANTIGUO DEL CRUD)


function leerProductos(){
    const jsonData = fs.readFileSync(path.join(__dirname , "../data/productos.json"));
    const data = JSON.parse(jsonData);
    return data;
}

function escribirProductos(data){
    const dataString = JSON.stringify(data, null , 4);
    fs.writeFileSync(path.join(__dirname, "../data/productos.json"), dataString);
}

function findAll(){

    const jsonData = fs.readFileSync(path.join(__dirname , "../data/productos.json"))
    const data = JSON.parse(jsonData);
    return data
 }

 function writeFile(data){

    const dataString = JSON.stringify(data, null , 4);
    fs.writeFileSync(path.join(__dirname, "../data/productos.json"), dataString);

}

    listar: (req,res)=>{
        const productos = leerProductos();
        res.render("productos/productos", {
            title: "Listado de productos",
            estilos: [
                "style.css",
                "productos.css"       
            ],
            productos: productos
        });
        console.log("Mostrando Pagina de productos");
    },
    //metodo para detalle de un producto
    detalle: (req,res)=>{
        const data = leerProductos();
        const producto = data.find(function(buscado){
           return buscado.id == req.params.id;
        })
        res.render("productos/producto", {
            title: producto.nombre,
            estilos: [
                "style.css"        
            ],
            producto: producto
        });
        console.log("Mostrando pagina del producto con id: " + req.params.id);
    },
    formCrear: (req,res)=>{
        res.render("productos/crear", {
            title: "Creacion de Producto",
            estilos: [
                "style.css" 
            ]
        });
        console.log("Mostrando formulario de creacion de producto");
    },
    crear: (req,res)=>{
        const data =  leerProductos();
        console.log(req.file);
        const nuevoProducto = {
            id : Date.now(),
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            precio : Number(req.body.precio),
            imagen : req.file.filename
        }
        data.push(nuevoProducto);
        escribirProductos(data);
        console.log('En este momento genero un producto nuevo: ' + nuevoProducto.id + " | " + nuevoProducto.nombre);
        res.redirect("/productos/" + nuevoProducto.id);
    },
    formActualizar: (req,res)=>{
       const data = leerProductos();
       const producto = data.find(function(buscado){
        return buscado.id == req.params.id;
     })
        res.render("productos/actualizar", {
            title: "Actualización de Producto",
            estilos: [
                "style.css" 
            ],
            producto: producto //asigno la variable producto al atributo producto del objeto literal
        });
        console.log("Mostrando formulario de actualizacion de producto");
    },
    actualizar: (req,res)=>{
        const data = findAll()

        const productoEncontrado = data.find(function(producto){
            return producto.id == req.params.id
        })

        productoEncontrado.nombre = req.body.nombre;
        productoEncontrado.descripcion = req.body.descripcion;
        productoEncontrado.precio = req.body.precio;
        productoEncontrado.categoria = req.body.categoria;
        productoEncontrado.imagen =  req.file ? req.file.filename : productoEncontrado.imagen;

        writeFile(data);

        console.log('En este momento actualizo un producto');
        res.redirect("/productos/" + req.params.id);
    },
    eliminar: (req,res)=>{

        const data = findAll();
        const productoEncontrado = data.findIndex(function(producto){
            return producto.id == req.params.id
        })
        console.log("indice");
        console.log(productoEncontrado);
        data.splice(productoEncontrado, 1);

        writeFile(data);
        console.log("En este momento elimino: " + req.params.id);
        res.redirect("/productos");
    }
};  */