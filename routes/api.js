let express = require ('express');
let router = express.Router();
let users = require ('../controllers/api/usersController.js');

//Rutas api de usuario

router.get("/users/", users.list);
router.get("/users/:id", users.detail);

//Rutas api de productos

module.exports = router;