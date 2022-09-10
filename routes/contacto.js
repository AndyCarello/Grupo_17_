let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let contactoController = require('../controllers/contactoController.js'); //Requiero el contactoController

//Usando router llamo a un metodo del controlador segun la url
router.get('/contacto', contactoController.contacto);


module.exports = router; //Exporto mi contactoRouter