import FormsGroup from '../../Reusable/input'

const InputForm = ({
  Styles,
  values,
  errors,
  handleErrors,
  handleChange
}) => {
  return (
    <div className={Styles.InputsContainer}>
      <FormsGroup
        id='name' type='text' name='name' placeholder='NAME' value={values.name} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.name}
      />
      <FormsGroup
        id='hp' type='text' name='hp' placeholder='HP' value={values.hp} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.hp}
      />
      <FormsGroup
        id='atk' type='text' name='atk' placeholder='ATK' value={values.atk} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.atk}
      />
      <FormsGroup
        id='def' type='text' name='def' placeholder='DEF' value={values.def} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.def}
      />
      <FormsGroup
        id='spc_atk' type='text' name='spc_atk' placeholder='SPC_ATK' value={values.spc_atk} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.spc_atk}
      />
      <FormsGroup
        id='spc_def' type='text' name='spc_def' placeholder='SPC_DEF' value={values.spc_def} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.spc_def}
      />
      <FormsGroup
        id='spd' type='text' name='spd' placeholder='SPD' value={values.spd} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.spd}
      />
      <FormsGroup
        id='hgt' type='text' name='hgt' placeholder='HGT' value={values.hgt} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.hgt}
      />
      <FormsGroup
        id='wdt' type='text' name='wdt' placeholder='WDT' value={values.wdt} onChange={handleChange}
        onBlur={handleErrors} className={Styles.Inputs} error={errors.wdt}
      />
    </div>
  )
}

export default InputForm
