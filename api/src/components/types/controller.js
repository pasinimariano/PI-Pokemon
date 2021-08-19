const fetchData = require('../functions/fetchData');
const API = require('../functions/ApiData/ApiURL');
const Models = require('../functions/DbData/getModels');
const createTypes = require('../functions/DbData/createTypes');

const { ApiUrlTypes } = API;

const { TypesModel } = Models;

const getTypesDB = async () => {
    const recordsDB = await TypesModel.findAll();

    return recordsDB
};

const getANDcreate = async () => {
    const apiResponse = await fetchData(ApiUrlTypes);

    const pokemonTypes = await apiResponse.data.results.map(obj => obj.name);

    try {
        await createTypes(pokemonTypes, TypesModel);
        const Types = await TypesModel.findAll();
        console.log(await Types)
        return Types
    } catch (error) {
        return `Error: ${error}`
    }
};

module.exports = {
    getTypesDB,
    getANDcreate
};