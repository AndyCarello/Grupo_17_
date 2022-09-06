const express = require ("express"); 
const app = express ();
const path = require("path");
app.set("view engine", "ejs");

//defino la carpeta public para que el contenido se use directo
app.use(express.static("public"));

//creo el archivo test para que sepamos que esta funcionando
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/test.html"));
    console.log("Mostrando que esta funcionando");
});
//Formulario de alta de usuario
app.get("/registro", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registro.html"));
    console.log("Mostrando formulario de registro");
});
//Agradecimiento por registrarse
app.get("/registrado", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registrado.html"));
    console.log("Mostrando agradecimiento por haberse registrado");
});

//Recuperar Contraseña
app.get("/recuperar", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/recuperar.html"));
    console.log("Mostrando recuperar contraseña");
});

//Reestablecer Contraseña
app.get("/reestablecercontrasena", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/reestablecercontrasena.html"));
    console.log("Mostrando reestablecer contraseña");
});

//El correo ha sido validado
app.get("/validado", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/validado.html"));
    console.log("Mostrando correo validado");
});
//Formulario de ingreso al sitio
app.get("/ingreso", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/ingreso.html"));
    console.log("Mostrando ingreso");
});
//Muestra datos del perfil de usuario e historial de compras
app.get("/perfil", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/perfil.html"));
    console.log("Mostrando Pagina de Perfil");
});

//Probando el header
app.get("/header", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/header.html"));
    console.log("Mostrando header");
});

//Muestra pagina de delivery
app.get("/delivery", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/delivery.html"));
    console.log("Mostrando Pagina de Delivery");
});

//Rutas Valentina//

// Mostrando los productos //
app.get("/productos", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/productos.html"));
    console.log("Mostrando Pagina de productos");
});
 // preguntas frecuentes //
 app.get("/preguntas-frecuentes", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/preguntas-frecuentes.html"));
    console.log("preguntas frecuentes");
});

// producto //
app.get("/producto", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/producto.html"));
    console.log("producto");
});

/*Ruta para el carrito*/

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});

/*Ruta para el Finalizaste tu compra*/

app.get('/compra', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/compra.html'))
});

/*Ruta para el ¿Quienes Somos?*/

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/info.html'))
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

//inicio el servidor en el puerto 80 asi no lo tengo que aclarar en el navegador
app.listen(process.env.PORT || 80, () => {
    console.log("Servidor corriendo")
});