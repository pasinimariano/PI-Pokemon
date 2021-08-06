const express = require('express');
const server = express.Router();
const store = require('./store');

const {
    Store,
    DetailsById,
    DetailsByName, 
    CreatePokemon
} = store

server.get('/', async (req, res) => {
    const { name } = req.query;

    if (name) {
        const response = await DetailsByName(name);
        const error = `ERROR 404: El nombre ${name} no fue encontrado`;

        if (!response) {
            res.send(error)
        } else {
            res.json(response)
        }

    } else {
        const response = await Store();

        res.json(response)
    }
});

server.get('/:id', async (req, res) => {
    const { id } = req.params;
    const error = 'ERROR: el id debe ser un valor numérico'

    if (isNaN(parseInt(id))) {
        res.send(error)
    } else {
        const pokemonDetails = await DetailsById(id);

        res.json(pokemonDetails)
    }
});

server.post('/', async (req, res) => {
    const response = CreatePokemon(req.body);

    res.send(response)
});

module.exports = server;

