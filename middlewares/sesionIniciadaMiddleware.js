module.exports = (req, res, next) => {

    res.locals.sesionIniciada = false;

    if (req.session && req.session.user) {
        res.locals.sesionIniciada = true;
        res.locals.user = req.session.user;
        console.log("Esto entro")
    }

    next();
}