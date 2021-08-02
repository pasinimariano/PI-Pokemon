require('dotenv').config();
const Sequelize = require('sequelize');

const { DB_USER, DB_PASS, DB_NAME, HOST, PORT } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${HOST}:${PORT}/${DB_NAME}`)
