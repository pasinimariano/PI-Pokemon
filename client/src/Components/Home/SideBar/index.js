import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    get_types,
    filters_by_type
} from '../../../Redux/actions/actionCreators';


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
        <div>
            {
                all_types.map((value, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <input
                                type='checkbox'
                                onChange={() => handleChange(value)}
                                checked={checked.indexOf(value) === -1 ? false : true}
                            />
                            <span> {value} </span>
                        </div>
                    </React.Fragment>
                ))
            }
            <div>
                <input
                    type='checkbox'
                    onChange={() => handleChange('API')}
                    checked={checked.indexOf('API') === -1 ? false : true}
                />
                <span> API </span>
            </div>
            <div>
                <input
                    type='checkbox'
                    onChange={() => handleChange('CREATED')}
                    checked={checked.indexOf('CREATED') === -1 ? false : true}
                />
                <span> CREATED </span>
            </div>
            <div>
                <input
                    type='checkbox'
                    onChange={() => handleChange('BYNAME', 'BYID')}
                    checked={checked.indexOf('BYNAME') === -1 ? false : true}
                />
                <span> BY NAME </span>
            </div>
            <div>
                <input
                    type='checkbox'
                    onChange={() => handleChange('BYID', 'BYNAME')}
                    checked={checked.indexOf('BYID') === -1 ? false : true}
                />
                <span> BY ID </span>
            </div>
            <Link to='/newPokemon' >
                <button> TO GO </button>
            </Link>
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
