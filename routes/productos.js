let express = require ('express'); 
let router = express.Router(); //Requiero la funcion router de express 
let productosController = require('../controllers/productosController.js'); //Requiero el productosController
const path = require('path');
const multer = require('multer');
const aux = require('../js/auxiliares');

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
router.get("/crear", productosController.formCrear);
router.post("/crear", upload.single("foto"), productosController.crear);
router.get("/actualizar/:id", productosController.formActualizar);
router.put("/actualizar/:id", upload.single("foto"), productosController.actualizar);
router.delete("/eliminar/:id", productosController.eliminar);
router.get("/:id", productosController.detalle);


module.exports = router; //Exporto mi productosRouter