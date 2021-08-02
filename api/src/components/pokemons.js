const express = require('express');
const pepe = require('../models/Pokemons')
const server = express.Router();
// console.log('pepe', pepe())
server.get('/', (req, res) => {
    res.send('hola que ase rrr')
});

module.exports = server;
