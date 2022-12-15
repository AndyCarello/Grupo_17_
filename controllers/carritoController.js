//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    carritoCompras: (req, res) => {
        res.render("carrito/carrito", {
            title: "Carrito de compras",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando carrito");
    },
    compra: (req, res) => {
        res.render("carrito/compra", {
            title: "Compra finalizada",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando finalizaste tu compra");
    }
};

module.exports = controller;