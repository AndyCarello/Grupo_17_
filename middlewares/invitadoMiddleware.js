//Si el usuario esta logueado, redirige las rutas donde se llama a este MW al perfil de usuario.
module.exports = (req, res, next) => {

    if (req.session.user) {
        return res.redirect('/usuarios/perfil');
    }

    next();
}