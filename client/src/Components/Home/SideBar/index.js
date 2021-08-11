import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CheckBox from '../../Reusable/CheckBoxes';
import PokeballButton from '../../Reusable/PokeballButton';
import { get_types, filters_by_type } from '../../../Redux/actions/actionCreators';
import Styles from '../Style/home.module.css';
import ButtonStyle from '../../../Style/button.module.css';


const SideBar = ({ all_pokemon, all_types, filter, get_types }) => {

    const [checked, setChecked] = useState([]);

    const handleChange = (value, del) => {

        if (del) {
            if (value === 'BYID') {
                let index = checked.indexOf(del);
                if (index !== -1) { checked.splice(index, 1) }
            }
            if (value === 'BYNAME') {
                let index = checked.indexOf(del);
                if (index !== -1) { checked.splice(index, 1) }
            }
        };

        const valueIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (valueIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(valueIndex, 1)
        }

        setChecked(newChecked)
    };

    useEffect(() => {
        get_types()
    }, [])

    useEffect(() => {
        filter(checked);
    }, [checked]);

    useEffect(() => {
        filter(checked);
    }, [all_pokemon])

    return (
        <div className={Styles.SideBarContainer}>
            <h2 className={Styles.LabelTypes}>
                FILTER POR TIPOS
            </h2>
            <div className={Styles.TypesContainer}>
                {
                    all_types.map((value, index) => (
                        <React.Fragment key={index} >
                            <CheckBox style={Styles} onChange={() => handleChange(value)} value={value.toUpperCase()}
                                checked={checked.indexOf(value) === -1 ? false : true} />
                        </React.Fragment>
                    ))
                }
            </div>
            <h2 className={Styles.LabelOrder}>
                FILTER POR ORDEN
            </h2>
            <div className={Styles.OrderContainer}>
                <CheckBox style={Styles} onChange={() => handleChange('API')} value='API'
                    checked={checked.indexOf('API') === -1 ? false : true} />
                <CheckBox style={Styles} onChange={() => handleChange('CREATED')} value='CREATED'
                    checked={checked.indexOf('CREATED') === -1 ? false : true} />
                <CheckBox style={Styles} onChange={() => handleChange('BYNAME', 'BYID')} value='BY NAME'
                    checked={checked.indexOf('API') === -1 ? false : true} />
                <CheckBox style={Styles} onChange={() => handleChange('BYID', 'BYNAME')} value='BY ID'
                    checked={checked.indexOf('BYID') === -1 ? false : true} />
            </div>
            <div className={Styles.ButtonContainer}>
                <h2 className={Styles.Buttonh2}>
                    CREAR POKEMON
                </h2>
                <PokeballButton to='/newPokemon' style={ButtonStyle} />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        all_pokemon: state.AllPokemon,
        all_types: state.AllTypes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_types: () => dispatch(get_types()),
        filter: (array) => dispatch(filters_by_type(array)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
