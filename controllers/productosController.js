//Declaro una funcion para buscar un producto por id

const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");


function buscarProductoPorId(id){
    producto = {
        id: 1,
        nombre: "Torta Mousse",
        precio: 6000,
        descripcion: "Exquisita torta realizada con el mejor chocolate",
        imagen: "mousse-cake.png"
    }
    return producto;
}

function findAll(){

    const jsonData = fs.readFileSync(path.join(__dirname , "../data/productos.json"))
    const data = JSON.parse(jsonData);
    return data
 }

 function wirteFile(data){

    const dataString = JSON.stringify(data, null , 4);
    fs.writeFileSync(path.join(__dirname, "../data/productos.json"), dataString);

}

//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    //Metodo que lista todos los productos
    listar: (req,res)=>{
        res.render("productos", {
            title: "Listado de productos",
            estilos: [
                "style.css",
                "productos.css"       
            ]
        });
        console.log("Mostrando Pagina de productos");
    },
    //metodo para detalle de un producto
    detalle: (req,res)=>{
        let producto = buscarProductoPorId(req.params.id);
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
        console.log('En este momento genero un producto nuevo');
        res.redirect("/productos");
    },
    formActualizar: (req,res)=>{
        let producto = buscarProductoPorId(1);
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

        const tortaEncontrada = data.find(function(torta){
            return torta.id == req.params.id
        })


        tortaEncontrada.nombre = req.body.nombre;
        tortaEncontrada.descripcion = req.body.descripcion;
        tortaEncontrada.precio = req.body.precio;
        tortaEncontrada.categoria = req.body.categoria;
        tortaEncontrada.foto = req.body.foto;

        writeFile(data);

        console.log('En este momento actualizo un producto');
        res.redirect("/productos");
    },
    eliminar: (req,res)=>{

        const data = findAll();

        const tortaEncontrada = data.findIndex(function(torta){
            return torta.id == req.params.id
        })

        data.splice(tortaEncontrada, 1)

        writeFile(data);


        console.log("En este momento elimino un producto");
        res.redirect("/productos");
    }
};

module.exports = controller; 