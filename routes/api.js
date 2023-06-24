let express = require ('express');
let router = express.Router();
let users = require ('../controllers/api/usersController.js');
let products = require('../controllers/api/productsController.js')

// api cart
let carts = require('../controllers/api/ApiCartController.js');

//Rutas api de usuario

router.get("/users/", users.list);
router.get("/users/:id", users.detail);

//Rutas api de productos
router.get("/products/", products.list);
router.get("/products/:id", products.detail);

//Rutas api de carts
router.get("/carts/", carts.list);
// router.get("/carts/:id", carts.detail);



module.exports = router;