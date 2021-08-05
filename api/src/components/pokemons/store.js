const controller = require('./controller');

const { mapDataApi } = controller;
const { recordsDB } = controller;
const { getPokemonByIdAPI } = controller;
const { getPokemonByIdDB } = controller;
const { getPokemonByNameAPI } = controller;
const { getPokemonByNameDB } = controller;


const Store = async () => {
    const ApiData = await mapDataApi();
    const DbData = await recordsDB();

    const concatedData = ApiData.concat(DbData);

    return concatedData
}

const DetailID = async (id) => {
    const conditional = id >= 1 && id <= 151;

    if (conditional) {
        const response = await getPokemonByIdAPI(id)
        return response
    } else {
        const response = await getPokemonByIdDB(id)
        return response
    }
}

const DetailNAME = async (name)

module.exports = {
    Store,
    DetailID
};