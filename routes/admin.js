let express = require ('express');
let router = express.Router();
const adminController = require ('../controllers/adminController.js');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get("/", adminMiddleware, adminController.administrador);
router.get("/usuarios", adminMiddleware, adminController.listarUsuarios);
router.put("/usuarios", adminMiddleware, adminController.alternarPermisosAdmin);
router.get("/productos", adminMiddleware, adminController.listarProductos);
router.get("/ingredientes", adminMiddleware, adminController.listarIngredientes);
router.post("/ingredientes", adminMiddleware, adminController.crearIngrediente);
router.put("/ingredientes", adminMiddleware, adminController.actualizarIngrediente);
router.delete("/ingredientes", adminMiddleware, adminController.eliminarIngrediente);
router.get("/categorias", adminMiddleware, adminController.listarCategorias);
router.post("/categorias", adminMiddleware, adminController.crearCategoria);
router.put("/categorias", adminMiddleware, adminController.actualizarCategoria);
router.delete("/categorias", adminMiddleware, adminController.eliminarCategoria);

module.exports = router;