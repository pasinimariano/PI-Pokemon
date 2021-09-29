import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeftContent = ({
  Styles,
  showingPokemon
}) => {
  const [id, setId] = useState()

  useEffect(() => {
    if (showingPokemon) {
      if (showingPokemon.id.toString().slice(0, 2) === '00') {
        setId(showingPokemon.id.toString().slice(2, 3))
      } else if (showingPokemon.id.toString().slice(0, 1) === '0') {
        setId(showingPokemon.id.toString().slice(1, 3))
      } else {
        setId(showingPokemon.id)
      }
    }
  }, [showingPokemon])

  console.log(id)
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
                <Link to={`/pokemons/${id}`}>
                  <button
                    className={Styles.Buttons}
                  >
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
          </>
          )
      }
    </div>
  )
}

export default LeftContent
