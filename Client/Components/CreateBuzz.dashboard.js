/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';
import {
    createPost
} from './../Action';
import Alert from './alert.message';
import './CSS/alert.css';

class Buzz extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{
                status:'',
                image: '',
                video: '',
                imageFile:'',
                category:''
            },
            file:'',
            imagePreviewUrl:'',
            err:'Invalid Field',
            isInvalid:false,
            valid: false,
            message: 'Activity Posted Successfully.'
        }
    }
    onChangeHandler(e){
        this.setState({ isInvalid:false });
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        console.log('----stattus ....',data)

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
        this.setState({data});
    }
    onClickHandler(e){
        e.preventDefault();
        const dispatch = this.props.props;
        this.setState({valid:true});
        const { data } = this.state;
        if((data.status || data.imageFile )){
            if(data.category!=''){
                dispatch.props.dispatch(createPost(this.state));
                this.setState({
                    data:{}
                });
                window.setTimeout(()=>{
                    this.setState({
                        valid:false
                    })
                },3000);
                window.location.reload();
            }
            else{
                this.setState({isInvalid:true})
            }
        }else{
            this.setState({isInvalid:true})
        }
    }

    render() {
        const { data } = this.state;
        console.log(this.props, '-------buzz created')
        return(
            <div className="container-buzz">
                {this.state.valid ?<Alert message={this.state.message} post={'status'}/>:<span></span>}
                <div className="row">
                    <div className="col-md-9">
                        <div className="widget-area no-padding blank">
                            <div className="status-upload">
                                <form>
                                    <textarea className="buzzShare"
                                              placeholder="Create your Buzz"
                                              name="status"
                                              value= {this.state.data.status}
                                              onChange={ this.onChangeHandler.bind(this) }
                                    ></textarea>
                                    <ul>
                                        <li><input type="file"
                                                   className="videoUpload"
                                                   name="video"
                                                   value= {data.video}
                                                   onChange={ this.onChangeHandler.bind(this) }
                                                   accept="video/*"/>
                                            <span><i className="fa fa-video-camera">
                                            </i></span>
                                            </li>
                                        <li>
                                            <input type="file"
                                                   className="imageUpload"
                                                   name="image"
                                                   value={data.image}
                                                   onChange={ this.onChangeHandler.bind(this) }
                                                   accept="image/*"/>
                                            <span><i className="fa fa-picture-o"></i></span>
                                            </li>
                                        <li>
                                            <select className="form-control activity-type"
                                                    onChange={this.onChangeHandler.bind(this)}
                                                    name="category"
                                            >
                                                <option selected="selected" value='Buzz'>Buzz</option>
                                                <option value='Lost & Found'>Lost & Found</option>
                                            </select>
                                        </li>
                                    </ul>
                                    {this.state.isInvalid?<span>{this.state.err}</span>:<span></span>}
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