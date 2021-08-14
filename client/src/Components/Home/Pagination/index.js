import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pagination, filter_by_name } from '../../../Redux/actions/actionCreators';
import Statements from './functions/statements';
import UseForm from '../../Reusable/FormControl/useForm';
import validate from '../../Reusable/FormControl/validate';
import FormsGroup from '../../Reusable/input';
import Cards from '../Cards/';
import Styles from '../Style/home.module.css';
import ButtonStyles from '../../../Style/button.module.css'



const Pagination = ({ AllPokemon, FilteredPokemon, PagedPokemons, pagination, filter_by_name }) => {

    const {
        indexFirstPokemon, setindexFirstPokemon,
        indexLastPokemon, setindexLastPokemon,
        nextPage, prevPage
    } = Statements();

    const {
        values, errors, handleChange, handleErrors, setValues
    } = UseForm(validate);

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
    }, [AllPokemon]);

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [indexFirstPokemon]);

    useEffect(() => {
        setindexFirstPokemon(0);
        setindexLastPokemon(9);
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [FilteredPokemon])


    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.Headers}>
                <form onSubmit={handleSubmit} className={Styles.FormContainer}>
                    <FormsGroup id='name' type='text' name='name' placeholder='POKEMON NAME' value={values.name}
                        onChange={handleChange} onBlur={handleErrors} className={Styles.InputName} error={errors.name} />
                    <button className={ButtonStyles.Buttons} type='submit'> BUSCAR</button>
                </form>
                <div className={Styles.ContainerButtons}>
                    <div className={Styles.ButtonNextContainer}>
                        <button onClick={() => nextPage(FilteredPokemon)} className={ButtonStyles.Buttons}>
                            SIGUIENTE
                        </button>
                    </div>
                    <div className={Styles.ButtonPrevContainer}>
                        <button onClick={prevPage} className={ButtonStyles.Buttons}>
                            ANTERIOR
                        </button>
                    </div>
                </div>
            </div>
            {
                PagedPokemons.length === 0 ?
                    <h2>LOADING...</h2>
                    :
                    <div className={Styles.CardsContainer}>
                        <Cards AllPokemon={PagedPokemons} style={Styles} />
                    </div>
            }
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