const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "cart";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE
        },
        user_id: {

            type: DataTypes.INTEGER
        }
    

    };

    let config = {

        timeStamps : false,
        tableName : 'cart',
    };

    const Cart = Sequelize.define(alias , cols , config)

    return Cart;
};