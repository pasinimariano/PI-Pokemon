import React from 'react';
import { connect } from 'react-redux';
import useForm from './functions/useForm';
import validate from './functions/validate';
import FormsGroup from '../Reusable/input';


const CreateForm = ({ AllTypes }) => {

    const {
        handleChange,
        handleErrors,
        handleSubmit,
        handleTypes,
        values,
        errors
    } = useForm(validate);

    return (
        <div>
            <h2> CREA TU PROPIO POKEMON! </h2>
            <form onSubmit={handleSubmit}>
                <img src={values.img}/>
                <FormsGroup id='name' type='text' name='name' placeholder='POKEMON NAME' value={values.name}
                    onChange={handleChange} onBlur={handleErrors} className='InputName' error={errors.name} />
                <FormsGroup id='hp' type='text' name='hp' placeholder='HP STAT' value={values.hp}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.hp} />
                <FormsGroup id='atk' type='text' name='atk' placeholder='ATK STAT' value={values.atk}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.atk} />
                <FormsGroup id='def' type='text' name='def' placeholder='DEF STAT' value={values.def}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.def} />
                <FormsGroup id='spc_atk' type='text' name='spc_atk' placeholder='SPC_ATK STAT' value={values.spc_atk}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.spc_atk} />
                <FormsGroup id='spc_def' type='text' name='spc_def' placeholder='SPC_DEF STAT' value={values.spc_def}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.spc_def} />
                <FormsGroup id='spc_def' type='text' name='spc_def' placeholder='SPC_DEF STAT' value={values.spc_def}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.spc_def} />
                <FormsGroup id='str' type='text' name='str' placeholder='STR STAT' value={values.str}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.str} />
                <FormsGroup id='hgt' type='text' name='hgt' placeholder='HGT STAT' value={values.hgt}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.hgt} />
                <FormsGroup id='wdt' type='text' name='wdt' placeholder='WDT STAT' value={values.wdt}
                    onChange={handleChange} onBlur={handleErrors} className='InputHP' error={errors.wdt} />
                <span> POKEMON TYPES </span>
                {
                    AllTypes.map((value, index) => (
                        <React.Fragment key={index}>
                            <div>
                                <input
                                    type='checkbox'
                                    onChange={() => handleTypes(value)}
                                    checked={values.types.indexOf(value) === -1 ? false : true}
                                />
                                <span> {value} </span>
                            </div>
                        </React.Fragment>
                    ))
                }
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        AllTypes: state.AllTypes
    }
};

export default connect(
    mapStateToProps,
    null
)(CreateForm)

