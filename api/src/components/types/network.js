const express = require('express')
const server = express.Router()
const store = require('./store')

const { responseTypes } = store

server.get('/', async (req, res) => {
  const response = await responseTypes()

  res.json(response)
})

module.exports = server
