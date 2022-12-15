const { body } = require('express-validator');

module.exports = {
    loginValidations: [
        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("Formato de email invalido"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
    ]
}