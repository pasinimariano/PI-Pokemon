const controller = require('./controller');
const { limit } = require('../functions/ApiURL');

const {
    AllPokemonsAPI,
    AllPokemonsDB,
    AllPokemonsDBMap,
    API_pokemonByID,
    CreateNewPokemon
} = controller;

const Store = async () => {
    const APIdata = await AllPokemonsAPI();
    const DBdata = await AllPokemonsDBMap();
    const concatedData = APIdata.concat(DBdata);

    return concatedData
};

const DetailsById = async (id) => {
    const conditional = id >= 1 && id <= limit;

    if (conditional) {
        const response = await API_pokemonByID(id);
        return response
    } else {
        const DBdata = await AllPokemonsDB();
        const filter = await DBdata.filter(obj => obj.dataValues.id === id).map(obj => obj.dataValues)
        const response = {
            id: filter[0].id,
            name: filter[0].name,
            img: filter[0].img,
            hp: filter[0].hp,
            atk: filter[0].atk,
            spc_atk: filter[0].spc_atk,
            def: filter[0].def,
            spc_def: filter[0].spc_def,
            spd: filter[0].spd,
            hgt: filter[0].hgt,
            wdt: filter[0].wdt,
            types: filter[0].types.map(obj => obj.dataValues).map(type => type.name)
        }
        return response
    }
};

const DetailsByName = async (name) => {
    const store = await Store();
    const filter = await store.filter(obj => obj.name.toUpperCase() === name.toUpperCase());

    return filter
};

const CreatePokemon = async (pokemon) => {
    const newPokemon = await CreateNewPokemon(pokemon);

    return newPokemon
};

module.exports = {
    Store,
    DetailsById,
    DetailsByName,
    CreatePokemon
}
