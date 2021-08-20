import { Link } from 'react-router-dom';
import LandingImg from '../../../img/Landing/LogoGif.gif'

const RightContainer = (props) => {
    return (
        <div className={props.Styles.BottomContainer}>
            <img
                className={props.Styles.Image}
                src={LandingImg}
                alt={'Pokemon Home'}
            />
            <Link to='/pokemons' className={props.Styles.ButtonContainer}>
                <div className={props.Styles.StartButton}> INGRESAR AHORA </div>
            </Link>
        </div>
    )
};

export default RightContainer;