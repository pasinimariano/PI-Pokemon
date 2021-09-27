import PokedexApp from '../../../../assets/pokedexBgr.jpg'

const LeftContent = ({ Styles }) => {
  return (
    <div>
      <img
        className={Styles.RightContentImg}
        src={PokedexApp}
      />
    </div>
  )
}

export default LeftContent
