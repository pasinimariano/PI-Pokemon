const pokemonsComponents = require('../components/pokemons/network');
const typesComponents = require('../components/types/network');

const routes = (server) => {
    server.use('/pokemons', pokemonsComponents);
    server.use('/types', typesComponents)
};

module.exports = routes;