/**
 * Created by anurag on 9/5/17.
 */
import {
    combineReducers
} from 'redux';
import {
    userReducer,
    postReducer,
    commentReducer
} from './../Reducer/'

export default combineReducers({
    postReducer,
    userReducer,
    commentReducer
})