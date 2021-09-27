import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import mapDispatchToProps from './modules/Dispatch'
import TopContainer from './modules/TopContainer/'
import Styles from './Style/index.module.css'

const Landing = ({
  getPokemons,
  getTypes
}) => {
  useEffect(() => {
    getPokemons()
    getTypes()
  }, [getPokemons, getTypes])

  return (
    <div className={Styles.MainContainer}>
      <TopContainer Styles={Styles} />
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Landing)
