const FormGroup = (props) => {
    return (
        <div>
            <input
                id={props.id}
                type={props.type}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.error && <p>{props.error}</p>}
        </div>
    );
};

export default FormGroup;


