const fetchData = require('./fetchData');
const ApiURL = require('./ApiURL');

const { ApiURLbyNAME } = ApiURL;

const getPokemonByName = async (name) => {
    const pokemon = await fetchData(ApiURLbyNAME(name));

    return pokemon
};

module.exports = getPokemonByName;