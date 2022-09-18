let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let carritoController = require('../controllers/carritoController.js'); //Requiero el carritoController

//Usando router llamo a un metodo del controlador segun la url
router.get('/', carritoController.carritoCompras);
router.get('/compra', carritoController.compra);

module.exports = router; //Exporto mi carritoRouter