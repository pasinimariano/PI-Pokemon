import Pagination from './pagination'
import PokemonBox from './pokemonBox'

const RightContent = ({
  Styles,
  PagedPokemons,
  prevPage,
  nextPage,
  setShowingPokemon
}) => {
  return (
    <div className={Styles.RightContent}>
      <PokemonBox
        Styles={Styles}
        PagedPokemons={PagedPokemons}
        setShowingPokemon={setShowingPokemon}
      />
      <Pagination
        Styles={Styles}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  )
}

export default RightContent
