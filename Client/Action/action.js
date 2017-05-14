import {
    POST_CREATE_START,
    POST_CREATED_SUCCESS,
    POST_CREATION_FAIL
} from './../Config/config.constants'

export function FETCH_USER_START() {
    return { type: 'FETCH_USER_STARTED' };
}
export function FETCH_USER_SUCCES(users) {
    return { type: 'FETCH_USER_SUCCESS', users };
}
export function FETCH_USER_ERRO(err) {
    return { type: 'FETCH_USER_ERROR', err };
}
export const POST_CREATE_INIT = () =>{
    return { type: POST_CREATE_START}
}
export const POST_CREATED_ONSUCCESS = (posts) =>{
    return { type: POST_CREATED_SUCCESS, posts}
}
export const POST_CREATE_ONERROR = (err) =>{
    return { type: POST_CREATION_FAIL, err}
}