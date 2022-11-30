module.exports = (Sequelize, DataTypes) => {


    let alias = "Product";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DECIMAL
        },
        image: {
            type: DataTypes.STRING,
            
        },
        category_id: {
            type: DataTypes.INTEGER,
            
        }
    };

    let config = {

        timestamps : false,
        tableName : 'products',
    };

    const Product = Sequelize.define(alias , cols , config);

    Product.associate = function(models){
        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: "cart_product",
            foreignKey: "product_id",
            otherKey: "cart_id",
            timestamps: false
        })
        Product.belongsTo(models.Category, {
           as: "category",
           foreignKey: "category_id" 
        })
        Product.belongsToMany(models.Ingredient, {
            as: "ingredients",
            through: "ingredient_product",
            foreignKey: "product_id",
            otherKey: "ingredient_id",
            timestamps: false
        })
    }

    return Product;
};