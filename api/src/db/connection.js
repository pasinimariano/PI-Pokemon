require('dotenv').config();
const { Sequelize } = require('sequelize');
const modelDefiners = require('./modelDefiners');
const toCaps = require('./toCaps');
const associations = require('./associations');

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env;

const DB_CONN = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false
});

modelDefiners(DB_CONN);

toCaps(DB_CONN);

associations(DB_CONN);

module.exports = {
    ...DB_CONN.models,
    CONN: DB_CONN
};
