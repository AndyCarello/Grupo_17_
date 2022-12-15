const { body } = require('express-validator');

module.exports = {

    registerValidation: [

        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("formate de email invalido"),
        body("nombre")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("Apellido")
            .notEmpty()
            .withMessage("Campo apellido incompleto"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto"),
        body("Fechadenacimiento")
            .notEmpty()
            .withMessage("Campo nacimiento incompleto"),
        body("calleyaltura")
            .notEmpty()
            .withMessage("Campo domiclio incompleto"),
        body("piso")
            .notEmpty()
            .withMessage("Campo piso incompleto"),
        body("dpto")
            .notEmpty()
            .withMessage("Campo dpto incompleto"),
        body("telefono")
            .notEmpty()
            .withMessage("Campo telefono incompleto"),
    ]
}

