const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "ingredients";

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
        tableName : 'ingredients',
    };

    const Ingredients = Sequelize.define(alias , cols , config)

    return Ingredients;
};