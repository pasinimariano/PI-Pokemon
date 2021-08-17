const controller = require('./controller');
const { limit } = require('../functions/ApiURL');

const {
    AllPokemonsAPI,
    AllPokemonsDB,
    API_pokemonByID,
    DB_pokemonByID,
    API_pokemonByNAME,
    DB_pokemonByNAME,
    CreateNewPokemon
} = controller;

const Store = async () => {
    const APIdata = await AllPokemonsAPI();
    const DBdata = await AllPokemonsDB();
    const concatedData = APIdata.concat(DBdata);

    return concatedData
};

const DetailsById = async (id) => {
    const conditional = id >= 1 && id <= limit;

    if (conditional) {
        const response = await API_pokemonByID(id);
        return response
    } else {
        const response = await DB_pokemonByID(id);
        return response
    }
};

const DetailsByName = async (name) => {
    const ApiData = await API_pokemonByNAME(name);
    const DbData = await DB_pokemonByNAME(name);
   
    const ApiCondition = Object.keys(ApiData).length !== 0;
    const DbCondition = DbData.length !== 0;

    if (!ApiCondition && !DbCondition) return null;
    else if (ApiCondition && !ApiCondition) return [ApiData];
    else if (!ApiCondition && ApiCondition) return [DbData];
    else return DbData.concat(ApiData)

};

const CreatePokemon = async (pokemon) => {
    const newPokemon = await CreateNewPokemon(pokemon);

    return newPokemon
};

module.exports = {
    Store,
    DetailsById,
    DetailsByName,
    CreatePokemon
}
