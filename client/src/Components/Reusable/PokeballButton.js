import { Link } from 'react-router-dom';
import Pokeball from '../../img/Pokeball.png';

const PokeballButton = (props) => {
    return (
        <Link to={props.to}>
            <img
                className={props.style.ButtonPokeball}
                src={Pokeball}
                alt='Pokeball Button'
                type={props.style}
            />
        </Link>
    )
};

export default PokeballButton;