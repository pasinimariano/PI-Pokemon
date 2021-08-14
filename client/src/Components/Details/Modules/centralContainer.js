import { Link } from 'react-router-dom';

const CentralContainer = (props) => {
    return (
        <div className={props.Styles.CentralContainer}>
            <h2 className={props.Styles.PokeName}>{props.pokemon.name.toUpperCase()}</h2>
            <img className={props.Styles.PokeImg} src={props.pokemon.img} alt={`${props.pokemon.name} sprite`} />
            <Link to='/pokemons' className={props.Styles.ButtonContainer}>
                <button className={props.ButtonStyles.Buttons}> HOME </button>
            </Link>
        </div>
    );
};

export default CentralContainer;