import PokedexApp from '../../../../assets/pokedexBgr.jpg'

const RightContent = ({ Styles }) => {
  return (
    <div>
      <img
        className={Styles.RightContentImg}
        src={PokedexApp}
      />
    </div>
  )
}

export default RightContent
