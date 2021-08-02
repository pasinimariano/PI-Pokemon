const express = require('express');
// const storeModel = require('../model/store');
const server = express.Router();

server.get('/', (req, res) => {
    res.send('Hola que ase rrrrrrrrrrrr')
});

module.exports = server;
