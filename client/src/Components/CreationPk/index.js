import React, { useState } from 'react';
import { connect } from 'react-redux';
import MapTypes from '../Reusable/mapTypes';
import useForm from '../Reusable/FormControl/useForm';
import validate from '../Reusable/FormControl/validate';
import InputForm from './modules/InputForm';
import { get_pokemons } from '../../Redux/actions/actionCreators';
import Styles from './styles/index.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

const CreateForm = ({ AllTypes, get_pokemons }) => {

    const {
        handleChange,
        handleErrors,
        handleTypes,
        values,
        errors
    } = useForm(validate);

    const [response, setResponse] = useState('')

    const PostPokemon = (pokemon) => {
        axios.post('http://localhost:3001/pokemons', { pokemon })
            .then(response => setResponse(response.data))
            .then(get_pokemons())
    };

    return (
        <div className={Styles.MainContainer}>
            <h2 className={Styles.Title}> CREA TU PROPIO POKEMON! </h2>
            <div className={Styles.FormContainer}>
                <form className={Styles.Form}>
                    <InputForm Styles={Styles} values={values} handleChange={handleChange} handleErrors={handleErrors} errors={errors} />
                    <MapTypes Styles={Styles} all_types={AllTypes} handleChecked={handleTypes} checked={values.types} />
                </form>
                <button onClick={() => PostPokemon(values)} className={Styles.Button}> CREAR </button>
            </div>
            <h2 className={Styles.NameContainer}>{values.name.toUpperCase()}</h2>
            <div className={Styles.RightContainer}>
                <img src={values.img} alt={values.img} />
                <h2>{response}</h2>
                <Link to='/pokemons'>
                    <button>HOME</button>
                </Link>
            </div>
        </div >
    );
};

const mapStateToProps = (state) => {
    return {
        AllTypes: state.AllTypes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_pokemons: () => dispatch(get_pokemons()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateForm)

