let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let mainController = require('../controllers/mainController.js'); //Requiero el mainController
const path = require("path"); //Borrar cuando este terminado

//Usando router llamo a un metodo del controlador segun la url
router.get("/", mainController.test);
router.get("/delivery", mainController.delivery);
router.get("/preguntas-frecuentes", mainController.preguntasFrecuentes);
router.get('/info', mainController.quienesSomos);
router.get("/productos", (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/productos.html"));
    console.log("Mostrando Pagina de productos");
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

module.exports = router; //Exporto mi mainRouter