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