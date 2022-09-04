
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static("public"));


app.listen(3030, () =>{ 

    console.log("Servidor levantado y corriendo , andando ....")

});

app.get("/", (req,res)=>{

    res.sendFile(path.join(__dirname, "/views/index.html"))

});


app.get('/contacto', (req,res)=>{

    res.sendFile(path.join(__dirname,'./views/contacto.html'));
  
  });
  
  app.get('/Productos', (req,res)=>{

    res.sendFile(path.join(__dirname,'./views/Productos.html'));
  
  });