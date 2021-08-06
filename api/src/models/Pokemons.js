const { DataTypes } = require('sequelize');

const Pokemons = (sequelize) => {
    return sequelize.define('pokemon', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(20),
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
        spc_atk: {
            type: DataTypes.INTEGER
        },
        def: {
            type: DataTypes.INTEGER
        },
        spc_def: {
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
        initialAutoIncrement: 152
    })
};

module.exports = Pokemons;
