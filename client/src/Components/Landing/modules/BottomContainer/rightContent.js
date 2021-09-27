import PokedexApp from '../../../../assets/pokedexBgr.jpg'

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
