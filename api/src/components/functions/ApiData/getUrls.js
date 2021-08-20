const fetchData = require('../fetchData');
const API = require('./ApiURL');

const { limit, ApiURL } = API;

const getURLS = async () => {
    const recordsApi = await fetchData(ApiURL(limit));
    const pokemonsURLS = await recordsApi.data.results.map(obj => obj.url);
    
    return pokemonsURLS
};

module.exports = getURLS;