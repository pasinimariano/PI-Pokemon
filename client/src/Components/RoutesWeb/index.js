import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Home from '../Pages/Home';
import DetailsById from '../Pages/DetailsById';

const RoutesWeb = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/pokemons' component={Home} />
            <Route exact path='/pokemons/:id' component={DetailsById} />
        </Switch>
    )
};

export default RoutesWeb;