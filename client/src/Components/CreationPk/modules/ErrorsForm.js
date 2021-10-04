const ErrorsForm = ({
  Styles,
  errors
}) => {
  return (
    <div className={Styles.ErrorsForm}>
      <div className={Styles.Error}> {errors && errors.name} </div>
      <div className={Styles.Error}> {errors && errors.hp} </div>
      <div className={Styles.Error}> {errors && errors.atk} </div>
      <div className={Styles.Error}> {errors && errors.def} </div>
      <div className={Styles.Error}> {errors && errors.spc_atk} </div>
      <div className={Styles.Error}> {errors && errors.spc_def} </div>
      <div className={Styles.Error}> {errors && errors.spd} </div>
      <div className={Styles.Error}> {errors && errors.hgt} </div>
      <div className={Styles.Error}> {errors && errors.def} </div>
    </div>
  )
}

export default ErrorsForm
