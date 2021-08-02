require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env;
console.log('aca', DB_HOST)

const DB_CONN = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '../models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '../models', file)))
    })

modelDefiners.forEach(model => model(DB_CONN));

let entries = Object.entries(DB_CONN.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
DB_CONN.models = Object.fromEntries(capsEntries);

const { Pokemon } = DB_CONN.models;

module.exports = {
    ...DB_CONN.models,
    CONN: DB_CONN
}
