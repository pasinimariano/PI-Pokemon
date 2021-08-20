import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './modules/Dispatch';
import TopContainer from './modules/TopContainer';
import BottomContainer from './modules/BottomContainer';
import Styles from './Style/index.module.css';


const Landing = ({ get_pokemons, get_types }) => {

    useEffect(() => {
        get_pokemons()
        get_types()
    }, [get_pokemons, get_types]);

    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.PageContainer}>
                <div className={Styles.ScreenContainer}>
                    <TopContainer Styles={Styles} />
                    <div className={Styles.Separator} />
                    <BottomContainer Styles={Styles} />
                </div>
            </div>
        </div>
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Landing);