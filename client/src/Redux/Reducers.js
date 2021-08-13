import {
    GET_ALL_POKEMONS,
    FILTER_BY_NAME,
    FILTERS,
    PAGINATION,
    GET_ALL_TYPES,
    POKEMON_BY_ID,
    DELETE_DETAILS
} from './actions/';

const initialState = {
    AllPokemon: [],
    FilteredPokemon: [],
    Pagination: [],
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
        case PAGINATION:
            return {
                ...state,
                Pagination: state.FilteredPokemon.slice(action.payload.page, action.payload.offset)
            }
        case FILTER_BY_NAME: {
            const filter = state.AllPokemon.filter(obj => obj.name === action.payload.name);
            return {
                ...state,
                FilteredPokemon: filter
            }
        }
        case FILTERS:
            if (action.payload.length === 0) {
                return {
                    ...state,
                    FilteredPokemon: state.AllPokemon
                }
            } if (action.payload.includes('API')) {
                return {
                    ...state,
                    Pagination: state.AllPokemon.filter(obj =>
                        obj.id > 151
                    )
                }
            } if (action.payload.includes('CREATED')) {
                return {
                    ...state,
                    Pagination: state.AllPokemon.filter(obj =>
                        obj.id < 151
                    )
                }
            } if (action.payload.includes('BYNAME')) {
                return {
                    ...state,
                    FilteredPokemon: state.AllPokemon.sort((a, b) => {
                        if (a.name > b.name) return 1
                        else return -1
                    })
                }
            } if (action.payload.includes('BYID')) {
                return {
                    ...state,
                    FilteredPokemon: state.AllPokemon.sort((a, b) => {
                        return a.id - b.id
                    })
                }
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