let express = require ('express'); 
let router = express.Router(); //Requiero la funcion router de express 
let productosController = require('../controllers/productosController.js'); //Requiero el productosController
const path = require('path');
const multer = require('multer');
const aux = require('../js/auxiliares');
const adminMiddleware = require('../middlewares/adminMiddleware')

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img'))
    },
    filename :(req,file,cb) =>{
        const newFilename = aux.textoSeguro("torta") + "-" + Date.now() + path.extname(file.originalname);
        cb( null, newFilename );
    } 
});

const upload = multer({storage: storage})


//Usando router llamo a un metodo del controlador segun la url
router.get("/", productosController.productList );
router.get("/crear", adminMiddleware, productosController.add);
router.post("/crear", adminMiddleware, upload.single("foto"), productosController.crearProducto);
router.get("/actualizar/:id", adminMiddleware, productosController.productEdit);
router.put("/actualizar/:id", adminMiddleware, upload.single("foto"), productosController.actualizarProducto);
router.delete("/eliminar/:id", adminMiddleware, productosController.borrarProducto);
router.get("/buscar/", productosController.buscarPorTitulo);
router.get("/:id", productosController.productDetail);


module.exports = router; //Exporto mi productosRouter