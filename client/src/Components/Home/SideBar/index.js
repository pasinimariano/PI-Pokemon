import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    get_types,
    filters
} from '../../../Redux/actions/actionCreators';


const SideBar = ({ all_types, filter, get_types }) => {

    const [checked, setChecked] = useState([]);

    const handleChange = (value) => {
        const valueIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (valueIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(valueIndex, 1)
        }

        setChecked(newChecked)
    };

    useEffect(async () => {
        const checked_ = await checked;
        get_types();
        filter(checked_);
    }, [checked]);

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
            {/* <div>
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
            </div> */}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        pokemons: state.AllPokemons,
        all_types: state.AllTypes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_types: () => dispatch(get_types()),
        filter: (array) => dispatch(filters(array)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
