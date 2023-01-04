//Declaro una funcion para buscar un producto por id

const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");
const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require("express-validator");
const e = require("express");

//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {

    add: async (req, res) => {
        try {
            const categorias = await db.Category.findAll();
            let ingredientes = await db.Ingredient.findAll();
            res.render("productos/crear", {
                title: "Crear Producto",
                estilos: [
                    "footer.css",
                    "style.css"
                ],
                categorias: categorias,
                ingredientes: ingredientes
            });
            console.log("Mostrando formulario de creacion de producto");
        } catch (e) {
            return res.send(e)
        }

    },

    productList: function (req, res) {

        db.Product.findAll({
            include: 'category'
        })
            .then((productos) => {

                res.render("productos/productos", {
                    title: "Nuestros productos",
                    estilos: [
                        "footer.css",
                        "style.css",
                        "productos.css"
                    ],
                    productos: productos
                });
                console.log("Mostrando Pagina de productos");



            })
    },
    buscarPorTitulo: async function (req, res) {

        const productos = await db.Product.findAll({
            where: {
                name: { [Op.substring]: req.query.busqueda }
            },
            include: 'category'
        })

        res.render("productos/productos", {
            title: "Resultado(s) para: " + req.query.busqueda,
            estilos: [
                "footer.css",
                "style.css",
                "productos.css"
            ],
            productos: productos
        });
        console.log("Mostrando resultados busqueda");

    },

    productDetail: function (req, res) {

        db.Product.findByPk(req.params.id, {
            include: 'ingredients'
        })
            .then((productoEncontrado) => {

                res.render("productos/producto", {
                    title: productoEncontrado.name,
                    estilos: [
                        "footer.css",
                        "style.css"
                    ],
                    producto: productoEncontrado
                });
                console.log("Mostrando pagina del producto con id: " + req.params.id);
            })
    },

    crearProducto: function (req, res) {
        db.Product.create({

            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            category_id: req.body.categoria,
            image: req.file.filename,

        })
            .then(function (i) {
                if (req.body.ingredientes) {
                    let data = []
                    for (ingrediente of req.body.ingredientes) {
                        data.push(
                            {
                                product_id: i.id,
                                ingredient_id: parseInt(ingrediente)
                            }
                        )
                    }
                    db.ingredient_product.bulkCreate(data)
                }
                
                res.redirect("/productos");
            })



    },

    actualizarProducto: async function (req, res) {
        const data = {
            name: req.body.nombre,
            price: req.body.precio,
            description: req.body.descripcion,
            category_id: req.body.categoria,
            image: (req.file) ? req.file.filename : null
        }

        if (data.image == null) { delete data.image }


        await db.Product.update(data, {
            where: { id: req.params.id }
        })
        
        if (req.body.quitaringredientes) {
            await db.ingredient_product.destroy({
                where: {
                    [Op.and]: [
                        {
                            product_id: req.params.id,
                            ingredient_id: { [Op.in]: req.body.quitaringredientes }
                        }
                    ]
                }
            })
        }
        if (req.body.agregaringredientes) {
            let dataIngredientes = []
            for (ingrediente of req.body.agregaringredientes) {
                dataIngredientes.push(
                    {
                        product_id: req.params.id,
                        ingredient_id: parseInt(ingrediente)
                    }
                )
            }
            db.ingredient_product.bulkCreate(dataIngredientes)
        }
        
       
        res.redirect("/productos/" + req.params.id);
    },

    borrarProducto: function (req, res) {

        db.Product.destroy({

            where: { id: req.params.id }
        })
            .then(res.redirect('/productos'));
    },

    productEdit: function (req, res) {

        db.Product.findByPk(req.params.id, { include: "ingredients" })
            .then(async (productoEncontrado) => {
                const categorias = await db.Category.findAll();
                const ingredientesDisponibles = await db.Ingredient.findAll({
                    where: {
                        id: {
                            [Op.notIn]: productoEncontrado.ingredients.map(x => x.id)
                        }
                    }
                });
                res.render(path.join(__dirname, '../views/productos/actualizar.ejs'), {

                    title: "Actualización de Producto",
                    estilos: [
                        "footer.css",
                        "style.css"
                    ],
                    producto: productoEncontrado,
                    categorias: categorias,
                    ingredientesDisponibles: ingredientesDisponibles
                });


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