import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import MapTypes from '../Reusable/mapTypes'
import useForm from '../Reusable/FormControl/useForm'
import validate from '../Reusable/FormControl/validate'
import InputForm from './modules/InputForm'
import { getPokemons } from '../../Redux/actions/actionCreators'
import { Link } from 'react-router-dom'
import Styles from './styles/index.module.css'
import ButtonStyle from '../../Style/button.module.css'

const CreateForm = ({ AllTypes, getPokemons }) => {
  const {
    handleChange,
    handleErrors,
    handleTypes,
    values,
    errors
  } = useForm(validate)

  const [response, setResponse] = useState('')

  const PostPokemon = (pokemon) => {
    axios.post('http://localhost:3001/pokemons', { pokemon })
      .then(response => setResponse(response.data))
      .then(getPokemons())
  }

  return (
    <div className={Styles.MainContainer}>
      <h2 className={Styles.Title}> CREA TU PROPIO POKEMON! </h2>
      <div className={Styles.FormContainer}>
        <form className={Styles.Form}>
          <InputForm Styles={Styles} values={values} handleChange={handleChange} handleErrors={handleErrors} errors={errors} />
          <MapTypes Styles={Styles} all_types={AllTypes} handleChecked={handleTypes} checked={values.types} />
        </form>
        <div className={Styles.ButtonContainer}>
          <button onClick={() => PostPokemon(values)} className={ButtonStyle.Buttons}> CREAR </button>
        </div>
      </div>
      <div className={Styles.RightContainer}>
        <h2 className={Styles.NameContainer}>{values.name.toUpperCase()}</h2>
        <img src={values.img} alt={values.img} className={Styles.Pokemon} />
        <h2>{response}</h2>
        <Link to='/pokemons' className={Styles.ContainerButton}>
          <button className={ButtonStyle.Buttons}>HOME</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    AllTypes: state.AllTypes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateForm)
