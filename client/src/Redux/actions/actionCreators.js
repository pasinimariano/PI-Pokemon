import axios from 'axios'
import {
  GET_ALL_POKEMONS,
  FILTER_BY_NAME,
  FILTERS,
  PAGINATION,
  POKEMON_BY_ID,
  DELETE_DETAILS,
  GET_ALL_TYPES
} from '.'

export const getPokemons = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/pokemons')
      .then(json => {
        dispatch({ type: GET_ALL_POKEMONS, payload: json.data })
      })
  }
}

export const filterByName = (name) => {
  return dispatch => {
    return axios.get(`http://localhost:3001/pokemons?name=${name}`)
      .then(json => {
        dispatch({ type: FILTER_BY_NAME, payload: json.data })
      })
  }
}

export const filters = (array) => {
  return {
    type: FILTERS, payload: array
  }
}

export const pagination = (page, offset) => {
  return {
    type: PAGINATION, payload: { page, offset }
  }
}

export const getTypes = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/types')
      .then(json => {
        if (json.data === 'Success') {
          return axios.get('http://localhost:3001/types')
            .then(json => {
              dispatch({ type: GET_ALL_TYPES, payload: json.data })
            })
        } else {
          dispatch({ type: GET_ALL_TYPES, payload: json.data })
        }
      })
  }
}

export const get_pokemon_by_id = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: POKEMON_BY_ID, payload: json })
      })
  }
}

export const delete_details = () => {
  return {
    type: DELETE_DETAILS
  }
}
