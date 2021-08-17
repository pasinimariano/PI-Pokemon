const express = require('express');
const server = express.Router();
const store = require('./store');

const {
    Store,
    DetailsById,
    DetailsByName,
    CreatePokemon
} = store

server.get('/', async (req, res, next) => {
    const {
        name
    } = req.query;

    if (name) {
        const response = await DetailsByName(name);
        const error = `ERROR 404: El nombre ${name} no fue encontrado`;

        if (!response) {
            res.status(404).send(error)
        } else {
            res.json(response)
        }

    } else {
        try {
            const pokemons = await Store();
            res.json(pokemons)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
});

server.get('/:id', async (req, res) => {
    const { id } = req.params;
    const error = 'ERROR: el id debe ser un valor numérico'

    if (isNaN(parseInt(id))) {
        res.status(400).send(error)
    } else {
        const pokemonDetails = await DetailsById(id);

        res.json(pokemonDetails)
    }
});

server.post('/', async (req, res) => {
    const response = await CreatePokemon(req.body.pokemon);

    res.json(response)
})

module.exports = server;
