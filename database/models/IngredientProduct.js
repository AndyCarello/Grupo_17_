const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "ingredient_product";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        ingredient_id: {
            type: DataTypes.INTEGER
        }

    };

    let config = {

        timeStamps : false,
        tableName : 'ingredient_product',
    };

    const IngredientProduct = Sequelize.define(alias , cols , config)

    return IngredientProduct;
};