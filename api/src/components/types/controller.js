const fetchData = require('../functions/fetchData');
const API = require('../functions/ApiURL');
const Models = require('../functions/getModels');

const { ApiUrlTypes } = API;

const { TypesModel } = Models;

const getTypesAPI = async () => {
    const apiResponse = await fetchData(ApiUrlTypes);

    const pokemonTypes = await apiResponse.data.results.map(obj => obj.name);

    return pokemonTypes
};

const getTypesDB = async () => {
    const recordsDB = await TypesModel.findAll();

    return recordsDB
};

const createDB = async () => {
    const apiResponse = await getTypesAPI()

    await apiResponse.forEach(type => {
        TypesModel.create({
            name: type
        })
    });

    return 'Success'
};

module.exports = {
    getTypesDB,
    createDB
};