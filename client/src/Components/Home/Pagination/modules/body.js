import Unknown from "./unknown";
import Cards from "../../Cards";

const Body = (props) => {
    return (
        <div className={props.Styles.Body}>
            <div className={props.Styles.CardsContainer}>
                {
                    props.PagedPokemons.length === 0 ?
                        <Unknown Styles={props.Styles} />
                        :

                        <Cards AllPokemon={props.PagedPokemons} style={props.Styles} />
                }
            </div>
        </div>
    )
};

export default Body;