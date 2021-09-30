import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPokemonById, deleteDetails } from '../../Redux/actions/actionCreators'
import Body from './Modules/body'
import Styles from './style/details.module.css'

const PokemonDetails = ({
  getPokemon,
  deleteDetails,
  pokemon,
  match
}) => {
  useEffect(() => {
    deleteDetails()
    getPokemon(match.id)
  }, [deleteDetails, getPokemon, match])

  return (
    <>
      {
        pokemon === null
          ? (
            <div>
              ERROR 404
            </div>
            )
          : !pokemon.name
              ? (
                <div>
                  LOADING ...
                </div>
                )
              : (
                <Body
                  pokemon={pokemon}
                  Styles={Styles}
                  match={match}
                />
                )
        }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.PokemonDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemon: (id) => dispatch(getPokemonById(id)),
    deleteDetails: () => dispatch(deleteDetails())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails)
