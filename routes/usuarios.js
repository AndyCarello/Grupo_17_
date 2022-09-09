let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let usuariosController = require('../controllers/usuariosController.js'); //Requiero el usuariosController

//Usando router llamo a un metodo del controlador segun la url
router.get("/registro", usuariosController.registro);
router.get("/registrado", usuariosController.registrado);
router.get("/recuperar", usuariosController.recuperar);
router.get("/reestablecercontrasena", usuariosController.restablecer);
router.get("/validado", usuariosController.validado);
router.get("/ingreso", usuariosController.ingreso);
router.get("/perfil", usuariosController.perfil);
router.get("/recuperacion", usuariosController.recuperacion);

module.exports = router; //Exporto mi usuariosRouter