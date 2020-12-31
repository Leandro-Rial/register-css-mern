import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Inicio from './inicio/Inicio';
import OurHistory from './inicio/OurHistory';
import Contact from './inicio/Contact';
import Products from './products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './utils/not-found/NotFound';
import { GlobalState } from '../../GlobalState';

function Pages() {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged

    return (
        <Switch>
            
            <Route exact path="/" component={Inicio} />
            <Route path="/our-history" component={OurHistory} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" component={ isLogged ? Products : NotFound } />
            <Route path="/login" component={ isLogged ? NotFound : Login } />
            <Route path="/register" component={ isLogged ? NotFound : Register } />

            <Route path="*" component={NotFound} />
            
        </Switch>
    )
}

export default Pages
