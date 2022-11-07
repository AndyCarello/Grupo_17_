//Este Mw verifica que el atributo admin exista en la session de user y sea verdadero, caso contrario fuerza el logout del usuario. Se usa para validar permisos de administrador en las rutas en donde se lo llama.
module.exports = (req, res, next) => {

    if (!req.session.user.admin) {
        return res.redirect('/usuarios/salir');
    }

    next();
}