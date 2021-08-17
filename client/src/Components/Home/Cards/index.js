import React from 'react';
import PokeballButton from '../../Reusable/PokeballButton';
import buttonStyle from '../../../Style/button.module.css';

const Cards = (props) => {

    return (
        props.AllPokemon.map(pokemon =>
            <div key={pokemon.id} className={props.style.CardContainer}>
                <h2 className={props.style.PokemonId}>
                    #{pokemon.id.toString().slice(0, 5)}
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
                        <img src={require(`../../../img/types/${type}.png`).default}
                            alt={`${type} sprite`} className={props.style.TypeImg} key={`${type}`} />
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
