let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let usuariosController = require('../controllers/usuariosController.js'); //Requiero el usuariosController
const usersValidations = require('../validaciones/usersValidations');


//Usando router llamo a un metodo del controlador segun la url
router.get("/registro",usuariosController.registro);
router.post("/registro",usersValidations.registerValidation , usuariosController.processRegister);
router.post("/registrado", usuariosController.registrado);
router.get("/recuperar", usuariosController.recuperar); 
router.get("/reestablecercontrasena", usuariosController.restablecer);
router.get("/validado", usuariosController.validado);
router.get("/ingreso", usuariosController.ingreso);
router.post("/ingreso", usersValidations.logInValidation, usuariosController.iniciarSesion);
router.get("/perfil/:id", usuariosController.perfil);
router.post("/actualizar/:id", usuariosController.actualizar);
router.post("/recuperacion", usuariosController.recuperacion);


module.exports = router; //Exporto mi usuariosRouter