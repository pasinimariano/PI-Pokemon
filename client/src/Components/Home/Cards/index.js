import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cards = ({ pokemons }) => {

    return (
        <div>
            {pokemons.length === 0 ?
                <h2> LOADING .....</h2>
                :
                <div>
                    {pokemons.map(pokemon =>
                        <div key={pokemon.id}>
                            <h2>{pokemon.id}</h2>
                            <h2>{pokemon.name}</h2>
                            <img
                                src={pokemon.img}
                                alt={`${pokemon.name} sprite`}
                            />
                            <h2>{pokemon.types}</h2>
                            <Link to={`/pokemons/${pokemon.id}`}>
                                <button> More Details </button>
                            </Link>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.FilteredPokemon
    }
};

export default connect(
    mapStateToProps,
    null
)(Cards);