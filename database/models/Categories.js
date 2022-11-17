const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "categories";

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

        timeStamps : false,
        tableName : 'categories',
    };

    const Categories = Sequelize.define(alias , cols , config)

    return Categories;
};