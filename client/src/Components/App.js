import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './RoutesWeb';
import Styles from '../Style/app.module.css';

const App = () => {

    return (
        <Router className={Styles.App}>
            <RoutesWeb />
        </Router>
    )

};

export default App;