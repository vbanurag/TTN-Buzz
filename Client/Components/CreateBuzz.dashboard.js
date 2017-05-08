/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';
import {
    createPost
} from './../Action';

class Buzz extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                status:'',
                image: '',
                video: '',
                imageFile:''
            },
            file:'',
            imagePreviewUrl:''
        }
    }
    onChangeHandler(e){
        const { data } = this.state;
        data[e.target.name] = e.target.value;

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
        this.setState({data});
    }
    onClickHandler(e){
        e.preventDefault();
        const dispatch = this.props.props;
        dispatch.props.dispatch(createPost(this.state));
    }

    render() {
        const { data } = this.state;
        return(
            <div className="container-buzz">
                <div className="row">
                    <div className="col-md-9">
                        <div className="widget-area no-padding blank">
                            <div className="status-upload">
                                <form>
                                    <textarea className="buzzShare"
                                              placeholder="Create your Buzz"
                                              name="status"
                                              value= {data.status}
                                              onChange={ this.onChangeHandler.bind(this) }
                                    ></textarea>
                                    <ul>
                                        <li><input type="file"
                                                   className="videoUpload"
                                                   name="video"
                                                   value= {data.video}
                                                   onChange={ this.onChangeHandler.bind(this) }
                                                   accept="video/*"/>
                                            <i className="fa fa-video-camera">
                                            </i></li>
                                        <li><input type="file"
                                                   className="imageUpload"
                                                   name="image"
                                                   value={data.image}
                                                   onChange={ this.onChangeHandler.bind(this) }
                                                   accept="image/*"/>
                                            <i className="fa fa-picture-o">
                                            </i></li>
                                    </ul>
                                    <button
                                        className="statusButton btn btn-success green"
                                        onClick={ this.onClickHandler.bind(this)}
                                    >
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