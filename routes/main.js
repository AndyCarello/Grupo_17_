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

router.get("/registro", (req,res)=>{
    res.render("registro", {
        title: "Formulario de registroo",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando formulario de registro");
});

router.get("/registrado", (req,res)=>{
    res.render("registrado", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando agradecimiento por haberse registrado");
});

router.get("/recuperar", (req,res)=>{
    res.render("recuperar", {
        title: "Recuperar contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperar contraseña");
});

router.get("/reestablecercontrasena", (req,res)=>{
    res.render("reestablecercontrasena", {
        title: "Reestablecer contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando reestablecer contraseña");
});

router.get("/validado", (req,res)=>{
    res.render("validado", {
        title: "Validado correctamente",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando correo validado");
});

router.get("/ingreso", (req,res)=>{
    res.render("ingreso", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando ingreso");
});

router.get("/perfil", (req,res)=>{
    res.render("perfil", {
        title: "Perfil de usuario",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando Pagina de Perfil");
});

router.get("/recuperacion", (req,res)=>{
    res.render("recuperacion", {
        title: "Recuperaración iniciada",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperacion enviada");
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

router.get("/producto", (req,res)=>{
    res.render("producto", {
        title: "Detalle de producto",
        estilos: [
            "style.css"        
        ]
    });
    console.log("producto");
});

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
