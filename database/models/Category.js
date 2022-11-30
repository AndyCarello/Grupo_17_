module.exports = (Sequelize, DataTypes) => {

    let alias = "Category";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true,
        },
        name: {
            type: DataTypes.STRING
        }

    };

    let config = {

        timestamps : false,
        tableName : 'categories',
    };

    const Category = Sequelize.define(alias , cols , config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
           as: "products",
           foreignKey: "category_id"
        })
    }

    return Category;
};