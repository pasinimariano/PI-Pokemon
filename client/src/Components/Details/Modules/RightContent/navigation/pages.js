import { Link } from 'react-router-dom'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const Pages = ({
  Styles,
  match,
  pokemon
}) => {
  const matchInt = parseInt(match.id)

  return (
    <div className={Styles.NavContainer}>
      {
          match.id > 1
            ? (
              <Link to={`/pokemons/${matchInt - 1}`} className={Styles.Links}>
                <IoMdArrowDropleft size={45} className={Styles.Arrow} />
              </Link>
              )
            : <IoMdArrowDropleft size={45} className={Styles.Arrow} />
        }
      <div className={Styles.IdPokemon}>
        <div className={Styles.SpriteContainer}>
          <img
            className={Styles.PokemonSprite}
            src={pokemon.sprite}
            alt={`${pokemon.name} Sprite`}
          />
        </div>
        <h3>{`N.º ${pokemon.id}`}</h3>
      </div>
      {
          match.id < 251
            ? (
              <Link to={`/pokemons/${matchInt + 1}`} className={Styles.Links}>
                <IoMdArrowDropright size={45} className={Styles.Arrow} />
              </Link>
              )
            : <IoMdArrowDropright size={45} className={Styles.Arrow} />
        }
    </div>
  )
}

export default Pages
