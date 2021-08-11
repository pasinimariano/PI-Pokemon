import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import statements from './statements';
import { pagination } from '../../../Redux/actions/actionCreators';
import Cards from '../Cards/';
import Styles from '../Style/home.module.css'


const Pagination = ({ AllPokemon, PagedPokemons, pagination }) => {
    
    const {
        indexFirstPokemon,
        indexLastPokemon,
        nextPage,
        prevPage
    } = statements;

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [AllPokemon]);

    useEffect(() => {
        pagination(indexFirstPokemon, indexLastPokemon)
    }, [indexFirstPokemon]);

    return (
        <div>
            <div className={Styles.ButtonNextContainer}>
                <button onClick={() => nextPage(AllPokemon)} className={Styles.NextButton}>
                    SIGUIENTE
                </button>
            </div>
            <div className={Styles.ButtonPrevContainer}>
                <button onClick={prevPage} className={Styles.PrevButton}>
                    ANTERIOR
                </button>
            </div>
            {
                PagedPokemons.length === 0 ?
                    <h2>LOADING...</h2>
                    :
                    <div>
                        <Cards AllPokemon={PagedPokemons} style={Styles} />
                    </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        AllPokemon: state.AllPokemon,
        PagedPokemons: state.Pagination
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pagination: (page, offset) => dispatch(pagination(page, offset))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);