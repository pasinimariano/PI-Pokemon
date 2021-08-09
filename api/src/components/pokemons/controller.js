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

    return response
};

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

    return records
};

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
        }
    })
    return pokemon
}

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

module.exports = {
    AllPokemonsAPI,
    AllPokemonsDB,
    API_pokemonByID,
    DB_pokemonByID,
    API_pokemonByNAME,
    DB_pokemonByNAME,
    CreateNewPokemon
}