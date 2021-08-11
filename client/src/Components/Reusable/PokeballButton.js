import { Link } from 'react-router-dom';
import Pokeball from '../../img/Pokeball.png';

const PokeballButton = (props) => {
    return (
        <Link to={props.to}>
            <img
                className={props.style.ButtonPokeball}
                src={Pokeball}
                alt='Pokeball Button'
            />
        </Link>
    )
};

export default PokeballButton;