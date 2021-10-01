import React from 'react'
import CheckBox from './CheckBoxes'

const MapTypes = ({
  Styles,
  allTypes,
  handleChecked,
  checked
}) => {
  return (
    <div className={Styles.TypesContainer}>
      <h4 className={Styles.TypeTitle}>
        SELECT YOUR POKEMON TYPES
      </h4>
      <div className={Styles.Mapping}>
        {
          allTypes.map((value, index) => (
            <React.Fragment key={index}>
              <CheckBox
                style={Styles}
                onChange={() => handleChecked(value)}
                value={value.toUpperCase()}
                checked={checked.indexOf(value) !== -1}
              />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default MapTypes
