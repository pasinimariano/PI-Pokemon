const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Name Required'
  } else if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = 'Invalid name. Only letters are allowed'
  };

  if (!values.hp) {
    errors.hp = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.hp))) {
    errors.hp = 'Field must be integer, and max range 255'
  };

  if (!values.atk) {
    errors.atk = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.hp))) {
    errors.atk = 'Field must be integer, and max range 255'
  };

  if (!values.def) {
    errors.def = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.def))) {
    errors.def = 'Field must be integer, and max range 255'
  };

  if (!values.spc_atk) {
    errors.spc_atk = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.spc_atk))) {
    errors.spc_atk = 'Field must be integer, and max range 255'
  };

  if (!values.spc_def) {
    errors.spc_def = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.spc_def))) {
    errors.spc_def = 'Field must be integer, and max range 255'
  };

  if (!values.spd) {
    errors.spd = 'Empty  field'
  } else if (!/^[1-9][0-9]?$|^255$/.test(parseInt(values.spd))) {
    errors.spd = 'Field must be integer, and max range 255'
  };

  if (!values.hgt) {
    errors.hgt = 'Empty  field'
  } else if (!/^[0-9]+$/.test(values.hgt)) {
    errors.hgt = 'Field must be integer'
  };

  if (!values.wdt) {
    errors.wdt = 'Empty  field'
  } else if (!/^[0-9]+$/.test(values.wdt)) {
    errors.wdt = 'Field must be integer'
  };

  return errors
}

export default validate
