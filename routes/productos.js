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
router.get("/", productosController.listar );
router.get("/crear", adminMiddleware, productosController.formCrear);
router.post("/crear", adminMiddleware, upload.single("foto"), productosController.crear);
router.get("/actualizar/:id", adminMiddleware, productosController.formActualizar);
router.put("/actualizar/:id", adminMiddleware, upload.single("foto"), productosController.actualizar);
router.delete("/eliminar/:id", adminMiddleware, productosController.eliminar);
router.get("/:id", productosController.detalle);


module.exports = router; //Exporto mi productosRouter