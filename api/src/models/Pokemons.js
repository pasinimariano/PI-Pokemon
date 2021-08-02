const { DataTypes } = require('sequelize');

const Pokemons = (sequelize) => {
    return sequelize.define('pokemon', {
        id: { //UUID
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER
        },
        atk: {
            type: DataTypes.INTEGER
        },
        def: {
            type: DataTypes.INTEGER
        },
        str: {
            type: DataTypes.INTEGER
        },
        spd: {
            type: DataTypes.INTEGER
        },
        hgt: {
            type: DataTypes.INTEGER
        },
        wdt: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    })
};

module.exports = Pokemons;
