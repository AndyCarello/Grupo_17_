module.exports = (Sequelize, DataTypes) => {


    let alias = "Ingredient";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        }

    };

    let config = {

        timestamps : false,
        tableName : 'ingredients',
    };

    const Ingredient = Sequelize.define(alias , cols , config);

    Ingredient.associate = function(models) {
        Ingredient.belongsToMany(models.Product, {
            as: "products",
            through: "ingredient_product",
            foreignKey: "ingredient_id",
            otherKey: "product_id",
            timestamps: false
        })
    }

    return Ingredient;
};