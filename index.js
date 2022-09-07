const express = require ("express"); 
const app = express ();
const path = require("path");
const { title } = require("process");
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/test.html"));
    console.log("Mostrando que esta funcionando");
});

app.get("/registro", (req,res)=>{
    res.render("registro", {
        title: "Formulario de registroo",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando formulario de registro");
});

app.get("/registrado", (req,res)=>{
    res.render("registrado", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando agradecimiento por haberse registrado");
});

app.get("/recuperar", (req,res)=>{
    res.render("recuperar", {
        title: "Recuperar contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperar contraseña");
});

app.get("/reestablecercontrasena", (req,res)=>{
    res.render("reestablecercontrasena", {
        title: "Reestablecer contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando reestablecer contraseña");
});

app.get("/validado", (req,res)=>{
    res.render("validado", {
        title: "Validado correctamente",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando correo validado");
});

app.get("/ingreso", (req,res)=>{
    res.render("ingreso", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando ingreso");
});

app.get("/perfil", (req,res)=>{
    res.render("perfil", {
        title: "Perfil de usuario",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando Pagina de Perfil");
});

app.get("/recuperacion", (req,res)=>{
    res.render("recuperacion", {
        title: "Recuperaración iniciada",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperacion enviada");
});

app.get("/header", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/header.html"));
    console.log("Mostrando header");
});

app.get("/delivery", (req,res)=>{
    res.render("delivery", {
        title: "Delivery",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando Pagina de Delivery");
});

app.get("/productos", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/productos.html"));
    console.log("Mostrando Pagina de productos");
});

app.get("/preguntas-frecuentes", (req,res)=>{
    res.render("preguntas-frecuentes", {
        title: "Preguntas frecuentes",
        estilos: [
            "style.css"          
        ]
    });
    console.log("preguntas frecuentes");
});

app.get("/producto", (req,res)=>{
    res.render("producto", {
        title: "Detalle de producto",
        estilos: [
            "style.css"        
        ]
    });
    console.log("producto");
});

app.get('/carrito', (req, res) => {
    res.render("carrito", {
        title: "Carrito de compras",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando carrito");
});

app.get('/compra', (req, res) => {
    res.render("compra", {
        title: "Compra finalizada",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando finalizaste tu compra");
});

app.get('/info', (req, res) => {
    res.render("info", {
        title: "¿Quienes somos?",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando ¿Quienes somos?");
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contacto.html'))
});

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/footer.html'))
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});


app.listen(process.env.PORT || 80, () => {
    console.log("Servidor corriendo en el puerto 80 >> http://localhost/");
});