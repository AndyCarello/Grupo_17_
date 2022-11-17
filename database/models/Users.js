const { DataTypes } = require("sequelize");


module.exports = () => {

    let alias = "users";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        phone: {
            type: DataTypes.STRING
        },
        adress: {
            type: DataTypes.STRING
        },
        apartment: {
            type: DataTypes.STRING
        },
        floor: {
            type: DataTypes.STRING
        },
        neighborhood_id: {
            type: DataTypes.INTEGER
        },
        is_admin: {
            type: DataTypes.TINYINT
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    

    };

    let config = {

        timeStamps : false,
        tableName : 'users',
    };

    const Users = Sequelize.define(alias , cols , config)

    return Users;
};