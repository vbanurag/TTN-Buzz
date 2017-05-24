/**
 * Created by anurag on 17/5/17.
 */
import React, { Component } from 'react';
import { parseTime } from './../Config/config.parseTime';
import './CSS/commentList.css';
const CommentDisplay = (props) => {
    return(
        <div className="post-footer">
            <ul className="comments-list">
                <li className="comment">
                    <a className="pull-left" >
                        <img className="avatar" src={props.comment.commentedBy.imagUrl} alt="avatar"/>
                    </a>
                    <div className="comment-body">
                        <div className="comment-heading">
                            <h4 className="user" >{props.comment.commentedBy.displayName}</h4>
                            <h5 className="time">{parseTime(props.comment.createdAt)}</h5>
                        </div>
                        <p>{props.comment.comment}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default CommentDisplay;