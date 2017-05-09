/**
 * Created by anurag on 9/5/17.
 */
import {
    POST_CREATE_START,
    POST_CREATED_SUCCESS,
    POST_CREATION_FAIL
} from './../Config/config.constants';

const intialStatePost = {
    posts:null,
    loading:false,
    err:null
}
export const postReducer = (state=intialStatePost,action) => {
    switch (action.type) {
        case POST_CREATE_START: {
            return {
                ...state,
                loading: true
            }
        }
        case POST_CREATED_SUCCESS: {
            const posts = action.posts;
            return {
                ...state,
                posts:posts,
                loading:false
            }
        }
        case POST_CREATION_FAIL: {
            return {
                ...state,
                err: action.err
            }
        }
    }
    return state;
}
