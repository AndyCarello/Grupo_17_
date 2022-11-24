const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"))
    const data = JSON.parse(jsonData);
    return data;
}

function writeFile(data){
    const stringData = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"), stringData);
}

//Defino funcion para buscar un usuario por id
function buscarUsuarioPorId(id){
    const data = findAll();
    return data.find(function(buscado){
        return buscado.id == id;
    });
}
//Defino una funcion para actualizar usuario por id
function actualizarUsuarioPorId(id, datos) {
    console.log("Actualizando usuario con id: " + id);
    console.log("Nuevo nombre: " + datos.nombre);
    console.log("Nuevo apellido: " + datos.apellido);
}
//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    registro: (req,res)=>{
        res.render("usuarios/registro", {
            title: "Formulario de registro",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando formulario de registro");
    },
    processRegister: (req, res) =>{

        const error = validationResult(req)
        console.log(error.errors)
        if(!error.isEmpty()){

            return res.render("usuarios/registro" , { 
                title: "Formulario de registro",
                estilos: [
                    "style.css"
                ],
                errors: error.errors, 
                old: req.body 
                })
        }
        
        const users = findAll();

        const newUser = {

            id:  users[users.length -1].id +1,
            nombre: req.body.nombre,
            apellido: req.body.Apellido,
            nacimiento: req.body.Fechadenacimiento,
            telefono: req.body.telefono,
            domicilio: req.body.calleyaltura,
            domicilioPiso: req.body.piso,
            domicilioDpto: req.body.dpto,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            
        };

        users.push(newUser);

        writeFile(users);

        res.render("usuarios/registrado", {
            title: "Formulario de ingreso",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando agradecimiento por haberse registrado");


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
    //Metodo que valida los datos del usuario
    iniciarSesion: (req,res)=>{
        const error = validationResult(req);
        //Si hay errores, renderizo el login y le paso los errores al objeto de ejs.
        if(!error.isEmpty()){ 
            return res.render("usuarios/ingreso" , 
                { 
                    title: "Formulario de ingreso",
                    estilos: [
                        "style.css"
                    ],
                    errors: error.errors, 
                    old: req.body 
                })
        }
        
        const data = findAll();//Cargo en data todos los usuarios
        //Verifico en data si existe un usuario con el mail que se esta queriendo loguear
        const user = data.find(function(buscado){
           return buscado.email == req.body.email;
        })

        if (user === undefined) { //Si no existe el usuario renderizo con error
            res.render("usuarios/ingreso", 
                {
                    title: "Formulario de ingreso",
                    estilos: [
                        "style.css"        
                    ],
                    errors: [
                        {
                            msg : "Los datos de inicio de sesión no son válidos"
                        }
                    ]
                });
        } else { //Comparo el hash de contraseña guardado con el pass que quiere hacer el login
            if (bcryptjs.compareSync(req.body.password, user.password)) {//Si coinciden...
                delete user.password; //elimino la contraseña de la variable user
                req.session.user = user;//Disponibilizo los datos de usuario a nivel sesion
                // Valido si el usuario puso recordarme y lo guardo en una cookie
                if(req.body.recordarme){
                    res.cookie('emailUsuario', req.body.email, {maxAge: 1000*60*60})
                } 
            
                res.redirect("/usuarios/perfil/");//Redirijo al perfil de usuario
            } 
            else {//Si no coinciden los Passw renderizo con error
                console.log("No coinciden passwords");
                res.render("usuarios/ingreso", 
                {
                    title: "Formulario de ingreso",
                    estilos: [
                        "style.css"        
                    ],
                    errors: [
                        {
                            msg : "Los datos de inicio de sesión no son válidos"
                        }
                    ]
                });
            }
        }
    },

    perfil: (req,res)=>{
        if (req.session.user === undefined) {
            res.redirect("/");
        } else {
            let usuario = buscarUsuarioPorId(req.session.user.id);
            res.render("usuarios/perfil", {
                title: "Perfil de usuario",
                estilos: [
                    "style.css"        
                ],
                usuario: usuario
            });
            console.log("Mostrando Pagina de Perfil de usuario con id: " + req.params.id);
        }
    
        
    },
    recuperacion: (req,res)=>{
        res.render("usuarios/recuperacion", {
            title: "Recuperaración iniciada",
            estilos: [
                "style.css"        
            ]
        });
        console.log("Mostrando recuperacion enviada");
    }, 
    actualizar: (req, res)=>{
        let id = req.session.user.id;
        let datos = {
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }
        actualizarUsuarioPorId(id, datos);
        res.redirect("/usuarios/perfil/");
    },
    salir: (req, res)=>{//Destruye la sesion de usuario y redirige al home
        req.session.destroy();
        res.clearCookie('emailUsuario');
        return res.redirect("/");
    },

    
};

module.exports = controller;