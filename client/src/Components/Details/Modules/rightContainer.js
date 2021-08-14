import Progress from "./progressBar";

const RightContainer = (props) => {
    return (
        <div className={props.Styles.RightContainer}>
            <div className={props.Styles.RightGrid}>
                <Progress value='HP' pokemon={props.pokemon} max='255' />
                <Progress value='ATK' pokemon={props.pokemon} max='255' />
                <Progress value='SPC_ATK' pokemon={props.pokemon} max='255' />
                <Progress value='DEF' pokemon={props.pokemon} max='255' />
                <Progress value='SPC_DEF' pokemon={props.pokemon} max='255' />
                <Progress value='SPD' pokemon={props.pokemon} max='255' />
            </div>
        </div>
    );
}

export default RightContainer;