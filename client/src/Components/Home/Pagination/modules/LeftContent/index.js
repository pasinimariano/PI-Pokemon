const LeftContent = ({
  Styles,
  showingPokemon
}) => {
  return (
    <div className={Styles.LeftContent}>
      {
      !showingPokemon
        ? <h2>Loading ...</h2>
        : (
          <>
            <div className={Styles.PokemonImg}>
              <img
                src={showingPokemon.img}
                className={Styles.Sprite}
              />
            </div>
            <div className={Styles.PokemonData}>
              <h2 className={Styles.PokemonName}>
                {`N.º ${showingPokemon.id} ${showingPokemon.name.toUpperCase()}`}
              </h2>
              <div className={Styles.PokemonTypes}>
                {
                  showingPokemon.types && showingPokemon.types.map(type =>
                    <div key={`${type}`} className={Styles.ImageContainer}>
                      <img
                        src={require(`../../../../../assets/types/${type}.png`).default}
                        alt={`${type} sprite`}
                        className={Styles.Images}
                      />
                    </div>
                  )
                }
              </div>
              <div className={Styles.DetailsButton}>
                <button
                  className={Styles.Buttons}
                >
                  MORE DETAILS
                </button>
              </div>
            </div>
          </>
          )
      }
    </div>
  )
}

export default LeftContent
