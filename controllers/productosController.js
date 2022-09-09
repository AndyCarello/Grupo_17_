//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    //Metodo que lista todos los productos
    metodo: (req, res) => {
        res.send('ACA DEBERIA DE RENDERIZAR PRODUCTOS');
    },
    //metodo para detalle de un producto
    detalle: (req,res)=>{
        res.render("productos/producto", {
            title: "Detalle de producto",
            estilos: [
                "style.css"        
            ]
        });
        console.log("producto");
    }
};

module.exports = controller; 