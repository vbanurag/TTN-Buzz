/**
 * Created by anurag on 19/5/17.
 */
import {
    Alert
} from 'react-bootstrap';
import React from 'react';
import './CSS/alert.css';

const AlertForSuccess = (props) => {
    const post = props.post;
    if(post=='status'){
        return(
            <Alert bsStyle="success" bsClass='status-alert' >
                <strong className="alert-message"> { props.message }</strong>
            </Alert>
        )
    }else{
        return(
            <Alert bsStyle="success" bsClass='complaint-alert' >
                <strong className="alert-message"> { props.message }</strong>
            </Alert>
        )
    }

};

export default AlertForSuccess;