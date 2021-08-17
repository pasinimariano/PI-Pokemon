const fetchData = require('../functions/fetchData');
const API = require('../functions/ApiURL');
const Models = require('../functions/getModels');

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
        pokemonTypes.forEach(type => {
            TypesModel.create({
                name: type
            })
        })
        return 'Success'
    } catch (error) {
        return `Error: ${error}`
    }
};

module.exports = {
    getTypesDB,
    getANDcreate
};