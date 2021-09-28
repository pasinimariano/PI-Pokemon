import PokeballButton from '../../../Reusable/PokeballButton'

const CreatePK = (props) => {
  return (
    <div className={props.Styles.CreateContainer}>
      <h2> CREAR POKEMON  </h2>
      <PokeballButton to='/newPokemon' style={props.ButtonStyle} />
      <div className={props.Styles.BottomSideBar} />
    </div>
  )
}

export default CreatePK
