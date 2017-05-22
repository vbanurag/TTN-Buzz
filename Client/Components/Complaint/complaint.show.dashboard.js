/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import PrintTable from './complaint.print.table.dashboard';
import {
    getComplaint
} from './../../Action'

class ShowComplaint extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        const asyncCallForComplaints = this.props.props.props.props;
        asyncCallForComplaints.dispatch(getComplaint());
    }
    render() {
        console.log(this.props,'-----view compaints');
        const user = this.props.props.props.props.userReducer.users;
        const complaints = this.props.props.props.props.complaintReducer.complaint;
        return(
            <div className="tableComplaint">
                <table className="table">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Reference Id</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Filed By</th>
                    </tr>
                    </thead>
                    <tbody>
                    {complaints.length>0?
                        complaints.map((item,index) => (
                            <PrintTable key={index} data={item} sNo = {index} user={user}/>
                        )):<td></td>
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default ShowComplaint;