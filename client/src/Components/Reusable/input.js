const FormGroup = (props) => {
    return (
        <div>
            {props.error ?
                <div>
                    <label>
                        {props.placeholder}
                    </label>
                    <input
                        id={props.id}
                        type={props.type}
                        name={props.name}
                        className={props.className}
                        placeholder={`${props.error}`}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                </div>
                :
                <div>
                    <label>
                        {props.placeholder}
                    </label>
                    <input
                        id={props.id}
                        type={props.type}
                        name={props.name}
                        className={props.className}
                        placeholder={`${props.placeholder}`}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                </div>
            }
        </div>
    );
};

export default FormGroup;


