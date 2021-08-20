import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_pokemons, get_types } from '../../Redux/actions/actionCreators';
import Video from '../../img/Landing/PokemonArceus.mp4';
import LandingImg from '../../img/Landing/LogoGif.gif'
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
                    <div className={Styles.LeftContainer}>
                        <iframe
                            className={Styles.Video}
                            src={Video}
                            frameBorder='0'
                            allowFullScreen
                            title='video'
                        />
                    </div>
                    <div className={Styles.RightContainer}>
                        <img
                            className={Styles.Image}
                            src={LandingImg}
                            alt={'Pokemon Home'}
                        />
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