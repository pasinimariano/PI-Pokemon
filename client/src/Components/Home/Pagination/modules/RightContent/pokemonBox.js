import Pokeball from '../../../../../assets/Pokeball.png'

const PokemonBox = ({ Styles, PagedPokemons }) => {
  return (
    <div className={Styles.PokemonBox}>
      {
        !PagedPokemons
          ? <h2> LOADING... </h2>
          : (
              PagedPokemons.map(pokemon =>
                <div key={pokemon.id} className={Styles.PokemonCard} onClick={() => console.log('Me apretaste')}>
                  <div className={Styles.SpriteBox}>
                    <img src={pokemon.sprite} />
                    <h3>{`N.º ${pokemon.id}`}</h3>
                  </div>
                  <div className={Styles.NameBox}>
                    <div className={Styles.NamePokemon}>
                      <h3>{pokemon.name.toUpperCase()}</h3>
                    </div>
                    <div className={Styles.ButtonContainer}>
                      <img src={Pokeball} className={Styles.ButtonPokeball} />
                    </div>
                  </div>
                </div>
              )
            )
        }
    </div>
  )
}

export default PokemonBox
