import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pagination, filter_by_name } from '../../../Redux/actions/actionCreators';
import Statements from './functions/statements';
import UseForm from '../../Reusable/FormControl/useForm';
import validate from '../../Reusable/FormControl/validate';
import Header from './modules/header';
import Body from './modules/body';
import Styles from '../Style/home.module.css';
import ButtonStyles from '../../../Style/button.module.css'



const Pagination = (props) => {
    const { AllPokemon, FilteredPokemon, PagedPokemons, pagination, filter_by_name, checked } = props;
    const { values, errors, handleChange, handleErrors, setValues } = UseForm(validate);
    const {
        indexFirstPokemon, setindexFirstPokemon,
        indexLastPokemon, setindexLastPokemon,
        nextPage, prevPage
    } = Statements();

    const handleSubmit = (event) => {
        event.preventDefault();
        filter_by_name(values.name)
        setValues({
            ...values,
            name: ''
        })
    };

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [pagination, indexFirstPokemon, indexLastPokemon, AllPokemon]);

    useEffect(() => {
        setindexFirstPokemon(0);
        setindexLastPokemon(9);
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [FilteredPokemon, checked]);

    return (
        <div className={Styles.MainContainer}>
            <Header handleSubmit={handleSubmit} Styles={Styles} values={values.name} handleChange={handleChange}
                handleErrors={handleErrors} errors={errors} ButtonStyles={ButtonStyles}
                prevPage={prevPage} nextPage={() => nextPage(FilteredPokemon)} />
            <Body PagedPokemons={PagedPokemons} Styles={Styles} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        AllPokemon: state.AllPokemon,
        FilteredPokemon: state.FilteredPokemon,
        PagedPokemons: state.Pagination,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pagination: (page, offset) => dispatch(pagination(page, offset)),
        filter_by_name: (name) => dispatch(filter_by_name(name))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);