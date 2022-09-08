let express = require ('express');

let router = express.Router();

const path = require("path");

router.get("/", (req,res)=>{
    res.render("test", {
        title: "Test SUCRE PASTELERIA",
        estilos: [
            "style.css",
            "footer.css"        
        ]
    });
    console.log("Mostrando que esta funcionando");
});

router.get("/delivery", (req,res)=>{
    res.render("delivery", {
        title: "Delivery",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando Pagina de Delivery");
});

router.get("/productos", (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/productos.html"));
    console.log("Mostrando Pagina de productos");
});

router.get("/preguntas-frecuentes", (req,res)=>{
    res.render("preguntas-frecuentes", {
        title: "Preguntas frecuentes",
        estilos: [
            "style.css"          
        ]
    });
    console.log("preguntas frecuentes");
});



router.get('/info', (req, res) => {
    res.render("info", {
        title: "¿Quienes somos?",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando ¿Quienes somos?");
});

router.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contacto.html'))
});

router.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/footer.html'))
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

module.exports = router;
