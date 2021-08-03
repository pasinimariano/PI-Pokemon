const pokemonsComponents = require('../components/pokemons/network')

const routes = (server) => {
    server.use('/pokemons', pokemonsComponents);
};

module.exports = routes;