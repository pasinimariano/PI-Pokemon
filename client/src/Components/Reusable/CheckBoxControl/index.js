import { useState } from 'react';

const Statements = () => {
    const [checked, setChecked] = useState([]);

    const handleChecked = (value, del) => {
        if (del) {
            let index0 = checked.indexOf(del[0]);
            let index1 = checked.indexOf(del[1]);
            let index2 = checked.indexOf(del[2]);
            let index3 = checked.indexOf(del[3]);
            let index4 = checked.indexOf(del[4]);
            let index5 = checked.indexOf(del[5]);

            if (index0 !== -1) { checked.splice(index0, 1) }
            if (index1 !== -1) { checked.splice(index1, 1) }
            if (index2 !== -1) { checked.splice(index2, 1) }
            if (index3 !== -1) { checked.splice(index3, 1) }
            if (index4 !== -1) { checked.splice(index4, 1) }
            if (index5 !== -1) { checked.splice(index5, 1) }
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