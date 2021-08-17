import { useState } from 'react';

const Statements = () => {
    const [checked, setChecked] = useState([]);

    const handleChecked = (value, del) => {
        if (del) {
            let index0 = checked.indexOf(del[0]);
            let index1 = checked.indexOf(del[1]);
            let index2 = checked.indexOf(del[2]);

            if (index0 !== -1) { checked.splice(index0, 1) }
            if (index1 !== -1) { checked.splice(index1, 1) }
            if (index2 !== -1) { checked.splice(index2, 1) }

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