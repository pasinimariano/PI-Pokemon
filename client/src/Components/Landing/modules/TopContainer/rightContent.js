import PokedexApp from '../../../../assets/Landing/pokedex.png'

const RightContent = ({ Styles }) => {
  return (
    <div className={Styles.ImageContainer}>
      <img
        className={Styles.RightContentImg}
        src={PokedexApp}
      />
    </div>
  )
}

export default RightContent
