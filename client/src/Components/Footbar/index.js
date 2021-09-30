import { IoMdCreate, IoMdHome, IoIosInformationCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Styles from './style.module.css'

const Footbar = () => {
  return (
    <div className={Styles.Footbar}>
      <div className={Styles.Home}>
        <Link to='/pokemons' className={Styles.Links}>
          <IoMdHome size={25} className={Styles.Icons} />
        </Link>
        <h4> HOME </h4>
      </div>
      <div className={Styles.Create}>
        <Link to='/newPokemon' className={Styles.Links}>
          <IoMdCreate size={25} className={Styles.Icons} />
        </Link>
        <h4> CREATE </h4>
      </div>
      <div className={Styles.About}>
        <Link to='/about' className={Styles.Links}>
          <IoIosInformationCircle size={25} className={Styles.Icons} />
        </Link>
        <h4> ABOUT </h4>
      </div>
    </div>
  )
}

export default Footbar
