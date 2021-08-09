import React from 'react';
import Card from '../Details/DetailsById/';

const DetailsById = (props) => {
    return (
        <div>
            <Card match={props.match.params} />
        </div>
    );
};

export default DetailsById;