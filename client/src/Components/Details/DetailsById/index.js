import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_pokemon_by_id } from '../../../Redux/actions/actionCreators';
import { delete_details } from '../../../Redux/actions/actionCreators';

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
                    <div>
                        <h2>{pokemon.id}</h2>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.img} />
                        <h2>{pokemon.hp}</h2>
                        <h2>{pokemon.atk}</h2>
                        <h2>{pokemon.spc_atk}</h2>
                        <h2>{pokemon.def}</h2>
                        <h2>{pokemon.spc_def}</h2>
                        <h2>{pokemon.spd}</h2>
                        <h2>{pokemon.hgt}</h2>
                        <h2>{pokemon.wdt}</h2>
                        <h2>{pokemon.types.map(type => type)}</h2>
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