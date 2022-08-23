const express = require ("express"); 
const app = express ();
const path = require("path");

//defino la carpeta public para que el contenido se use directo
app.use(express.static("public"));

//inicio el servidor en el puerto 80 asi no lo tengo que aclarar en el navegador
app.listen(80, () => {
    console.log("Servidor corriendo")
});

//creo el archivo test para que sepamos que esta funcionando
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/test.html"))
});
//Formulario de alta de usuario
app.get("/registro", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registro.html"))
});
//Agradecimiento por registrarse
app.get("/registrado", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registrado.html"))
});
//El correo ha sido validado
app.get("/validado", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/validado.html"))
});
//Formulario de ingreso al sitio
app.get("/ingreso", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/ingreso.html"))
});
//Muestra datos del perfil de usuario e historial de compras
app.get("/perfil", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/perfil.html"))
});