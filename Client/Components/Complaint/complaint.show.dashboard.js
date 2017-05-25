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
        super(props);
        this.state ={
            searchType: {
                value:''
            }
        }
    }
    componentWillMount(){
        const asyncCallForComplaints = this.props.props.props.props;
        asyncCallForComplaints.dispatch(getComplaint());
    }
    onChangeHandler = (e) => {
        const { searchType } = this.state;
        searchType.value = e.target.value;
        this.setState({ searchType });
        console.log(this.state,'-----------Choose value-------');
    };
    render() {
        const user = this.props.props.props.props.userReducer.users;
        const complaints = this.props.props.props.props.complaintReducer.complaint;
        return(
            <div className="tableComplaint">
                <div className="panel-heading">
                    <h3 className="panel-title-complaint">Complaints</h3>
                    <div className="pull-right">
                        <div className="form-group">
                            <select className="form-control complaint-type-select"
                                    onChange={ this.onChangeHandler }
                                    name="category" >
                                <option selected="selected" value='Hardware'>Hardware</option>
                                <option value='Software'>Software</option>
                                <option value='Infrastructure'>Infrastructure</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Complaint Id</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Filed By</th>
                    </tr>
                    </thead>
                    <tbody>
                    {complaints.length>0?
                        complaints.map((item,index) => {
                            if(this.state.searchType.value==''){
                                return <PrintTable key={index} data={item} sNo = {index} user={user}/>;
                            }else{
                                return this.state.searchType.value == item.category ?
                                    <PrintTable key={index} data={item} sNo = {index} user={user}/>
                                    :<td></td>
                            }
                        }):<td>No Record Found</td>
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ShowComplaint;