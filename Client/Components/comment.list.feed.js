/**
 * Created by anurag on 17/5/17.
 */
import React, { Component } from 'react';
import './CSS/commentList.css';

class CommentDisplay extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="post-footer">
                <ul className="comments-list">
                    <li className="comment">
                        <a className="pull-left" href="#">
                            <img className="avatar" src={this.props.user.imagUrl} alt="avatar"/>
                        </a>
                        <div className="comment-body">
                            <div className="comment-heading">
                                <h4 className="user">{this.props.user.displayName}</h4>
                                <h5 className="time">5 minutes ago</h5>
                            </div>
                            <p>{this.props.comment.comment}</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CommentDisplay;