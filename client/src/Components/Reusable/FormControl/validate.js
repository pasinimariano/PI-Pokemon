const validate = (values) => {
    let errors = {};

    if(!values.name) {
        errors.name = 'El nombre del pokemon es requerido';
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
        errors.name = 'Nombre del pokemon inválido: se requiere usar solo letras y sin espacios.'
    };

    if(!values.hp) {
        errors.hp = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.hp)) {
        errors.hp = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.atk) {
        errors.atk = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.hp)) {
        errors.atk = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.def) {
        errors.def = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.def)) {
        errors.def = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.spc_atk) {
        errors.spc_atk = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.spc_atk)) {
        errors.spc_atk = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.spc_def) {
        errors.spc_def = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.spc_def)) {
        errors.spc_def = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.spd) {
        errors.spd = 'El campo esta vacio'
    } else if (!/^[1-9][0-9]?$|^255$/.test(values.spd)) {
        errors.spd = 'El campo debe ser númerico y stat maximo es de 255'
    };

    if(!values.hgt) {
        errors.hgt = 'El campo esta vacio'
    } else if (!/^[0-9]+$/.test(values.hgt)) {
        errors.hgt = 'El campo debe ser númerico'
    };

    if(!values.wdt) {
        errors.wdt = 'El campo esta vacio'
    } else if (!/^[0-9]+$/.test(values.wdt)) {
        errors.wdt = 'El campo debe ser númerico'
    };

    return errors
};

export default validate;
