import React from 'react'
import PokemonDetails from '../Details/'
import Styles from './Styles/details.module.css'

const DetailsById = ({
  match
}) => {
  return (
    <div className={Styles.Container}>
      <PokemonDetails match={match.params} />
    </div>
  )
}

export default DetailsById
