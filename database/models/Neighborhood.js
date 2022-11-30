module.exports = (Sequelize, DataTypes) => {


    let alias = "Neighborhood";

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
        tableName : 'neighborhoods',
    };

    const Neighborhood = Sequelize.define(alias , cols , config);

    Neighborhood.associate = function(models){
        Neighborhood.hasMany(models.User, {
            as: "users",
            foreignKey: "neighborhood_id"
        })
    }

    return Neighborhood;
};