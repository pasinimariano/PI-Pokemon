const express = require('express');
const server = express.Router();
const store = require('./store');

const { Store } = store;
const { DetailID } = store;

server.get('/', async (req, res) => {
    const response = await Store()
    console.log('response', response)
    res.json(response)
});

server.get('/:id', async (req, res) => {
    const { id } = req.params;

    const pokemonDetails = await DetailID(id);
    console.log('idresponse', pokemonDetails)
    res.json(pokemonDetails)
})

module.exports = server;

