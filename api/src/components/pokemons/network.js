const express = require('express');
const server = express.Router();
const records = require('./controller');

server.get('/', async (req, res) => {
    const response = await records()
    console.log('response', response)
    res.json('HOLA MELI')
});

module.exports = server;

