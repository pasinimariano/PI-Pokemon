import Video from '../../../img/Landing/PokemonArceus.mp4';

const TopContainer = (props) => {
    return (
        <div className={props.Styles.TopContainer}>
            <iframe autoPlay
                className={props.Styles.Video}
                src={Video}
                frameBorder='0'
                title='video'
            />
        </div>
    )
};

export default TopContainer;