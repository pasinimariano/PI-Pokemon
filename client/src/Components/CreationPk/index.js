import React from 'react';
import { connect } from 'react-redux';
import MapTypes from '../Reusable/mapTypes';
import useForm from '../Reusable/FormControl/useForm';
import validate from '../Reusable/FormControl/validate';
import InputForm from './modules/InputForm';
import Styles from './styles/index.module.css';


const CreateForm = ({ AllTypes }) => {

    const {
        handleChange,
        handleErrors,
        handleSubmit,
        handleTypes,
        values,
        errors
    } = useForm(validate);

    return (
        <div>
            <h2> CREA TU PROPIO POKEMON! </h2>
            <form onSubmit={handleSubmit}>
                <img src={values.img} />
                <InputForm Styles={Styles} values={values} handleChange={handleChange} handleErrors={handleErrors} errors={errors} />
                <MapTypes Styles={Styles} all_types={AllTypes} handleChecked={handleTypes} checked={values.types} />
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        AllTypes: state.AllTypes
    }
};

export default connect(
    mapStateToProps,
    null
)(CreateForm)

