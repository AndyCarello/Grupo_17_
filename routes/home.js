let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let homeController = require('../controllers/homeController.js'); //Requiero el homeController

//Usando router llamo a un metodo del controlador segun la url
router.get('/index', homeController.home);


module.exports = router; //Exporto mi homeRouter