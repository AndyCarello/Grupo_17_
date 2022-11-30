module.exports = (Sequelize, DataTypes) => {


    let alias = "User";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true,
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
        address: {
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
        }
    
    };

    let config = {

        timestamps : false,
        tableName : 'users',
    };

    const User = Sequelize.define(alias , cols , config);

    User.associate = function(models) {
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey : "user_id"
        })
        User.belongsTo(models.Neighborhood, {
            as: "neighborhood",
            foreignKey: "neighborhood_id"
        })
    }
    return User;
};

