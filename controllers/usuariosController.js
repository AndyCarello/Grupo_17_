//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    registro: (req,res)=>{
        res.render("usuarios/registro", {
            title: "Formulario de registroo",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando formulario de registro");
    },
    registrado: (req,res)=>{
        res.render("usuarios/registrado", {
            title: "Formulario de ingreso",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando agradecimiento por haberse registrado");
    },
    recuperar: (req,res)=>{
        res.render("usuarios/recuperar", {
            title: "Recuperar contraseña",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando recuperar contraseña");
    },
    restablecer: (req,res)=>{
        res.render("usuarios/reestablecercontrasena", {
            title: "Reestablecer contraseña",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando reestablecer contraseña");
    },
    validado: (req,res)=>{
        res.render("usuarios/validado", {
            title: "Validado correctamente",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando correo validado");
    },
    ingreso: (req,res)=>{
        res.render("usuarios/ingreso", {
            title: "Formulario de ingreso",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando ingreso");
    },
    perfil: (req,res)=>{
        res.render("usuarios/perfil", {
            title: "Perfil de usuario",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando Pagina de Perfil");
    },
    recuperacion: (req,res)=>{
        res.render("usuarios/recuperacion", {
            title: "Recuperaración iniciada",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando recuperacion enviada");
    }
};

module.exports = controller;