/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';

class Buzz extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                status:'',
                image: '',
                video: ''
            }
        }
    }
    render() {
        return(
            <div className="container-buzz">
                <div className="row">
                    <div className="col-md-9">
                        <div className="widget-area no-padding blank">
                            <div className="status-upload">
                                <form>
                                    <textarea className="buzzShare" placeholder="Create your Buzz" ></textarea>
                                    <ul>
                                        <li><input type="file"
                                                   className="videoUpload"
                                                   accept="video/*"/>
                                            <i className="fa fa-video-camera">
                                            </i></li>
                                        <li><input type="file"
                                                   className="imageUpload"
                                                   accept="image/*"/>
                                            <i className="fa fa-picture-o">
                                            </i></li>
                                        <li>
                                            <div className="btn-group">
                                                <button type="button" data-toggle="dropdown"
                                                        className="btn btn-primary dropdown-toggle">
                                                    Action<span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <button type="submit"
                                            className="statusButton btn btn-success green">
                                        <i className="fa fa-share"></i>
                                        Share
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Buzz;