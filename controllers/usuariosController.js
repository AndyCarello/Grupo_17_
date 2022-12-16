const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models');
const sequelize = db.sequelize;

/* function findAll(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"))
    const data = JSON.parse(jsonData);
    return data;
} */

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
    registro: async (req,res)=>{
        const localidades = await db.Neighborhood.findAll();
        res.render("usuarios/registro", {
            title: "Formulario de registro",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ],
            localidades: localidades
        });
        console.log("Mostrando formulario de registro");
    },
    processRegister: async(req, res) =>{

        const error = validationResult(req)
        console.log(error.errors)
        if(!error.isEmpty()){
            const localidades = await db.Neighborhood.findAll();
            return res.render("usuarios/registro" , { 
                title: "Formulario de registro",
                estilos: [
                    "index.css",
                    "footer.css",
                    "style.css"
                ],
                localidades:localidades,
                errors: error.errors, 
                old: req.body 
                })
        }
        
        /* const users = findAll(); */

        const newUser = {

            name: req.body.nombre,
            lastname: req.body.Apellido,
            birthday: req.body.Fechadenacimiento,
            phone: req.body.telefono,
            neighborhood_id: req.body.localidad,
            address: req.body.calleyaltura,
            floor: req.body.piso,
            apartment: req.body.dpto,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            
        };

        await db.User.create(newUser);

        res.render("usuarios/registrado", {
            title: "Formulario de ingreso",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando agradecimiento por haberse registrado");


    },
    registrado: (req,res)=>{


        res.render("usuarios/registrado", {
            title: "Formulario de ingreso",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando agradecimiento por haberse registrado");

        
    },
    recuperar: (req,res)=>{
        res.render("usuarios/recuperar", {
            title: "Recuperar contraseña",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando recuperar contraseña");
    },
    restablecer: (req,res)=>{
        res.render("usuarios/reestablecercontrasena", {
            title: "Reestablecer contraseña",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando reestablecer contraseña");
    },
    validado: (req,res)=>{
        res.render("usuarios/validado", {
            title: "Validado correctamente",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando correo validado");
    },
    ingreso: (req,res)=>{
        res.render("usuarios/ingreso", {
            title: "Formulario de ingreso",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando ingreso");
    },
    //Metodo que valida los datos del usuario
    iniciarSesion: async (req,res)=>{
        const error = validationResult(req);
        //Si hay errores, renderizo el login y le paso los errores al objeto de ejs.
        if(!error.isEmpty()){ 
            return res.render("usuarios/ingreso" , 
                { 
                    title: "Formulario de ingreso",
                    estilos: [
                        "index.css",
                        "footer.css",
                        "style.css"
                    ],
                    errors: error.errors, 
                    old: req.body 
                })
        }
        
        const user = await db.User.findOne({
            where: { email: req.body.email}
        })

        if (user === null) { //Si no existe el usuario renderizo con error
            res.render("usuarios/ingreso", 
                {
                    title: "Formulario de ingreso",
                    estilos: [
                        "index.css",
                        "footer.css",
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
                        "index.css",
                        "footer.css",
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

    perfil: async (req,res)=>{
        if (req.session.user === undefined) {
            res.redirect("/");
        } else {
            const localidades = await db.Neighborhood.findAll();
            res.render("usuarios/perfil", {
                title: "Perfil de usuario",
                estilos: [
                    "index.css",
                    "footer.css",
                    "style.css"        
                ],
                usuario: req.session.user,
                localidades: localidades
            });
            console.log("Mostrando Pagina de Perfil de usuario con id: " + req.session.user.id);
        }
    
        
    },
    recuperacion: (req,res)=>{
        res.render("usuarios/recuperacion", {
            title: "Recuperaración iniciada",
            estilos: [
                "index.css",
                "footer.css",
                "style.css"        
            ]
        });
        console.log("Mostrando recuperacion enviada");
    }, 
    actualizar: async (req, res)=>{
        let id = req.session.user.id;
        let datos = {
            name: req.body.nombre,
            lastname: req.body.apellido,
            birthday: req.body.fechadenacimiento,
            phone: req.body.telefono,
            neighborhood_id: req.body.localidad,
            address: req.body.calleyaltura,
            floor: req.body.piso,
            apartment: req.body.dpto
        }
        await db.User.update(
            datos,
            {
                where: {id: id}
            })
        const user = await db.User.findOne({
            where: {id: req.session.user.id}
        })
        delete user.password;
        req.session.user = user;
        
        res.redirect("/usuarios/perfil/");
    },
    salir: (req, res)=>{//Destruye la sesion de usuario y redirige al home
        req.session.destroy();
        res.clearCookie('emailUsuario');
        return res.redirect("/");
    },

    
};

module.exports = controller;