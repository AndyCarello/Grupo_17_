let express = require ('express'); 
let router = express.Router(); //Requiero la funcion router de express 
let productosController = require('../controllers/productosController.js'); //Requiero el productosController

//Usando router llamo a un metodo del controlador segun la url
router.get("/:id", productosController.detalle);
router.get("/crear", productosController.formCrear);
router.post("/crear", productosController.crear);
router.get("/actualizar/:id", productosController.formActualizar);
router.post("/actualizar/:id", productosController.actualizar);
router.post("/eliminar/:id", productosController.eliminar);

module.exports = router; //Exporto mi productosRouter