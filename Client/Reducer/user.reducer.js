import {
    FETCH_USER_ERROR,
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS
} from './../Config/config.constants'


const intialState = {
    users: [],
    loading: false,
    err: null
}

export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_STARTED':
            {
                return {
                    ...state,
                    loading: true
                }
            }
        case 'FETCH_USER_SUCCESS':
            {
                let user = action.users;
                console.log(user,'response user')
                return {
                    ...state,
                    users: user,
                    loading: false
                }
            }
        case 'FETCH_USER_ERROR':
            {
                return {
                    ...state,
                    err: action.err
                }
            }

    }
    return state;
}