const LeftContainer = (props) => {
    return (
        <div className={props.Styles.LeftContainer}>
            <div className={props.Styles.LeftGrid}>
                <div className={props.Styles.PokeId}>
                    <h2> ID </h2>
                    <h2> #{props.pokemon.id} </h2>
                </div>
                <div className={props.Styles.PokeHgt}>
                    <h2> HEIGHT </h2>
                    <h2> {props.pokemon.hgt}mts </h2>
                </div>
                <div className={props.Styles.PokeWdt}>
                    <h2> WEIGHT </h2>
                    <h2> {props.pokemon.wdt}kg </h2>
                </div>
                <div className={props.Styles.TypesContainer}>
                    {props.pokemon.types.map(type =>
                        <div>
                            <img src={require(`../../../img/types/${type}.png`).default}
                                alt={`${type} sprite`} className={props.TypesStyles.Images} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeftContainer;