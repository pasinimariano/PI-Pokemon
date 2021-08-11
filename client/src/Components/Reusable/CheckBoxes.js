const CheckBox = (props) => {
    return (
        <div className={props.style.CheckboxContainer}>
            <input
                className={props.style.InputCheckbox}
                type='checkbox'
                onChange={props.onChange}
                checked={props.checked}
            />
            <span className={props.style.SpanValue}>
                {props.value}
            </span>
        </div>
    )
};

export default CheckBox