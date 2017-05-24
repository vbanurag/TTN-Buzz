/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import ComplaintForm from './complaint.form.dashboard';

const Complaint = (props) => {
    return(
        <ComplaintForm props={props.props} />
    )
}
export default Complaint;