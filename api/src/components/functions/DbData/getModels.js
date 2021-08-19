const DB_CONN = require('../../../db/connection');

const PokemonsModel = DB_CONN.CONN.models.Pokemon;
const TypesModel = DB_CONN.CONN.models.Type;

module.exports = {
    PokemonsModel,
    TypesModel
}