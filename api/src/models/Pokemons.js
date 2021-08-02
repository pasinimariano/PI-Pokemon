const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pokemon', {
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        hp: {
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
    })
};


/*
Pokemon con las siguientes propiedades:
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *
Vida
Fuerza
Defensa
Velocidad
Altura
Peso
*/