import {
    GET_ALL_POKEMONS,
    FILTERS,
    POKEMON_BY_ID,
    DELETE_DETAILS,
    GET_ALL_TYPES
} from ".";

export const get_pokemons = () => {
    return dispatch => {
        return fetch('http://localhost:3001/pokemons')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_ALL_POKEMONS, payload: json })
            })
    }
};

export const filters = (array) => {
    return {
        type: FILTERS, payload: array
    }
};

export const get_types = () => {
    return dispatch => {
        return fetch('http://localhost:3001/types')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_ALL_TYPES, payload: json })
            })
    }
};

export const get_pokemon_by_id = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/pokemons/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: POKEMON_BY_ID, payload: json })
            })
    }
};

export const delete_details = () => {
    return {
        type: DELETE_DETAILS
    }
};
