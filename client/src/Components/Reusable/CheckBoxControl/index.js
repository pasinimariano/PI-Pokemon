import { useState } from 'react';

const Statements = () => {
    const [checked, setChecked] = useState([]);

    const handleChecked = (value, del) => {
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

    return { checked, handleChecked }
};

export default Statements;