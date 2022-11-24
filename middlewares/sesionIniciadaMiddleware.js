const path = require('path')
const fs = require('fs')

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/usuarios.json"))
    const data = JSON.parse(jsonData);
    return data;
}
//Define una variable del tipo locals indicando si la sesion esta inciada o no para ajustar la navegacion segun corresponda. Ademas dejo disponible como locals la informacion de usuario.
module.exports = (req, res, next) => {

    res.locals.sesionIniciada = false;

    if (req.session && req.session.user) {
        res.locals.sesionIniciada = true;
        res.locals.user = req.session.user;
    } else {
        let emailCookie = req.cookies.emailUsuario // Guarda la cookie en una variable
        let usuarios = findAll() //Traigo todos los Usuarios
        let usuarioEncontrado = usuarios.find((usuario) => {
            return usuario.email == emailCookie // Busco la coincidencia con la cookie y la guardo en una variable
        })
        if (usuarioEncontrado) {
            delete usuarioEncontrado.password;
            res.locals.sesionIniciada = true;
            res.locals.user = req.session.user;
            req.session.user = usuarioEncontrado // Valido si existe el usuario y lo guardo en la session
        }
    }
    
    next();
}