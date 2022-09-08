const express = require ("express"); 
const app = express ();
const path = require("path");
const { title } = require("process");
const rutasMain = require ('./routes/main.js'); 


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));

app.use('/', rutasMain);




app.listen(process.env.PORT || 80, () => {
    console.log("Servidor corriendo en el puerto 80 >> http://localhost/");
});