let express = require ('express');
//let app = express();
let router = express.Router();

//app.use(express.static("../public"));

router.get("/registro", (req,res)=>{
    res.render("registro", {
        title: "Formulario de registroo",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando formulario de registro");
});

router.get("/registrado", (req,res)=>{
    res.render("registrado", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando agradecimiento por haberse registrado");
});

router.get("/recuperar", (req,res)=>{
    res.render("recuperar", {
        title: "Recuperar contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperar contraseña");
});

router.get("/reestablecercontrasena", (req,res)=>{
    res.render("reestablecercontrasena", {
        title: "Reestablecer contraseña",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando reestablecer contraseña");
});

router.get("/validado", (req,res)=>{
    res.render("validado", {
        title: "Validado correctamente",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando correo validado");
});

router.get("/ingreso", (req,res)=>{
    res.render("ingreso", {
        title: "Formulario de ingreso",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando ingreso");
});

router.get("/perfil", (req,res)=>{
    res.render("perfil", {
        title: "Perfil de usuario",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando Pagina de Perfil");
});

router.get("/recuperacion", (req,res)=>{
    res.render("recuperacion", {
        title: "Recuperaración iniciada",
        estilos: [
            "style.css"        
        ]
    });
    console.log("Mostrando recuperacion enviada");
});

module.exports = router;