/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import './complaint.css';
import {
    postComplaint
} from'./../../Action'

class ComplaintForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            complaint: {
                title:'',
                description:'',
                category:''
            }
        }
    }
     onChangeHandler(e) {
        const { complaint } = this.state;
        complaint[e.target.name] = e.target.value;
        this.setState({complaint});
        console.log(this.state.complaint,'----------in complaint ')

    }
    onClickhandler(e) {
        e.preventDefault();
        const asyncCall = this.props.props.props.props;
        asyncCall.dispatch(postComplaint(this.state.complaint));
        this.setState({
            complaint: {
                title:'',
                description:'',
                category:''
            }
        })
    }
    render() {
        return(
            <div className="form-container">
                <div className="form-area">
                    <form role="form">
                        <br className="brTag" ></br>
                        <h3 className="title" >Complaint Form</h3>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   id="name" name="title"
                                   placeholder="Title"
                                   value={ this.state.complaint.title }
                                   onChange={ this.onChangeHandler.bind(this) }
                                   required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control"
                                      type="textarea"
                                      placeholder="Description"
                                      value={ this.state.complaint.description }
                                      onChange={ this.onChangeHandler.bind(this) }
                                      name="description"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                    onChange={ this.onChangeHandler.bind(this) }
                                    name="category" >
                                <option value='Hardware'>Hardware</option>
                                <option value='Software'>Software</option>
                                <option value='Infrastructure'>Infrastructure</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <button
                            onClick={ this.onClickhandler.bind(this) }
                            className="btn btn-danger pull-right">Submit Form</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ComplaintForm;