import {
    GET_ALL_POKEMONS,
    FILTERS,
    GET_ALL_TYPES,
    POKEMON_BY_ID,
    DELETE_DETAILS
} from './actions/';

const initialState = {
    AllPokemon: [],
    FilteredPokemon: [],
    AllTypes: [],
    PokemonDetails: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                AllPokemon: action.payload
            }
        case FILTERS:
            if (action.payload.length === 0) {
                return {
                    ...state,
                    FilteredPokemon: state.AllPokemon
                }

            // } if (action.payload.includes('API')) {
            //     return {
            //         ...state,
            //         FilteredPokemon: state.AllPokemon.filter(obj =>
            //             obj.id > 100
            //         )
            //     }
            // } else if (action.payload.includes('CREATED')) {
            //     return {
            //         ...state,
            //         FilteredPokemon: state.AllPokemon.filter(obj =>
            //             obj.id > 25
            //         )
            //     }
            } else
                return {
                    ...state,
                    FilteredPokemon: state.AllPokemon.filter(obj =>
                        action.payload.some(type =>
                            obj.types.includes(type)
                        ))
                }
        case GET_ALL_TYPES:
            return {
                ...state,
                AllTypes: action.payload
            }
        case POKEMON_BY_ID:
            return {
                ...state,
                PokemonDetails: action.payload
            }
        case DELETE_DETAILS:
            return {
                ...state,
                PokemonDetails: []
            }
        default:
            return state;
    }
};

export default rootReducer;