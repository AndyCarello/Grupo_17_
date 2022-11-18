const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "products";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
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
            
        },
        deleted_at: {
            type: DataTypes.DATE
        }

    

    };

    let config = {

        timeStamps : false,
        tableName : 'products',
    };

    const Product = Sequelize.define(alias , cols , config)

    return Product;
};