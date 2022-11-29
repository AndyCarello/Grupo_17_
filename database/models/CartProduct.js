module.exports = (Sequelize, DataTypes) => {


    let alias = "cart_product";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        unit_price: {

            type: DataTypes.DECIMAL
        }

    };

    let config = {

        timestamps : false,
        tableName : 'cart_product',
    };

    const CartProduct = Sequelize.define(alias , cols , config)

    return CartProduct;
};