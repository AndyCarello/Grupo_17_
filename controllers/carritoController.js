const db = require('../database/models');
const sequelize = db.sequelize;

//Defino un objeto literal que contiene los metodos con los callbacks de cada ruta y lo exporto para poder usarlo en el router
const controller = {
   /*  Este es el metodo que renderiza el carrito.
    Funciona mediante una cookie "carrito" que contiene duplas id, cantidad
    a las cuales les agrega informacion desde la db. Este metodo no modifica la cookie */
    carritoCompras: async (req, res) => {

        //verifico que existe el carrito y no esta vacio
        if (req.cookies.carrito && req.cookies.carrito != "") {
            //convierto el json del carrito en un array de objetos
            var productosEnCarrito = JSON.parse(req.cookies.carrito);
            //me guardo todos los ids de productos
            let idsProductos = [];
            for (producto of productosEnCarrito) {
                idsProductos.push(parseInt(producto.id))
            }
            //traigo de la db todos los productos cuyo id esté en el carrito
            try {
                productosDB = await db.Product.findAll({
                    where: { id: idsProductos },
                    raw: true
                })
            } catch (e) {
                return res.send(e);
            }
            //a la info traida de la db, le agrego la cantidad de cada producto
            let productosConCantidad = [];
            productosConCantidad = productosDB.map(function (productoDB) {
                    let productoEncontrado = productosEnCarrito.find(function (productoActual) {
                    return productoActual.id == productoDB.id;
                })
                productoDB.cantidad = productoEncontrado.cantidad;
                return productoDB;
            })

            res.render("carrito/carrito", {
                title: "Carrito de compras",
                estilos: [
                    "footer.css",
                    "style.css"
                ],
                productos: productosConCantidad
            });
        } else {
            res.render("carrito/carrito", {
                title: "Carrito de compras",
                estilos: [
                    "footer.css",
                    "style.css"
                ]
            });
        }


    },
    compra: async (req, res) => {
        //convierto el json del carrito en un array de objetos
        var productosEnCarrito = JSON.parse(req.cookies.carrito);
        //me guardo todos los ids de productos
        let idsProductos = [];
        for (producto of productosEnCarrito) {
            idsProductos.push(parseInt(producto.id))
        }
        //traigo de la db todos los productos cuyo id esté en el carrito
        try {
            productosDB = await db.Product.findAll({
                where: { id: idsProductos },
                raw: true
            })
        } catch (e) {
            return res.send(e);
        }
        //a la info traida de la db, le agrego la cantidad de cada producto
        productosConCantidad = productosDB.map(function (productoDB) {
            let productoEncontrado = productosEnCarrito.find(function (productoActual) {
                return productoActual.id == productoDB.id;
            })
            productoDB.cantidad = productoEncontrado.cantidad;
            return productoDB;
        })
        //genero una compra en la db con la fecha actual y el id de usuario
        let respuesta = await db.Cart.create({
            date: new Date(Date.now()).toISOString(),
            user_id: req.session.user.id
        })
        //en la respuesta de la consulta tengo el id del insert que es el nro de pedido
        let numeroDePedido = respuesta.id;
        //armo en productos todo lo que voy a insertar en cart_product(elementos que tiene la compra)
        let productos = [];
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
        //genero los registros con los elementos de la compra
        respuesta = await db.cart_product.bulkCreate(
            productos
        )

        res.cookie('carrito', "", {maxAge: 1});
        res.render("carrito/compra", {
            title: "Compra finalizada",
            estilos: [
                "footer.css",
                "style.css"
            ],
            numeroDePedido: numeroDePedido
        });
    }
};

module.exports = controller;