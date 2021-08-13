import React from 'react';
import PokeballButton from '../../Reusable/PokeballButton';
import buttonStyle from '../../../Style/button.module.css';

const Cards = (props) => {

    return (
        props.AllPokemon.map(pokemon =>
            <div key={pokemon.id} className={props.style.CardContainer}>
                <h2 className={props.style.PokemonId}>
                    #{pokemon.id}
                </h2>
                <h2 className={props.style.PokemonName}>
                    {pokemon.name.toUpperCase()}
                </h2>
                <img
                    className={props.style.PokemonSprite}
                    src={pokemon.img}
                    alt={`${pokemon.name} sprite`}
                />
                <div className={props.style.PokemonTypes}>
                    {pokemon.types.map(type =>
                        <h2> {type.toUpperCase()} </h2>
                    )}
                </div>
                <div className={props.style.ButtonContainer}>
                    <PokeballButton to={`/pokemons/${pokemon.id}`} style={buttonStyle} />
                </div>
            </div>
        )
    )
};

export default Cards;