const getPokemonData = require('../functions/getPokemonData');
const getPokemonByID = require('../functions/getPokemonByID');
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

const AllPokemonsDB= async () => {
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

const AllPokemonsDBMap = async () => {
    const records = await PokemonsModel.findAll({
        include: {
            model: TypesModel,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    const response = records.map(obj => {
        return {
            id: obj.dataValues.id,
            name: obj.dataValues.name,
            img: obj.dataValues.img,
            types: obj.dataValues.types.map(obj => obj.name)
        }
    })

    return response
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

const CreateNewPokemon = async (pokemon) => {
    const {
        name,
        img,
        hp,
        atk,
        def,
        spc_atk,
        spc_def,
        spd,
        hgt,
        wdt,
        types
    } = pokemon;

    if (!name) 'ERROR: Se requiere un nombre.'
    else {
        try {
            const newPokemon = await PokemonsModel.create({
                name,
                img,
                hp,
                atk,
                def,
                spc_atk,
                spc_def,
                spd,
                hgt,
                wdt
            });

            types.forEach(async type => {
                const findType = await TypesModel.findOne({
                    where: {
                        name: type
                    }
                })
                newPokemon.addType(findType)
            });

            return `El pokemon ${name} fue creado exitosamente`

        } catch (error) {
            return `ERROR: ${error}`
        }
    }
}

module.exports = {
    AllPokemonsAPI,
    AllPokemonsDB,
    AllPokemonsDBMap,
    API_pokemonByID,
    DB_pokemonByID,
    CreateNewPokemon
}