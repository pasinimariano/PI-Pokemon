const getURLS = require('./getURLS');
const fetchData = require('./fetchData');

const getPokemonData = async () => {
    const pokemonURL = await getURLS();
    return Promise.all(pokemonURL.map(url =>
        fetchData(url)
    ))
};

module.exports = getPokemonData;

