const limit = 151;

const ApiURL = (limit) => {
    return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;
};

const ApiURLbyID = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`
};

const ApiURLbyNAME = (name) => {
    return `https://pokeapi.co/api/v2/pokemon/${name}`
}

module.exports = {
    limit,
    ApiURL,
    ApiURLbyID,
    ApiURLbyNAME
};