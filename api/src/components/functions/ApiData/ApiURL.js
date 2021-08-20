const limit = 251;

const ApiURL = (limit) => {
    return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;
};

const ApiURLbyID = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`
};

const ApiURLbyNAME = (name) => {
    return `https://pokeapi.co/api/v2/pokemon/${name}`
};

const SpriteUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
}

const ApiUrlTypes = 'https://pokeapi.co/api/v2/type';

module.exports = {
    limit,
    ApiURL,
    ApiURLbyID,
    ApiURLbyNAME,
    SpriteUrl,
    ApiUrlTypes
};