import {
    POST_CREATE_START,
    POST_CREATED_SUCCESS,
    POST_CREATION_FAIL,
    UPDATE_LIKE_DISLIKE_START,
    UPDATE_LIKE_DISLIKE_SUCCESS,
    UPDATE_LIKE_DISLIKE_ERROR,
    POST_COMMENT_START,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR
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
export const UPDATE_LIKEDISLIKE_START = () => {
    return { type: UPDATE_LIKE_DISLIKE_START };
}
export const UPDATE_LIKEDISLIKE_SUCCESS = (post) => {
    return { type: UPDATE_LIKE_DISLIKE_SUCCESS, post };
}
export const UPDATE_LIKEDISLIKE_ERROR = (err) => {
    return { type: UPDATE_LIKE_DISLIKE_ERROR , err};
}
export const POST_COMMENT_CREATE_INIT = () => {
    return {type: POST_COMMENT_START };
}
export const POST_COMMENT__CREATE_ONSUCCESS = (comments) => {
    return {type: POST_COMMENT_SUCCESS, comments };
}
export const POST_COMMENT__CREATE_ONERROR = (err) => {
    return {type: POST_COMMENT_ERROR , err };
}