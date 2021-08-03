const axios = require('axios');

let records = [];
let pokemons = [];
const limit = 3;
const ApiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;

const fetchData = async (url) => {
    const response = await axios(url)

    return response
};

const getRecords = async () => {
    await fetchData(ApiUrl)
        .then(json => records.push(json.data.results))
        .catch(error => error)

    return records
};

const getAllPokemons = async () => {
    const recordsApi = await getRecords();
    recordsApi[0].forEach(async (obj) => {
        await fetchData(obj.url)
            .then(json => {
                const singlePokemon = {
                    id: json.order,
                    name: json.name,
                    types: json.types,
                    sprite: json.sprites
                }
                pokemons.push(singlePokemon)
            })
    });

    return pokemons
};

module.exports = getAllPokemons;

