import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import OrderState from './modules/orderState'
import OrderFilter from './modules/orderFilter'
import MapTypes from '../../Reusable/mapTypes'
import { filters } from '../../../Redux/actions/actionCreators'
import Styles from '../Style/home.module.css'

const SideBar = ({
  allPokemon,
  allTypes,
  filter,
  checked,
  handleChecked,
  showSidebar
}) => {
  useEffect(() => {
    filter(checked)
  }, [filter, checked, allPokemon])

  return (
    <div className={Styles.SideBarContainer}>
      <div className={Styles.FiltersContainer}>
        <h2 className={Styles.LabelFilter}> FILTERS </h2>
        <AiOutlineClose size={25} onClick={showSidebar} className={Styles.CloseButton} />
      </div>
      <div className={Styles.StateContainer}>
        <h2 className={Styles.LabelTitle}> STATE </h2>
        <OrderState Styles={Styles} handleChecked={handleChecked} checked={checked} />
      </div>
      <div className={Styles.OrderContainer}>
        <h2 className={Styles.LabelTitle}> ORDER </h2>
        <OrderFilter Styles={Styles} handleChecked={handleChecked} checked={checked} />
      </div>
      <h2 className={Styles.LabelTypes}> TYPES </h2>
      <div className={Styles.TypesContainer}>
        <MapTypes Styles={Styles} allTypes={allTypes} handleChecked={handleChecked} checked={checked} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allPokemon: state.AllPokemon,
    allTypes: state.AllTypes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (array) => dispatch(filters(array))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
