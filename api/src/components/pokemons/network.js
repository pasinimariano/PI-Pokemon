const express = require('express')
const server = express.Router()
const store = require('./store')

const {
  Store,
  DetailsById,
  DetailsByName,
  CreatePokemon
} = store

server.get('/', async (req, res, next) => {
  const { name } = req.query

  if (name) {
    const response = await DetailsByName(name)

    if (response.Error) {
      res.status(404).send(response)
    } else {
      res.json(response)
    }
  } else {
    try {
      const pokemons = await Store()
      res.json(pokemons)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
})

server.get('/:id', async (req, res) => {
  const { id } = req.params
  const error = 'ERROR: Id must be an Integer'

  if (isNaN(parseInt(id))) {
    res.status(400).send(error)
  } else {
    const response = await DetailsById(id)
    if (response.Error) {
      res.status(404).send(response)
    } else {
      res.json(response)
    }
  }
})

server.post('/', async (req, res) => {
  const response = await CreatePokemon(req.body.pokemon)

  res.json(response)
})

module.exports = server
