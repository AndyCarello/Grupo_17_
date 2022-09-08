const express = require("express"); 
const app = express();
const path = require("path");

//const { title } = require("process");// Comentada por que no se que hace

const rutasMain = require('./routes/main.js'); 
const rutasUsuarios = require('./routes/usuarios.js');
const rutasProductos = require('./routes/productos.js');
const rutasCarrito = require('./routes/carrito.js');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));

app.use('/', rutasMain);
app.use('/usuarios', rutasUsuarios);
app.use('/productos', rutasProductos);
app.use('/carrito', rutasCarrito);

app.listen(process.env.PORT || 80, () => {
    console.log("Servidor corriendo en el puerto 80 >> http://localhost/");
});