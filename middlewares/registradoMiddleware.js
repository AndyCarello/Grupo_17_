//Si se quiere ingresar a una ruta que requiera estar logueado y no lo este, este MW redirige al form de login.
module.exports = (req, res, next) => {

    if (!req.session.user) {
        return res.redirect('/usuarios/ingreso');
    }

    next();
}