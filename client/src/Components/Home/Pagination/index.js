import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { pagination } from '../../../Redux/actions/actionCreators';


const Pagination = ({ AllPokemon, PagedPokemons, pagination }) => {

    const [indexFirstPokemon, setindexFirstPokemon] = useState(0);
    const [indexLastPokemon, setindexLastPokemon] = useState(9);
    const pokemonXpage = 9;

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [AllPokemon])

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [indexFirstPokemon])

    const nextPage = () => {
        if (indexLastPokemon < AllPokemon.length) {
            setindexFirstPokemon(indexFirstPokemon + pokemonXpage);
            setindexLastPokemon(indexLastPokemon + pokemonXpage);
        }
    };

    const prevPage = () => {
        if (indexFirstPokemon > 0) {
            setindexFirstPokemon(indexFirstPokemon - pokemonXpage)
            setindexLastPokemon(indexLastPokemon - pokemonXpage)
        }
    };

    return (
        <div>
            <button onClick={nextPage}>SIGUIENTE</button>
            <button onClick={prevPage}>ANTERIOR</button>
            {
                PagedPokemons.length === 0 ?
                    <h2>LOADING...</h2>
                    :
                    <div>
                        {PagedPokemons.map(pokemon =>
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
    );
};

const mapStateToProps = (state) => {
    return {
        AllPokemon: state.AllPokemon,
        PagedPokemons: state.Pagination
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pagination: (page, offset) => dispatch(pagination(page, offset))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);