let express = require ('express'); 
let router = express.Router(); //Requiero la funcion router de express 
let productosController = require('../controllers/productosController.js'); //Requiero el productosController

//Usando router llamo a un metodo del controlador segun la url
router.get("/producto", productosController.detalle);

module.exports = router; //Exporto mi productosRouter