/**
 * Created by anurag on 16/5/17.
 */
import {
    POST_COMMENT_START,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR
} from './../Config/config.constants';

const intialComments ={
    comments:null,
    loading: false,
    err: null
}

export const commentReducer= (state=intialComments, action) => {
    switch (action.type){
        case POST_COMMENT_START: {
            return{
                ...state,
                loading: true
            }
        }
        case POST_COMMENT_SUCCESS: {
            const comments = action.comments;
            return{
                ...state,
                comments: comments,
                loading:false
            }
        }
        case POST_COMMENT_ERROR: {
            return{
                ...state,
                err: action.err
            }
        }
        default: {
            return state;
        }
    }
}