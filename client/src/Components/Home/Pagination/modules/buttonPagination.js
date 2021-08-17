const ButtonPagination = (props) => {
    return (
        <div className={props.Styles}>
            <button onClick={props.Page} className={props.ButtonStyles.Buttons}>
                {props.label}
            </button>
        </div>
    )
};

export default ButtonPagination;