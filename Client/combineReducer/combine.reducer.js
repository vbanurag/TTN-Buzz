/**
 * Created by anurag on 9/5/17.
 */
import {
    combineReducers
} from 'redux';
import {
    userReducer,
    postReducer
} from './../Reducer/'

export default combineReducers({
    postReducer,
    userReducer
})