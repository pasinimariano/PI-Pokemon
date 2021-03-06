import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { pagination, filterByName, filters } from '../../../Redux/actions/actionCreators'
import Statements from './functions/statements'
import UseForm from '../../Reusable/FormControl/useForm'
import validate from '../../Reusable/FormControl/validate'
import Body from './modules/body'
import Styles from '../Style/home.module.css'
import SideBar from '../SideBar'

const Pagination = ({
  AllPokemon,
  FilteredPokemon,
  PagedPokemons,
  pagination,
  filterByName,
  checked,
  handleChecked,
  sidebar,
  showSidebar,
  filters
}) => {
  const {
    values,
    errors,
    handleChange,
    handleErrors,
    setValues
  } = UseForm(validate)

  const {
    indexFirstPokemon,
    setindexFirstPokemon,
    indexLastPokemon,
    setindexLastPokemon,
    nextPage,
    prevPage
  } = Statements()

  const handleSubmit = (event) => {
    event.preventDefault()
    filterByName(values.name)
    setValues({
      ...values,
      name: ''
    })
  }

  useEffect(() => {
    filters(checked)
  }, [])

  useEffect(() => {
    pagination(indexFirstPokemon, indexLastPokemon)
  }, [pagination, indexFirstPokemon, indexLastPokemon, AllPokemon])

  useEffect(() => {
    setindexFirstPokemon(0)
    setindexLastPokemon(9)
    pagination(indexFirstPokemon, indexLastPokemon)
  }, [FilteredPokemon, checked])

  return (
    <div className={Styles.MainContainer}>
      {
        !sidebar
          ? null
          : <SideBar
              checked={checked}
              handleChecked={handleChecked}
              showSidebar={showSidebar}
            />
      }
      <Body
        PagedPokemons={PagedPokemons}
        Styles={Styles}
        nextPage={() => nextPage(FilteredPokemon)}
        prevPage={prevPage}
        handleSubmit={handleSubmit}
        values={values.name}
        handleChange={handleChange}
        handleErrors={handleErrors}
        errors={errors}
        showSidebar={showSidebar}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    AllPokemon: state.AllPokemon,
    FilteredPokemon: state.FilteredPokemon,
    PagedPokemons: state.Pagination
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pagination: (page, offset) => dispatch(pagination(page, offset)),
    filterByName: (name) => dispatch(filterByName(name)),
    filters: (array) => dispatch(filters(array))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
