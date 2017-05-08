import {
    FETCH_USER_START,
    FETCH_USER_SUCCES,
    FETCH_USER_ERRO
} from './action';
import fetch from 'isomorphic-fetch';

export function fetchUser() {
    return (dispatch) => {
        dispatch(FETCH_USER_START());
        fetch('http://anuragsharma.com:4500/login/google',{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin':'*'
            },

        })
            .then(response => response.json())
            .then(users => {
                dispatch(FETCH_USER_SUCCES(users))
            })
            .catch((err) => {
                dispatch(FETCH_USER_ERRO(err))
            })
    }
}
