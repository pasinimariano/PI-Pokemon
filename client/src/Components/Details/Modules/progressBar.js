const Progress = (props) => {
    return (
        <div>
            <h2> {props.value} </h2>
            <progress value={props.pokemon.hp} max={props.max} ></progress>
        </div>
    )
};

export default Progress;