/**
 * Created by anurag on 9/5/17.
 */
import {
    POST_CREATE_START,
    POST_CREATED_SUCCESS,
    POST_CREATION_FAIL,
    UPDATE_LIKE_DISLIKE_START,
    UPDATE_LIKE_DISLIKE_SUCCESS,
    UPDATE_LIKE_DISLIKE_ERROR,
    POST_COMMENT_SUCCESS
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
        case UPDATE_LIKE_DISLIKE_START: {
            return {
                ...state,
                loading: true
            }
        }
        case UPDATE_LIKE_DISLIKE_SUCCESS: {
            let updatedPost = state.posts;
            updatedPost.forEach((item,index)=> {
                if(item._id==action.post[0]._id){
                    updatedPost[index] = action.post[0];
                }
            })
            return {
                posts:updatedPost,
                loading:false
            }
        }
        case UPDATE_LIKE_DISLIKE_ERROR: {
            return {
                ...state,
                loading: true
            }
        }
        case POST_COMMENT_SUCCESS: {
            console.log(action.postUpdated,'-----------sucessfull comment')
            let updatedPost = state.posts;
            updatedPost.forEach((item,index)=> {
                if(item._id==action.postUpdated[0]._id){
                    updatedPost[index] = action.postUpdated[0];
                }
            })
            return {
                posts:updatedPost,
                loading:false
            }
        }
    }
    return state;
}
