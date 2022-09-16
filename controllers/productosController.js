//Declaro una funcion para buscar un producto por id
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

//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    //Metodo que lista todos los productos
    metodo: (req, res) => {
        res.send('ACA DEBERIA DE RENDERIZAR PRODUCTOS');
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
        console.log('En este momento actualizo un producto');
        res.redirect("/productos");
    },
    eliminar: (req,res)=>{
        console.log("En este momento elimino un producto");
        res.redirect("/productos");
    }
};

module.exports = controller; 