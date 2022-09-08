let express = require ('express');

let router = express.Router();

router.get('/carrito', (req, res) => {
    res.render("carrito", {
        title: "Carrito de compras",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando carrito");
});

router.get('/compra', (req, res) => {
    res.render("compra", {
        title: "Compra finalizada",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando finalizaste tu compra");
});

module.exports = router;