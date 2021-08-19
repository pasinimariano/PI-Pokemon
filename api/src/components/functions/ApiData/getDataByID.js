const fetchData = require('../fetchData');
const ApiURL = require('./ApiURL');

const { ApiURLbyID } = ApiURL;

const getPokemonByID = async (id) => {
    const pokemon = await fetchData(ApiURLbyID(id));

    return pokemon
};

module.exports = getPokemonByID;