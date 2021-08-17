import { useState, useEffect } from 'react';
import randomImg from './getImg';


const useForm = (validate) => {

    const [values, setValues] = useState({
        name: '',
        img: '',
        hp: '',
        atk: '',
        def: '',
        spc_atk: '',
        spc_def: '',
        spd: '',
        hgt: '',
        wdt: '',
        types: []
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleTypes = (checked) => {
        const valueIndex = values.types.indexOf(checked);
        const newChecked = [...values.types];

        if (newChecked.length > 1) {
            newChecked.shift()
        };

        if (valueIndex === -1) {
            newChecked.push(checked);
        } else {
            newChecked.splice(valueIndex, 1)
        };

        setValues({
            ...values,
            types: newChecked
        });
    };

    const handleErrors = (event) => {
        const { name, value } = event.target;
        setErrors(validate({
            ...values,
            [name]: value
        }))
    };

    useEffect(() => {
        const getImg = async () => {
            const url = await randomImg();
            setValues({
                ...values,
                img: url
            })
        }
        getImg();
    }, []);

    return { values, setValues, errors, handleChange, handleErrors, handleTypes };
};

export default useForm;



