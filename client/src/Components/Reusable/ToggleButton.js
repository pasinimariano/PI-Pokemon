const ToggleButton = (props) => {
    return (
        <div className={props.style.CheckboxContainer}>
            <label className={props.style.switch}>
                <input type='checkbox' onChange={props.onChange}/>
                <div className={props.style.slider}> ON </div>
            </label>
        </div>
    )
};

export default ToggleButton
