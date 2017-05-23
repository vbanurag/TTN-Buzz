/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import { parseTime } from './../Config/config.parseTime';
import './CSS/commentList.css';
import {
    Link
} from 'react-router-dom';
import {
    updateLikeDislike,
    postComment,
    getComment
} from './../Action';
import CommentList from './comment.list.feed';

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
            },
            display:{
                value:false,
                type:'none'
            },
            likeDislike:{
                like:{
                    value:''
                },
                dislike: {
                    value:'none'
                }
            }
        }
    }
    componentWillMount() {
        const { opinion } = this.state;
        const { likeDislike } = this.state;

        opinion.like = this.props.data.likeBy.likes.length;
        opinion.dislike = this.props.data.dislikeBy.dislikes.length;
        this.props.data.likeBy.likes.map((item)=>{
            if(item.email==this.props.data.postedBy.email){
                likeDislike.like.value='none';
                likeDislike.dislike.value='';
                this.setState({ opinion });
            }
        })

        this.setState({ opinion });

    }
    onlikeHandler (e) {
        const { opinion } = this.state;
        if(opinion.dislike >=1 ){
            opinion.dislike -= 1;
            opinion.like +=1;
            opinion.choose = 'LIKE';
        }else{
            opinion.like += 1;
        }
        opinion.user=this.props.data.postedBy;
        opinion.id = this.props.data._id;
        const { likeDislike } = this.state;
        likeDislike.like.value='none';
        likeDislike.dislike.value='';
        this.setState({likeDislike});
        this.setState({ opinion });
        this.props.dispatch.dispatch(updateLikeDislike(this.state.opinion));


    }
    onDislikeHandler (e) {
        const { opinion } = this.state;
        const { likeDislike } = this.state;
        if(opinion.like >=1 ){
            opinion.like -= 1;
            opinion.dislike +=1;
            opinion.choose = 'DISLIKE';
        }else{
            opinion.dislike +=1;
        }
        likeDislike.like.value='';
        likeDislike.dislike.value='none';
        opinion.user = this.props.data.postedBy;
        opinion.id = this.props.data._id;
        this.setState({ opinion });
        this.setState({likeDislike});
        this.props.dispatch.dispatch(updateLikeDislike(this.state.opinion));
    }
    onCommentChangeHandler(e){
        const { commentPost } = this.state;
        commentPost[e.target.name] = e.target.value;
        commentPost.postId = this.props.data._id;
        this.setState({ commentPost });
    }
    onClickCommentHandler(e){
        e.preventDefault();
        console.log('comment on post , ', this.state.commentPost);
        this.props.dispatch.dispatch(postComment(this.state.commentPost));
        this.setState({commentPost: {comment:'', postId:''}});
    }
    onClickCommentDisplayToggle(e){
        const { display } = this.state;
        if(display.value){
            display.value=false;
            display.type='none';
        }else{
            display.value=true;
            display.type='';
        }
        this.setState({display});
    }

    render() {
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
                            <span className="email">{parseTime(item.createdAt)}</span>
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
                        {
                            this.state.opinion.like>0
                                ?<span className="like-display">
                                    {this.state.opinion.like} Like</span>
                                :<span></span>
                        }

                        <div className="like" style={{display:this.state.likeDislike.like.value}}
                             name="like"
                             onClick={this.onlikeHandler.bind(this)}>
                            <i className="fa fa-thumbs-o-up" aria-hidden="true">
                            </i>
                        </div>
                        <div className="dislike" name="dislike" style={{display:this.state.likeDislike.dislike.value}}
                             onClick={ this.onDislikeHandler.bind(this) }>
                            <i className="fa fa-thumbs-up" aria-hidden="true">
                            </i>
                        </div>
                        <div className="comment"
                             onClick={ this.onClickCommentDisplayToggle.bind(this) }>
                            <i className="fa fa-comment-o" aria-hidden="true">
                            </i><span></span></div>
                    </div>
                    <div className="postcomment" style={{display:this.state.display.type}}>
                        <div className="post-footer">
                            {item.comments.length>=0?
                                item.comments.map((item) => (
                                    <CommentList user={ user } comment = {item}/>
                                ))
                                :<span></span>
                            }
                            <form>
                                <textarea
                                    className="comment-textArea"
                                    placeholder="Type Here"
                                    name="comment"
                                    value={this.state.commentPost.comment}
                                    onChange={this.onCommentChangeHandler.bind(this)}
                                />
                                    <button
                                        className="btn btn-success green comment-btn"
                                        onClick={this.onClickCommentHandler.bind(this)}>
                                        <i className="fa fa-comments-o"></i>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feeds;