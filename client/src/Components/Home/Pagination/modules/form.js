import FormsGroup from "../../../Reusable/input"

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.Styles.FormContainer}>
            <FormsGroup
                id='name'
                type='text'
                name='name'
                placeholder='POKEMON NAME'
                value={props.values}
                onChange={props.handleChange}
                onBlur={props.handleErrors}
                className={props.Styles.InputName}
                error={props.errors.name} />
            <button className={props.ButtonStyles.Buttons} type='submit'> BUSCAR </button>
        </form>
    )
};

export default Form;