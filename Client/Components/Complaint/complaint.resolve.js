/**
 * Created by anurag on 22/5/17.
 */
import React,{ Component } from 'react';
import './complaint.css';
import {
    updateComplaintStatus
} from './../../Action'

class ComplaintResolve extends Component{
    constructor(props){
        super(props);
        this.state={
            complaint:{

            },
            action:{
                value:'',
                action:''
            }
        }
    }
    componentWillMount(){
        let { complaint,action } = this.state;
        const complaints = this.props.props.props.props.complaintReducer.complaint;
        const id = this.props.props.match.params.id;
        const targetComplaint = complaints.find((item,index)=> {
            return item._id==id;
        });
        action.value='disabled';
        complaint=targetComplaint;
        this.setState({ complaint,action });
    }
    onChangeHandler(e){
        const { action,complaint } = this.state;
        action[e.target.name] = e.target.value;
        if(action.action){
            action.value='';
            complaint.status = action.action;
            this.setState({ action,complaint });
        }
        console.log(this.state)
    }
    onClickHandler(e){
        e.preventDefault();
        const { action } = this.state;
        console.log(this.state,'------------resolved');
        action.value='disabled';
        this.setState({ action });
        this.props.props.props.props.dispatch(updateComplaintStatus(this.state.complaint));
    }

    render(){
        const user = this.props.props.props.props.userReducer.users;
        const { complaint } = this.state;
        return(
            <div className="container-complaintResolve">
                    <div className="col-md-6 toppad" >
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">Complaint Detail</h3>
                            </div>
                            <div className="panel-body">
                                    <div className="col-md-5 col-lg-5 " align="center">
                                        <h3>CreatedBy :-</h3> <h4>{ complaint.complaintBy.displayName }</h4>
                                        <img alt="User Pic" src={complaint.complaintBy.imagUrl }
                                             className="img-circle user-image"/>
                                    </div>
                                    <div className=" col-md-7 col-lg-7 ">
                                        <table className="table table-user-information">
                                            <tbody>
                                            <tr>
                                                <td>Title:</td>
                                                <td>{ complaint.title }</td>
                                            </tr>
                                            <tr>
                                                <td>Complaint date:</td>
                                                <td>{ complaint.createdAt }</td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td>{ complaint.status }</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{ complaint.description }</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {
                                            user.role=='Admin'?
                                                <div className="complaint-action">
                                                    <form>
                                                        <div className="form-group complaint-action-form">
                                                            <select className="form-control action-select"
                                                                    name="action"
                                                                    onChange={ this.onChangeHandler.bind(this) }
                                                            >
                                                                <option value='Resolved'>Resolved</option>
                                                                <option value="InProgress">InProgress</option>
                                                            </select>
                                                            <button
                                                                className={`btn btn-info ${this.state.action.value}`}
                                                                onClick={ this.onClickHandler.bind(this) }
                                                            >
                                                                TakeAction</button>
                                                        </div>
                                                    </form>
                                                </div>:
                                                <span></span>
                                        }
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default ComplaintResolve;