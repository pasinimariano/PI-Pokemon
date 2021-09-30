import Hatching from '../../../../assets/hatching.png'

const LeftContent = ({
  pokemon,
  Styles
}) => {
  console.log(pokemon)
  return (
    <div className={Styles.LeftContent}>
      <img
        className={Styles.PokemonImg}
        src={pokemon.img}
        alt={pokemon.name}
      />
      <img
        src={Hatching}
        className={Styles.Hatching}
        alt='Hatching Pokemon'
      />
    </div>
  )
}

export default LeftContent
