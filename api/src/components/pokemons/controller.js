const functionGetter = require('../functions/functionGetter')
const Models = require('../functions/DbData/getModels')
const ApiURL = require('../functions/ApiData/ApiURL')
const filterData = require('../functions/filterData')

const { ApiData, ApiById, ApiByName, DbData, DbByKey } = functionGetter
const { PokemonsModel, TypesModel } = Models
const { SpriteUrl } = ApiURL

const AllPokemonsAPI = async () => {
  const pokemon = await ApiData()

  const response = await pokemon.map(obj => {
    const sprite = SpriteUrl(obj.data.id)
    let pokemonId

    if (obj.data.id.toString().length === 1) {
      pokemonId = `00${obj.data.id.toString()}`
    } else if (obj.data.id.toString().length === 2) {
      pokemonId = `0${obj.data.id.toString()}`
    } else {
      pokemonId = obj.data.id.toString()
    }

    return {
      id: pokemonId,
      name: obj.data.name,
      img: sprite,
      sprite: obj.data.sprites.versions['generation-vii'].icons.front_default,
      types: obj.data.types.map(obj => obj.type.name)
    }
  })

  return response
}

const AllPokemonsDB = async (map = false) => {
  const records = await DbData(PokemonsModel, TypesModel)

  if (!map) return records

  const response = records.map(obj => {
    return {
      id: obj.dataValues.id,
      name: obj.dataValues.name,
      img: obj.dataValues.img,
      types: obj.dataValues.types.map(obj => obj.name)
    }
  })

  return response
}

const API_pokemonByName = async (name) => {
  const pokemon = await ApiByName(name)

  if (pokemon.Error) { return pokemon };

  const sprite = await SpriteUrl(pokemon.data.id)

  const response = await {
    id: pokemon.data.id,
    name: pokemon.data.name,
    img: sprite,
    types: pokemon.data.types.map(obj => obj.type.name)
  }

  return response
}

const DB_pokemonByName = async (name) => {
  const pokemon = await DbByKey(PokemonsModel, TypesModel, 'name', name)

  const response = await pokemon.map(obj => {
    return {
      id: obj.dataValues.id,
      name: obj.dataValues.name,
      img: obj.dataValues.img,
      types: obj.dataValues.types.map(type => type.name)
    }
  })

  return response
}

const API_pokemonByID = async (id) => {
  const pokemon = await ApiById(id)

  if (pokemon.Error) { return pokemon }

  const response = await filterData(pokemon)

  return response
}

const DB_pokemonByID = async (id) => {
  const pokemon = await DbByKey(PokemonsModel, TypesModel, 'id', id)

  if (pokemon.Error) { return pokemon }

  const response = await pokemon[0].dataValues
  response.types = response.types.map(type => type.name)

  return response
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
    spd,
    hgt,
    wdt,
    types
  } = pokemon

  if (!name) { return 'ERROR: Se requiere un nombre.' } else {
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
      })

      types.forEach(type => {
        const findType = TypesModel.findOne({
          where: {
            name: type
          }
        })
        newPokemon.addType(findType)
      })

      return `El pokemon ${name} fue creado exitosamente`
    } catch (error) {
      return `ERROR: ${error}`
    }
  }
}

module.exports = {
  AllPokemonsAPI,
  AllPokemonsDB,
  API_pokemonByName,
  DB_pokemonByName,
  API_pokemonByID,
  DB_pokemonByID,
  CreateNewPokemon
}
