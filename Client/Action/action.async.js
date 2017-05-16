import {
    FETCH_USER_START,
    FETCH_USER_SUCCES,
    FETCH_USER_ERRO,
    POST_CREATE_INIT,
    POST_CREATED_ONSUCCESS,
    POST_CREATE_ONERROR,
    UPDATE_LIKEDISLIKE_START,
    UPDATE_LIKEDISLIKE_SUCCESS,
    UPDATE_LIKEDISLIKE_ERROR,
    POST_COMMENT_CREATE_INIT,
    POST_COMMENT__CREATE_ONSUCCESS,
    POST_COMMENT__CREATE_ONERROR
} from './action';
import fetch from 'isomorphic-fetch';

export function fetchUser() {
    return (dispatch) => {
        dispatch(FETCH_USER_START());
        fetch('http://localhost:4500/api/user',{
            credentials: 'include',
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
export const createPost = (data) => {
    console.log(data,'----------dispatch method')
    return(dispatch) => {
        dispatch(POST_CREATE_INIT());
        fetch('http://localhost:4500/api/posts',{
            credentials: 'include',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                image:data.imagePreviewUrl,
                status:data.data.status,
                category: data.data.category
            })
        })
            .then( response => response.json() )
            .then( posts => {
                dispatch( POST_CREATED_ONSUCCESS(posts))
            })
            .catch((err) => {
                dispatch(POST_CREATE_ONERROR(err))
            })
    }
}
export const fetchPost = () => {
    return(dispatch) => {
        dispatch(POST_CREATE_INIT());
        fetch('http://localhost:4500/api/posts',{
            credentials: 'include',
        })
            .then(response => response.json())
            .then(posts => {
                dispatch( POST_CREATED_ONSUCCESS(posts))
            })
            .catch( (err) => {
                dispatch(POST_CREATE_ONERROR(err))
            })
    }
}
export const updateLikeDislike = ( opinion ) => {
    console.log('data in api call -----',opinion);
    return(dispatch) => {
        dispatch(UPDATE_LIKEDISLIKE_START());
        fetch('http://localhost:4500/api/posts/like_dislike',{
            credentials: 'include',
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({ opinion })
        })
            .then( response => response.json())
            .then( post => {
                dispatch (UPDATE_LIKEDISLIKE_SUCCESS(post) )
            })
            .catch((err) => {
                dispatch(UPDATE_LIKEDISLIKE_ERROR(err))
            })
    }
}
export const postComment = ( commentData ) => {
    console.log('postComment,----------',commentData)
    return(dispatch) => {
        dispatch(POST_COMMENT_CREATE_INIT());
        fetch('http://localhost:4500/api/comment',{
            credentials: 'include',
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(commentData)
        })
            .then( response => response.json() )
            .then( comments => {
                dispatch(POST_COMMENT__CREATE_ONSUCCESS(comments));
            })
            .catch((err) => {
                dispatch(POST_COMMENT__CREATE_ONERROR(err));
            })
    }
}
export const getComment = () => {
    return(dispatch) => {
        dispatch(POST_COMMENT_CREATE_INIT());
        fetch('http://localhost:4500/api/comment',{
            credentials: 'include',
            method: 'get',
        })
            .then( response => response.json() )
            .then( comments => {
                dispatch(POST_COMMENT__CREATE_ONSUCCESS(comments));
            })
            .catch((err) => {
                dispatch(POST_COMMENT__CREATE_ONERROR(err));
            })
    }
}


