import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_pokemon_by_id } from '../../Redux/actions/actionCreators';
import { delete_details } from '../../Redux/actions/actionCreators';
import LeftContainer from './Modules/leftContainer';
import CentralContainer from './Modules/centralContainer';
import RightContainer from './Modules/rightContainer';
import Styles from './style/details.module.css';
import TypesStyles from '../../Style/types.module.css';
import ButtonStyles from '../../Style/button.module.css'

const Card = (props) => {
    const {
        get_pokemon,
        delete_details,
        pokemon,
        match
    } = props;

    useEffect(() => {
        delete_details()
        get_pokemon(match.id)
    }, []);

    return (
        <div>
            {pokemon === null ?
                <div>
                    ERROR 404
                </div>
                :
                !pokemon.name ?
                    <div>
                        LOADING ...
                    </div>
                    :
                    <div className={Styles.Container}>
                        <LeftContainer Styles={Styles} pokemon={pokemon} TypesStyles={TypesStyles} />
                        <CentralContainer Styles={Styles} pokemon={pokemon} ButtonStyles={ButtonStyles} />
                        <RightContainer Styles={Styles} pokemon={pokemon} />
                    </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pokemon: state.PokemonDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_pokemon: (id) => dispatch(get_pokemon_by_id(id)),
        delete_details: () => dispatch(delete_details())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);