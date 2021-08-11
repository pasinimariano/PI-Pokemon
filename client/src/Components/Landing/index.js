import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_pokemons, get_types } from '../../Redux/actions/actionCreators';
import Styles from './Style/index.module.css'


const Landing = ({ get_pokemons, get_types }) => {

    useEffect(() => {
        get_pokemons()
        get_types()
    }, []);

    return (
        <div className={Styles.Container}>
            <Link to='/pokemons' className={Styles.Link}>
                <button className={Styles.Button}> Enter </button>
            </Link>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_pokemons: () => dispatch(get_pokemons()),
        get_types: () => dispatch(get_types())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Landing);