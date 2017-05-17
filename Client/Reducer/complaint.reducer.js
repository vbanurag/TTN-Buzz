/**
 * Created by anurag on 17/5/17.
 */
import {
    POST_COMPLAINT_START,
    POST_COMPLAINT_SUCCESS,
    POST_COMPLAINT_ERROR
} from './../Config/config.constants';

const intialComplaintState = {
    complaint:[],
    loading: false,
    err: null
}
export const complaintReducer = (state=intialComplaintState, action)=> {
    switch (action.type){
        case POST_COMPLAINT_START: {
            return{
                ...state,
                loading:true,
            }
        }
        case POST_COMPLAINT_SUCCESS: {
            console.log(action.complaint,'------------getComplaint')
            const fetchComplains = action.complaint;
            return{
                ...state,
                complaint: fetchComplains,
                loading: false
            }
        }
        case POST_COMPLAINT_ERROR: {
            return{
                ...state,
                err: action.err
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}