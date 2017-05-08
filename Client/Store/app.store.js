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

import {
    userReducer
} from './../Reducer';

const middlewareCall = applyMiddleware(...middleware);

const store = createStore(userReducer, middlewareCall);

export default store;