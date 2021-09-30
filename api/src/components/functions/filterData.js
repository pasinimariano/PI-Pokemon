const ApiURL = require('./ApiData/ApiURL')

const { SpriteUrl } = ApiURL

const filterData = async (pokemon) => {
  const sprite = await SpriteUrl(pokemon.data.id)
  let pokemonId

  if (pokemon.data.id.toString().length === 1) {
    pokemonId = `00${pokemon.data.id.toString()}`
  } else if (pokemon.data.id.toString().length === 2) {
    pokemonId = `0${pokemon.data.id.toString()}`
  } else {
    pokemonId = pokemon.data.id.toString()
  }

  const filter = await {
    id: pokemonId,
    name: pokemon.data.name,
    img: sprite,
    sprite: pokemon.data.sprites.versions['generation-vii'].icons.front_default,
    hp: pokemon.data.stats[0].base_stat,
    atk: pokemon.data.stats[1].base_stat,
    def: pokemon.data.stats[2].base_stat,
    spc_atk: pokemon.data.stats[3].base_stat,
    spc_def: pokemon.data.stats[4].base_stat,
    spd: pokemon.data.stats[5].base_stat,
    wdt: pokemon.data.weight,
    hgt: pokemon.data.height,
    types: pokemon.data.types.map(obj => obj.type.name)
  }

  return filter
}

module.exports = filterData
