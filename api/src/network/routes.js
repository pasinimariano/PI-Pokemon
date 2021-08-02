const pokemonsComponents = require('../components/pokemons')

const routes = (server) => {
    server.use('/pokemons', pokemonsComponents);
};

module.exports = routes;