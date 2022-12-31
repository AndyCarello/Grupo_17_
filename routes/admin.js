let express = require ('express');
let router = express.Router();
const adminController = require ('../controllers/adminController.js');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get("/", adminMiddleware, adminController.administrador);
router.get("/usuarios", adminMiddleware, adminController.listarUsuarios);
router.put("/usuarios/:id", adminMiddleware, adminController.alternarPermisosAdmin);
router.delete("/usuarios/:id", adminMiddleware, adminController.eliminarUsuario);
router.get("/productos", adminMiddleware, adminController.listarProductos);
router.delete("/productos/:id", adminMiddleware, adminController.eliminarProducto);
router.get("/ingredientes", adminMiddleware, adminController.listarIngredientes);
router.post("/ingredientes", adminMiddleware, adminController.crearIngrediente);
router.put("/ingredientes/:id", adminMiddleware, adminController.actualizarIngrediente);
router.delete("/ingredientes/:id", adminMiddleware, adminController.eliminarIngrediente);
router.get("/categorias", adminMiddleware, adminController.listarCategorias);
router.post("/categorias", adminMiddleware, adminController.crearCategoria);
router.put("/categorias/:id", adminMiddleware, adminController.actualizarCategoria);
router.delete("/categorias/:id", adminMiddleware, adminController.eliminarCategoria);

module.exports = router;