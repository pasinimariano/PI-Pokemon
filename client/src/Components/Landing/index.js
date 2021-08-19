import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_pokemons, get_types } from '../../Redux/actions/actionCreators';
import PokeballButton from '../Reusable/PokeballButton';
import Styles from './Style/index.module.css';
import ButtonStyle from '../../Style/button.module.css';


const Landing = ({ get_pokemons, get_types }) => {

    useEffect(() => {
        get_pokemons()
        get_types()
    }, [get_pokemons, get_types]);

    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.PageContainer}>
                <div className={Styles.TopLeft}></div>
                <div className={Styles.TopRight}></div>
                <div className={Styles.CenterContainer}></div>
                <div className={Styles.BottomLeft}></div>
                <div className={Styles.BottomRight}></div>
                <div className={Styles.ButtonContainer}>
                    <div className={Styles.ButtonBg}>
                        <div className={Styles.Button}> </div>
                    </div>
                </div>
            </div>
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