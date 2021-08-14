import React from 'react';
import CheckBox from './CheckBoxes';

const MapTypes = (props) => {
    return (
        <div className={props.Styles.TypesContainer}>
            {
                props.all_types.map((value, index) => (
                    <React.Fragment key={index} >
                        <CheckBox
                            style={props.Styles}
                            onChange={() => props.handleChecked(value)}
                            value={value.toUpperCase()}
                            checked={props.checked.indexOf(value) === -1 ? false : true}
                        />
                    </React.Fragment>
                ))
            }
        </div>
    )
};

export default MapTypes;