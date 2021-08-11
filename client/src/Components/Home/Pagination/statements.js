import { useState } from 'react';

const Statements = () => {

    const [indexFirstPokemon, setindexFirstPokemon] = useState(0);
    const [indexLastPokemon, setindexLastPokemon] = useState(9);
    const pokemonXpage = 9;

    const nextPage = (pokemons) => {
        if (indexLastPokemon < pokemons.length) {
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

    return { indexFirstPokemon, indexLastPokemon, nextPage, prevPage }
};

export default Statements;