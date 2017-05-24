/**
 * Created by anurag on 17/5/17.
 */
import React, { Component } from 'react';
import { parseTime } from './../Config/config.parseTime';
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
                            <img className="avatar" src={this.props.comment.commentedBy.imagUrl} alt="avatar"/>
                        </a>
                        <div className="comment-body">
                            <div className="comment-heading">
                                <h4 className="user">{this.props.comment.commentedBy.displayName}</h4>
                                <h5 className="time">{parseTime(this.props.comment.createdAt)}</h5>
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