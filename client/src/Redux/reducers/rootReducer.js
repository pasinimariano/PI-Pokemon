import { initialState } from "./initialState";
import {
    GET_ALL_POKEMONS,
    FILTER_BY_NAME,
    FILTERS,
    PAGINATION,
    GET_ALL_TYPES,
    POKEMON_BY_ID,
    DELETE_DETAILS,
} from '../actions/index';

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return { ...state, AllPokemon: action.payload }

        case PAGINATION:
            const paginationPK = state.FilteredPokemon.slice(action.payload.page, action.payload.offset);
            return { ...state, Pagination: paginationPK }

        case FILTER_BY_NAME:
            return { ...state, FilteredPokemon: action.payload.map(obj => obj) }

        case FILTERS:
            if (action.payload.length === 0) {
                return { ...state, FilteredPokemon: state.AllPokemon }

            } if (action.payload.includes('ALL')) {
                return { ...state, FilteredPokemon: state.AllPokemon }

            } if (action.payload.includes('API')) {
                const filterApi = state.AllPokemon.filter(obj => !(obj.id.toString().length > 3));
                return { ...state, FilteredPokemon: filterApi }

            } if (action.payload.includes('CREATED')) {
                const filterCreated = state.AllPokemon.filter(obj => !(obj.id.toString().length <= 3));
                return { ...state, FilteredPokemon: filterCreated }

            } if (state.AllTypes.some(type => action.payload.includes(type))) {
                const filterTypes = state.AllPokemon.filter(obj =>
                    action.payload.some(type =>
                        obj.types.includes(type)
                    )
                )
                return { ...state, FilteredPokemon: filterTypes }

            } if (action.payload.includes('ID')) {
                const filterID = state.FilteredPokemon.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
                return { ...state, FilteredPokemon: filterID }

            } if (action.payload.includes('IDSC')) {
                const filterIDSC = state.FilteredPokemon.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                return { ...state, FilteredPokemon: filterIDSC }

            } if (action.payload.includes('ASC')) {
                const filterASC = state.FilteredPokemon.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
                return { ...state, FilteredPokemon: filterASC }

            } if (action.payload.includes('DSC')) {
                const filterDSC = state.FilteredPokemon.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
                return { ...state, FilteredPokemon: filterDSC }

            } else {
                break
            }

        case GET_ALL_TYPES:
            return { ...state, AllTypes: action.payload }

        case POKEMON_BY_ID:
            return { ...state, PokemonDetails: action.payload }

        case DELETE_DETAILS:
            return { ...state, PokemonDetails: [] }

        default:
            return state;
    }
};
