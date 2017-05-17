/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import ComplaintForm from './complaint.form.dashboard';

class Complaint extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <ComplaintForm props={this.props.props} />
        )
    }
}
export default Complaint;