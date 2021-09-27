const LeftContent = ({ Styles }) => {
  return (
    <div className={Styles.LeftContent}>
      <div className={Styles.PokemonImg}>
        ACA VA LA IMAGEN DEL POKEMON
      </div>
      <div className={Styles.PokemonData}>
        ACA VA EL NOMBRE, LOS TIPOS, Y UN BOTON PARA MAS DETALLES
      </div>
    </div>
  )
}

export default LeftContent
