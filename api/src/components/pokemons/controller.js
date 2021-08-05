const axios = require('axios');
const DB_CONN = require('../../db/connection');

const limit = 2;
const ApiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;

const PokemonsModel = DB_CONN.CONN.models.Pokemon;
const TypesModel = DB_CONN.CONN.models.Type;

const fetchData = async (url) => {
    const response = await axios(url)

    return response
};

const getURLS = async () => {
    const recordsApi = await fetchData(ApiUrl)
    const pokemonURL = await recordsApi.data.results.map(obj => obj.url)

    return pokemonURL
};

const getPokemon = async () => {
    const pokemonURL = await getURLS();
    return Promise.all(pokemonURL.map(url =>
        fetchData(url)
    ))
};

const mapDataApi = async () => {
    const pokemonData = await getPokemon();
    const response = await pokemonData.map(obj => {
        return {
            id: obj.data.id,
            name: obj.data.name
        }
    });

    return response
}

const recordsDB = async () => {
    const records = await PokemonsModel.findAll({
        include: {
            model: TypesModel, 
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return records
}

const getPokemonByIdAPI = async (id) => {
    const apiUrlById = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await fetchData(apiUrlById)

    const filterData = await {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: pokemon.data.sprites.front_default,
        hp: pokemon.data.stats[0].base_stat,
        atk: pokemon.data.stats[1].base_stat,
        def: pokemon.data.stats[2].base_stat,
        spc_atk: pokemon.data.stats[3].base_stat,
        spc_def: pokemon.data.stats[4].base_stat,
        spd: pokemon.data.stats[5].base_stat,
        wdt: pokemon.data.weight,
        hgt: pokemon.data.height
    }

    return filterData
}

const getPokemonByIdDB = async (id) => {
    const pokemon = await PokemonsModel.findByPk(id);

    return pokemon
}

const getPokemonByNameAPI = async (name) => {
    const apiUrlByName = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const pokemon = await fetchData(apiUrlByName);

    const filterData = await {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: pokemon.data.sprites.front_default,
        hp: pokemon.data.stats[0].base_stat,
        atk: pokemon.data.stats[1].base_stat,
        def: pokemon.data.stats[2].base_stat,
        spc_atk: pokemon.data.stats[3].base_stat,
        spc_def: pokemon.data.stats[4].base_stat,
        spd: pokemon.data.stats[5].base_stat,
        wdt: pokemon.data.weight,
        hgt: pokemon.data.height
    }

    return filterData
}

const getPokemonByNameDB = async (name) => {
    const pokemon = await PokemonsModel.findAll({
        where: {
            name: {$iLike: name}
        }
    })

    return pokemon
}


module.exports = {
    mapDataApi, 
    recordsDB, 
    getPokemonByIdAPI,
    getPokemonByIdDB, 
    getPokemonByNameAPI, 
    getPokemonByNameDB
};

