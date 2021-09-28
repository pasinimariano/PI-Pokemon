import FormsGroup from '../../../../Reusable/input'

const FormName = ({
  Styles,
  handleSubmit,
  values,
  handleChange,
  handleErrors,
  errors
}) => {
  return (
    <div className={Styles.FormContainer}>
      <form onSubmit={handleSubmit} className={Styles.Form}>
        <FormsGroup
          id='name'
          type='text'
          name='name'
          placeholder='POKEMON NAME'
          value={values}
          onChange={handleChange}
          onBlur={handleErrors}
          className={Styles.InputName}
        />
        <button className={Styles.Buttons} type='submit'> SEARCH </button>
      </form>
      <h5 className={Styles.Error}>
        {errors.name && errors.name}
      </h5>
    </div>
  )
}

export default FormName
