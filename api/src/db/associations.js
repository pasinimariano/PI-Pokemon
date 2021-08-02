const associations = (DB_CONN) => {
    let Pokemons = DB_CONN.models.Pokemon;
    let Types = DB_CONN.models.Type;

    Pokemons.belongsToMany(Types, { through: 'type_of_Pokemon' });
    Types.belongsToMany(Pokemons, { through: 'type_of_Pokemon' });
};

module.exports = associations;