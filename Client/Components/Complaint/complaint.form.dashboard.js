/**
 * Created by anurag on 11/5/17.
 */
import React, { Component } from 'react';
import './complaint.css';

class ComplaintForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="form-container">
                <div className="form-area">
                    <form role="form">
                        <br className="brTag" ></br>
                        <h3 className="title" >Complaint Form</h3>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Title" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" type="textarea"  placeholder="Description"></textarea>
                        </div>
                        <div className="form-group">
                            <select className="selectpicker" >
                                <option >Hardware</option>
                                <option>Software</option>
                                <option>Infrastructure</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button  name="submit" className="btn-danger pull-right">Submit Form</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ComplaintForm;