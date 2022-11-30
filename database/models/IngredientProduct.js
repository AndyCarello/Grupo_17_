module.exports = (Sequelize, DataTypes) => {


    let alias = "ingredient_product";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        ingredient_id: {
            type: DataTypes.INTEGER
        }

    };

    let config = {

        timestamps : false,
        tableName : 'ingredient_product',
    };

    const IngredientProduct = Sequelize.define(alias , cols , config)

    return IngredientProduct;
};