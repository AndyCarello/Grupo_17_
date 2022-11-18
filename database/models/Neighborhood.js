const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "neighborhoods";

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
        tableName : 'neighborhoods',
    };

    const Neighborhood = Sequelize.define(alias , cols , config)

    return Neighborhood;
};