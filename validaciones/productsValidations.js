const { body } = require('express-validator');

module.exports = {


    createValidation: [

        body("nombre")
        .notEmpty()
        .withMessage("Campo nombre incompleto"),
        body("precio")
        .notEmpty()
        .withMessage("Campo precio incompleto"),
        body("descripcion")
        .notEmpty()
        .withMessage("Campo descripcion incompleto"),
        body("categoria")
        .notEmpty()
        .withMessage("Campo categoria incompleto"),
        body("foto")
        .custom(
            (value, { req }) => {
                const acceptedFileExtensions = [".jpg", ".png", ".jpeg"];
                return acceptedFileExtensions.includes(path.extname(req.file.originalname));
            }
        ).withMessage("formato de archivo invalido, ingrese estos tipos de formato .jpg, .png y .jpeg")


    ],

    updateValidation: [


        body("nombre")
        .notEmpty()
        .withMessage("Campo nombre incompleto"),
        body("precio")
        .notEmpty()
        .withMessage("Campo precio incompleto"),
        body("descripcion")
        .notEmpty()
        .withMessage("Campo descripcion incompleto"),
        body("categoria")
        .notEmpty()
        .withMessage("Campo categoria incompleto"),
        body("foto")
        .custom(
            (value, { req }) => {
                const acceptedFileExtensions = [".jpg", ".png", ".jpeg"];
                return acceptedFileExtensions.includes(path.extname(req.file.originalname));
            }
        ).withMessage("formato de archivo invalido, ingrese estos tipos de formato .jpg, .png y .jpeg")



    ]



}