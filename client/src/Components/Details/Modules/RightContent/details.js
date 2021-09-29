import Progress from './progressBar'

const Details = ({
  pokemon,
  Styles
}) => {
  const pokemonHgt = pokemon.hgt / 10
  return (
    <div className={Styles.DetailsContainer}>
      <div className={Styles.DataContainer}>
        <div className={Styles.TypesLabel}> TYPES </div>
        <div className={Styles.Types}>
          {
            pokemon.types && pokemon.types.map(type => (
              <img
                key={type}
                src={require(`../../../../assets/types/${type}.png`).default}
                alt={`${type} sprite`}
                className={Styles.Images}
              />
            )
            )
          }
        </div>
        <div className={Styles.HeightLabel}> HEIGHT </div>
        <div className={Styles.Height}> {pokemonHgt}Mts. </div>
        <div className={Styles.WeightLabel}> WEIGHT </div>
        <div className={Styles.Weight}> {pokemon.wdt}Lbs. </div>
        <div className={Styles.Stats}>
          <Progress name='HP' value={pokemon.hp} Styles={Styles} />
          <Progress name='ATK' value={pokemon.atk} Styles={Styles} />
          <Progress name='DEF' value={pokemon.def} Styles={Styles} />
          <Progress name='SPC-ATK' value={pokemon.spc_atk} Styles={Styles} />
          <Progress name='SPC-DEF' value={pokemon.spc_def} Styles={Styles} />
          <Progress name='SPD' value={pokemon.spd} Styles={Styles} />
        </div>
      </div>
    </div>
  )
}

export default Details
