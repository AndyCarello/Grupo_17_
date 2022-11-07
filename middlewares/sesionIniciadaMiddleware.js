//Define una variable del tipo locals indicando si la sesion esta inciada o no para ajustar la navegacion segun corresponda. Ademas dejo disponible como locals la informacion de usuario.
module.exports = (req, res, next) => {

    res.locals.sesionIniciada = false;

    if (req.session && req.session.user) {
        res.locals.sesionIniciada = true;
        res.locals.user = req.session.user;
        console.log("Esto entro")
    }

    next();
}