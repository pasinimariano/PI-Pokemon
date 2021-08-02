const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routesNetwork = require('./network/routes');
const accessControl = require('./libs/middlewares/accessControl');
const endwareControl = require('./libs/middlewares/endwareControl');

const server = express();

server.name = 'API';

server.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));
server.use(express.json({
    limit: '50mb'
}));
server.use(cookieParser());
server.use(morgan('dev'));

accessControl(server);

routesNetwork(server);

endwareControl(server);

module.exports = server;