import { Link } from 'react-router-dom'
import Welcome from '../../../../assets/Landing/welcome.png'

const LeftContent = ({ Styles }) => {
  return (
    <div className={Styles.TopLeftContent}>
      <img
        className={Styles.WelcomeImg}
        src={Welcome}
      />
      <div className={Styles.AccessButtonContainer}>
        <Link to='/pokemons'>
          <button className={Styles.AccessButton}>
            START NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LeftContent
