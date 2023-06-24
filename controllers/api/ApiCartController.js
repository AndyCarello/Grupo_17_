const db = require("../../database/models");
const sequelize = db.sequelize;

const apiControllerCarts = {
    list: async (req, res) => {
        try {
          const carts = await db.Cart.findAll({
            include: [
              {
                model: db.User,
                as: "user",
                attributes: ["id", "name", "email"],
              },
              {
                model: db.Product,
                as: "cart_products",
                through: {
                  model: db.CartProduct,
                  attributes: ["quantity", "unit_price"],
                },
                attributes: ["id", "name", "price"],
              },
            ],
          });
      
          // Calcular el total de cada carrito
          const cartsWithTotal = carts.map((cart) => {
            const products = cart.cart_products;
            let total = 0;
      
            products.forEach((product) => {
              const quantity = product.cart_product.quantity;
              const unitPrice = product.cart_product.unit_price;
              total += quantity * unitPrice;
            });
      
            return { ...cart.toJSON(), total };
          });
      
          res.send(cartsWithTotal);
        } catch (error) {
          console.log(error);
          res.status(500).send("An error occurred while retrieving the carts.");
        }
      },
      

  create: async (req, res) => {
    const { userId, productId, quantity, unitPrice } = req.body;

    try {
      // Crear un nuevo carrito
      const cart = await db.Cart.create({
        date: new Date(),
        user_id: userId,
      });

      // Agregar el producto al carrito
      await db.CartProduct.create({
        cart_id: cart.id,
        product_id: productId,
        quantity,
        unit_price: unitPrice,
      });

      res.status(201).send("Cart created successfully.");
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while creating the cart.");
    }
  },
};

//Exportar el controlador
module.exports = apiControllerCarts;
