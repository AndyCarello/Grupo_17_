module.exports = (Sequelize, DataTypes) => {

    let alias = "Cart";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true,
        },
        date: {
            type: DataTypes.DATE
        },
        user_id: {

            type: DataTypes.INTEGER
        }
    

    };

    let config = {

        timestamps : false,
        tableName : 'carts',
    };

    const Cart = Sequelize.define(alias , cols , config);

    Cart.associate = function(models) {
      Cart.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      })
      Cart.belongsToMany(models.Product, {
        as: "products",
        through: "cart_product",
        foreignKey: "cart_id",
        otherKey: "product_id",
        timestamps: false
      })
    }

    return Cart;
};




