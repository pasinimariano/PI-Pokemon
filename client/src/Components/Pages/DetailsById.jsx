import React from 'react';
import Card from '../Details/';
import Styles from './Styles/details.module.css';

const DetailsById = (props) => {
    return (
        <div className={Styles.Container}>
            <Card match={props.match.params} />
        </div>
    );
};

export default DetailsById;