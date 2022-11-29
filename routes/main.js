let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let mainController = require('../controllers/mainController.js'); //Requiero el mainController
const path = require("path"); //Borrar cuando este terminado

//Usando router llamo a un metodo del controlador segun la url
router.get("/", mainController.home);
router.get("/delivery", mainController.delivery);
router.get("/preguntas-frecuentes", mainController.preguntasFrecuentes);
router.get('/info', mainController.quienesSomos);
router.get('/contacto' , mainController.contacto);
router.get("/footer", mainController.footer);


router.get('/test', mainController.test);
router.get('/sequelize', mainController.prueba);//




module.exports = router; //Exporto mi mainRouter