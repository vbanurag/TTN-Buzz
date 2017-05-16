/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    updateLikeDislike,
    postComment,
    getComment
} from './../Action'

class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state= {
            opinion:{
                like:'',
                dislike:'',
                user:'',
                choose:''
            },
            commentPost: {
                comment:'',
                postId:''
            }
        }
    }
    componentWillMount() {
        const { opinion } = this.state;
        opinion.like = this.props.data.likeBy.likes.length;
        opinion.dislike = this.props.data.dislikeBy.dislikes.length;

        this.setState({ opinion });

    }
    onlikeHandler (e) {
        const { opinion } = this.state;
        opinion.like +=1;
        if(opinion.dislike >=1 ){
            opinion.dislike -= 1;
            opinion.choose = 'LIKE';
        }
        opinion.user=this.props.data.postedBy;
        opinion.id = this.props.data._id;
        this.setState({ opinion });
        this.props.dispatch.dispatch(updateLikeDislike(this.state.opinion));

    }
    onDislikeHandler (e) {
        const { opinion } = this.state;
        opinion.dislike +=1 ;
        if(opinion.like >=1 ){
            opinion.like -= 1;
            opinion.choose = 'DISLIKE';
        }
        opinion.user = this.props.data.postedBy;
        opinion.id = this.props.data._id;
        this.setState({ opinion });
        this.props.dispatch.dispatch(updateLikeDislike(this.state.opinion));
    }
    onCommentChangeHandler(e){
        const { commentPost } = this.state;
        commentPost[e.target.name] = e.target.value;
        commentPost.postId = this.props.data._id;
        this.setState({ commentPost });
    }
    onClickCommentHandler(e){
        console.log('comment on post , ', this.state.commentPost);
        this.props.dispatch.dispatch(postComment(this.state.commentPost));
        this.props.dispatch.dispatch(getComment());
        this.setState({commentPost: {comment:'', postId:''}});
    }

    render() {
        console.log('feed single ---',this.state.opinion);
        const item = this.props.data;
        const user = Object.assign({},item.postedBy);
        const date = new Date(item.createdAt);
        return(
            <div className="post">
                <div className="postheader">
                    <img src={user.imagUrl} alt="User Image" />
                    <div className="user">
                        <Link to={`/dashboard/profile/user/${user.email}`}>
                            <span className="Username">
                                { user.displayName }
                            </span>
                        </Link>
                        <div className="userDetails">
                            <span className="email">{`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}</span>
                        </div>
                    </div>
                    <div className="status">
                        {item.category}
                    </div>
                </div>
                <div className="postcontainer">
                    {item.imageUrl?
                        <div className="postimage">
                            <img src={item.imageUrl} alt="post image" />
                        </div>:
                        <span></span>
                    }
                    <div className="postthoughts">
                        <p>
                            {item.content}
                        </p>
                    </div>
                </div>
                <div className="postfooter">
                    <div className="likediscom">
                        <div className="like"
                             name="like"
                             value={this.state.opinion.like}
                             onClick={this.onlikeHandler.bind(this)}>
                            <i className="fa fa-thumbs-up" aria-hidden="true">
                            </i><span>{this.state.opinion.like}</span>
                        </div>
                        <div className="dislike" name="dislike"
                             value={this.state.opinion.dislike}
                             onClick={ this.onDislikeHandler.bind(this) }>
                            <i className="fa fa-thumbs-down" aria-hidden="true">
                            </i><span>{this.state.opinion.dislike}</span>
                        </div>
                        <div className="comment">
                            <i className="fa fa-comment-o" aria-hidden="true">
                            </i><span></span></div>
                    </div>
                    <div className="postcomment">
                        <div className="form">
                            <textarea
                                placeholder="Type Here"
                                name="comment"
                                value={this.state.commentPost.comment}
                                onChange={this.onCommentChangeHandler.bind(this)}
                            />
                            <button
                                className="btn btn-success green"
                                onClick={this.onClickCommentHandler.bind(this)}>
                                <i className="fa fa-comments-o"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feeds;