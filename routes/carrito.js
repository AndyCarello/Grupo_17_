let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let carritoController = require('../controllers/carritoController.js'); //Requiero el carritoController
const registradoMiddleware = require('../middlewares/registradoMiddleware');

//Usando router llamo a un metodo del controlador segun la url
router.get('/', registradoMiddleware, carritoController.carritoCompras);
router.get('/compra', registradoMiddleware, carritoController.compra);

module.exports = router; //Exporto mi carritoRouter