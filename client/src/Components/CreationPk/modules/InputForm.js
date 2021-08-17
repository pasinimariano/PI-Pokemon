import FormsGroup from "../../Reusable/input"

const InputForm = (props) => {
    return (
        <div className={props.Styles.InputsContainer}>
            <FormsGroup id='name' type='text' name='name' placeholder='NAME' value={props.values.name} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.name} />
            <FormsGroup id='hp' type='text' name='hp' placeholder='HP' value={props.values.hp} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.hp} />
            <FormsGroup id='atk' type='text' name='atk' placeholder='ATK' value={props.values.atk} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.atk} />
            <FormsGroup id='def' type='text' name='def' placeholder='DEF' value={props.values.def} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.def} />
            <FormsGroup id='spc_atk' type='text' name='spc_atk' placeholder='SPC_ATK' value={props.values.spc_atk} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.spc_atk} />
            <FormsGroup id='spc_def' type='text' name='spc_def' placeholder='SPC_DEF' value={props.values.spc_def} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.spc_def} />
            <FormsGroup id='spd' type='text' name='spd' placeholder='SPD' value={props.values.spd} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.spd} />
            <FormsGroup id='hgt' type='text' name='hgt' placeholder='HGT' value={props.values.hgt} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.hgt} />
            <FormsGroup id='wdt' type='text' name='wdt' placeholder='WDT' value={props.values.wdt} onChange={props.handleChange}
                onBlur={props.handleErrors} className={props.Styles.Inputs} error={props.errors.wdt} />
        </div>
    )
};

export default InputForm;