const { DataTypes } = require('sequelize');

const Types = (sequelize) => {
    return sequelize.define('type', {
        name: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            unique: true,
            allowNull: false
        }
    })
};

module.exports = Types;