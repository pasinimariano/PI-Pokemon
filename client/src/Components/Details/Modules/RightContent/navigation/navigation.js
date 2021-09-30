import Pages from './pages'

const Navigation = ({
  pokemon,
  Styles,
  match
}) => {
  return (
    <div className={Styles.Navitation}>
      <Pages
        pokemon={pokemon}
        Styles={Styles}
        match={match}
      />
      <div className={Styles.PokemonName}>
        {pokemon.name.toUpperCase()}
      </div>
    </div>
  )
}

export default Navigation
