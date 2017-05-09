/**
 * Created by anurag on 5/5/17.
 */
import {
    createStore,
    combineReducers,
    applyMiddleware
}
from 'redux';
import {
    middleware
} from './../Middleware';

import allReducer from './../combineReducer/combine.reducer';

const middlewareCall = applyMiddleware(...middleware);

const store = createStore(allReducer, middlewareCall);

export default store;