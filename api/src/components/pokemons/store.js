const controller = require('./controller')
const { limit } = require('../functions/ApiData/ApiURL')

const {
  AllPokemonsAPI,
  AllPokemonsDB,
  APIpokemonByName,
  DBpokemonByName,
  APIpokemonByID,
  DBpokemonByID,
  CreateNewPokemon
} = controller

const Store = async () => {
  const APIdata = await AllPokemonsAPI()
  const DBdata = await AllPokemonsDB(true)
  const concatedData = APIdata.concat(DBdata)

  return concatedData
}

const DetailsById = async (id) => {
  const conditional = id >= 1 && id <= limit

  if (conditional) {
    const response = await APIpokemonByID(id)
    return response
  } else {
    const response = await DBpokemonByID(id)
    return response
  }
}

const DetailsByName = async (name) => {
  const ApiRecords = await APIpokemonByName(name)
  const DbRecords = await DBpokemonByName(name)

  const apiCondition = !ApiRecords.Error
  const dbCondition = DbRecords.length !== 0

  if (!apiCondition && !dbCondition) return [ApiRecords]
  else if (!apiCondition && dbCondition) return DbRecords
  else if (apiCondition && !dbCondition) return [ApiRecords]
  else return DbRecords.concat(ApiRecords)
}

const CreatePokemon = async (pokemon) => {
  const newPokemon = await CreateNewPokemon(pokemon)

  return newPokemon
}

module.exports = {
  Store,
  DetailsById,
  DetailsByName,
  CreatePokemon
}
