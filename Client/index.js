/**
 * Created by anurag on 2/5/17.
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './../Client/Container/app';
import store from './../Client/Store/app.store';
import {
    Provider
} from 'react-redux';

render(
    <Provider store = { store } >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);