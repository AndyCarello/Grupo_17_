const express = require("express"); 
const app = express();
const path = require("path");
const session = require('express-session'); 
const methodOverride = require("method-override");
const sesionIniciadaMiddleware = require("./middlewares/sesionIniciadaMiddleware.js"); //Llamo al mw que maneja las sesiones a nivel aplicacion
const cookieParser=require('cookie-parser')
//Defino a ejs como mi view engine y especifico donde esta mi carpeta views
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//Hago que public este disponible como un recurso estatico
app.use(express.static("public"));

//Agrego estas lineas para que pueda postear formularios
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Confirguro la libreria express session
app.use(session({
        secret: "frase secreta",
        resave: false,
        saveUninitialized: false
    }));
app.use(cookieParser()); // lo implemento para usar cookies
app.use(sesionIniciadaMiddleware); //Hago uso del Mw requerido


//Llamo a mis archivos de rutas con un require
const rutasMain = require('./routes/main.js'); 
const rutasUsuarios = require('./routes/usuarios.js');
const rutasProductos = require('./routes/productos.js');
const rutasCarrito = require('./routes/carrito.js');
const rutasContacto = require('./routes/main.js');
const rutasHome = require('./routes/main.js');
const rutasFooter = require('./routes/main.js');

//Defino que archivo de rutas utiliza cada 'prefijo' de la url
app.use('/', rutasMain);
app.use('/usuarios', rutasUsuarios);
app.use('/productos', rutasProductos);
app.use('/carrito', rutasCarrito);
app.use('/home', rutasHome);
app.use('/contacto', rutasContacto);
app.use('/footer', rutasFooter);

//Solicito el puerto al entorno (environment) y, si no me lo pasa, uso el 80
app.listen(process.env.PORT || 80, () => {
    console.log("Servidor corriendo en el puerto 80 >> http://localhost/");
});