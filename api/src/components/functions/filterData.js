const filterData = async (pokemon) => {
    const filter = await {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: pokemon.data.sprites.front_default,
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
};

module.exports = filterData;