const controller = require('./controller');
const { limit } = require('../functions/ApiData/ApiURL');

const {
    AllPokemonsAPI,
    AllPokemonsDB,
    API_pokemonByName,
    DB_pokemonByName,
    API_pokemonByID,
    DB_pokemonByID,
    CreateNewPokemon
} = controller;

const Store = async () => {
    const APIdata = await AllPokemonsAPI();
    const DBdata = await AllPokemonsDB(map = true);
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
    const ApiRecords = await API_pokemonByName(name);
    const DbRecords = await DB_pokemonByName(name)

    const apiCondition = ApiRecords.Error ? false : true;
    const dbCondition = DbRecords.length === 0 ? false : true;

    if (!apiCondition && !dbCondition) return ApiRecords
    else if (!apiCondition && dbCondition) return DbRecords
    else if (apiCondition && !dbCondition) return ApiRecords
    else return DbRecords.concat(ApiRecords)
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
