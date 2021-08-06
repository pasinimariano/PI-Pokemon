<<<<<<< HEAD
const Sequelize = require('sequelize');
const getPokemonData = require('../functions/getPokemonData');
const getPokemonByID = require('../functions/getPokemonByID');
const getPokemonByName = require('../functions/getPokemonByName');
const filterData = require('../functions/filterData');
const Models = require('../functions/getModels');

const { PokemonsModel, TypesModel } = Models;

const AllPokemonsAPI = async () => {
    const pokemonData = await getPokemonData();
    const response = await pokemonData.map(obj => {
        return {
            id: obj.data.id,
            name: obj.data.name,
            img: obj.data.sprites.front_default,
            types: obj.data.types.map(obj => obj.type.name)
        }
    })
=======
const axios = require('axios');
const DB_CONN = require('../../db/connection');

const limit = 2;
const ApiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;

const PokemonsModel = DB_CONN.CONN.models.Pokemon;
const TypesModel = DB_CONN.CONN.models.Type;

const fetchData = async (url) => {
    const response = await axios(url)
>>>>>>> 9ac6cfa8a423fa6aad3027a1d08e63c3e748b131

    return response
};

<<<<<<< HEAD
const AllPokemonsDB = async () => {
    const records = await PokemonsModel.findAll({
        include: {
            model: TypesModel,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
=======
const getURLS = async () => {
    const recordsApi = await fetchData(ApiUrl)
    const pokemonURL = await recordsApi.data.results.map(obj => obj.url)
>>>>>>> 9ac6cfa8a423fa6aad3027a1d08e63c3e748b131

    return pokemonURL
};

const getPokemon = async () => {
    const pokemonURL = await getURLS();
    return Promise.all(pokemonURL.map(url =>
        fetchData(url)
    ))
};

<<<<<<< HEAD
const API_pokemonByID = async (id) => {
    const pokemon = await getPokemonByID(id);

    const response = await filterData(pokemon)

    return response
};

const DB_pokemonByID = async (id) => {
    const pokemon = await PokemonsModel.findByPk(id);

    return pokemon
};

const API_pokemonByNAME = async (name) => {
    const pokemon = await getPokemonByName(name);

    const response = await filterData(pokemon)

    return response
};

const DB_pokemonByNAME = async (name) => {
    const pokemon = await PokemonsModel.findAll({
        where: {
            name: { [Sequelize.Op.iLike]: name }
=======
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
>>>>>>> 9ac6cfa8a423fa6aad3027a1d08e63c3e748b131
        }
    })

    return pokemon
<<<<<<< HEAD
};

const CreateNewPokemon = async (pokemon) => {
    const {
        name,
        img,
        hp,
        atk,
        def,
        spc_atk,
        spc_def,
        str,
        spd,
        hgt,
        wdt,
        types
    } = pokemon;

    if (!name) {
        return 'ERROR: Se requiere un nombre.'
    } else {
        const newPokemon = await PokemonsModel.create({
            name,
            img,
            hp,
            atk,
            def,
            spc_atk,
            spc_def,
            str,
            spd,
            hgt,
            wdt
        });

        const pokemonTypes = await TypesModel.findAll({
            where: {
                name : types
            }
        });

        newPokemon.setTypes(pokemonTypes)

        return `El pokemon ${name} fue creado exitosamente`
    }
}
=======
}


module.exports = {
    mapDataApi, 
    recordsDB, 
    getPokemonByIdAPI,
    getPokemonByIdDB, 
    getPokemonByNameAPI, 
    getPokemonByNameDB
};
>>>>>>> 9ac6cfa8a423fa6aad3027a1d08e63c3e748b131

module.exports = {
    AllPokemonsAPI,
    AllPokemonsDB,
    API_pokemonByID,
    DB_pokemonByID,
    API_pokemonByNAME,
    DB_pokemonByNAME,
    CreateNewPokemon
}