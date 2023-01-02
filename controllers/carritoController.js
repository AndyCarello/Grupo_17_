const db = require('../database/models');
const sequelize = db.sequelize;

//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
    carritoCompras: async (req, res) => {

        if (req.cookies.carrito && req.cookies.carrito != "") {

            var productosEnCarrito = JSON.parse(req.cookies.carrito);
            let idsProductos = [];
            for (producto of productosEnCarrito) {
                idsProductos.push(parseInt(producto.id))
            }

            try {
                productos = await db.Product.findAll({
                    where: { id: idsProductos },
                    raw: true
                })
            } catch (e) {
                console.log(e);
                console.log("La app sigue corriendo");
                return res.send("Capture el error y no rompio");
            }

            let productosConCantidad = productos.map(function (a) {
                a.cantidad = productosEnCarrito.find((b) => b.id == a.id).cantidad
                return a
            })

            res.render("carrito/carrito", {
                title: "Carrito de compras",
                estilos: [
                    "footer.css",
                    "style.css"
                ],
                productos: productosConCantidad
            });
            console.log("Mostrando carrito");

        } else {
            res.render("carrito/carrito", {
                title: "Carrito de compras",
                estilos: [
                    "footer.css",
                    "style.css"
                ]
            });
            console.log("Mostrando carrito");
        }


    },
    compra: async (req, res) => {

        var productosEnCarrito = JSON.parse(req.cookies.carrito);
        let idsProductos = [];
        for (producto of productosEnCarrito) {
            idsProductos.push(parseInt(producto.id))
        }

        try {
            productosEnBase = await db.Product.findAll({
                where: { id: idsProductos },
                raw: true
            })
        } catch (e) {
            console.log(e);
            console.log("La app sigue corriendo");
            return res.send("Capture el error y no rompio");
        }

        let productosConCantidad = productosEnBase.map(function (a) {
            a.cantidad = productosEnCarrito.find((b) => b.id == a.id).cantidad
            return a
        })

        let respuesta = await db.Cart.create({
            date: new Date(Date.now()).toISOString(),
            user_id: req.session.user.id
        })

        let numeroDePedido = respuesta.id
        let productos = []
        for (producto of productosConCantidad) {
            productos.push(
                {
                    cart_id: numeroDePedido,
                    product_id: producto.id,
                    unit_price: parseInt(producto.price),
                    quantity: parseInt(producto.cantidad)
                }
            )
        }

        respuesta = await db.cart_product.bulkCreate(
            productos
        )

        res.clearCookie("carrito");
        res.render("carrito/compra", {
            title: "Compra finalizada",
            estilos: [
                "footer.css",
                "style.css"
            ],
            numeroDePedido: numeroDePedido
        });
        console.log("Mostrando finalizaste tu compra");
    }
};

module.exports = controller;