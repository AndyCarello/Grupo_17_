let express = require ('express');
let router = express.Router(); //Requiero la funcion router de express
let usuariosController = require('../controllers/usuariosController.js'); //Requiero el usuariosController
const usersValidations = require('../validaciones/usersValidations');
const invitadoMiddleware = require('../middlewares/invitadoMiddleware');
const registradoMiddleware = require('../middlewares/registradoMiddleware');


//Usando router llamo a un metodo del controlador segun la url
router.get("/registro", invitadoMiddleware, usuariosController.registro);
router.post("/registro",usersValidations.registerValidation , usuariosController.processRegister);
router.post("/registrado", usuariosController.registrado);
router.get("/recuperar", invitadoMiddleware, usuariosController.recuperar); 
router.get("/reestablecercontrasena", invitadoMiddleware, usuariosController.restablecer);
router.get("/validado", invitadoMiddleware, usuariosController.validado);
router.get("/ingreso", invitadoMiddleware, usuariosController.ingreso);
router.post("/ingreso", usersValidations.logInValidation, usuariosController.iniciarSesion);
router.get("/perfil/", registradoMiddleware, usuariosController.perfil);
router.post("/actualizar/", registradoMiddleware, usuariosController.actualizar);
router.post("/recuperacion", invitadoMiddleware, usuariosController.recuperacion);
router.get("/salir",usuariosController.salir);


module.exports = router; //Exporto mi usuariosRouter