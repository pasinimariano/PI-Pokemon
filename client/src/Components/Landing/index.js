import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import mapDispatchToProps from './modules/Dispatch'
import TopContainer from './modules/TopContainer/'
import CentralContainer from './modules/CentralContainer/'
import BottomContainer from './modules/BottomContainer'
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
    <div>
      <div className={Styles.MainTopContainer}>
        <TopContainer Styles={Styles} />
      </div>
      <div className={Styles.MainCentralContainer}>
        <CentralContainer Styles={Styles} />
      </div>
      <div className={Styles.MainTopContainer}>
        <BottomContainer Styles={Styles} />
      </div>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Landing)
