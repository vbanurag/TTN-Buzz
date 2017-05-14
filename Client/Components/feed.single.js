/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state= {
            opinion:{
                like:'',
                dislike:'',
                comment:''
            }
        }
    }
    onlikeHandler (e) {
        const { opinion } = this.state;
        opinion.like =1;
        opinion.dislike=0;
        this.setState({ opinion })

    }
    onDislikeHandler (e) {
        const { opinion } = this.state;
        if(opinion.dislike==0){
            opinion.dislike=1;
            opinion.like=0;
            this.setState({ opinion })
        }
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
                             onClick={this.onlikeHandler.bind(this)}
                        >
                            <i className="fa fa-thumbs-up"
                               aria-hidden="true"
                               name="like"
                               onClick={this.onlikeHandler.bind(this)}
                            >
                            </i><span>{this.state.opinion.like}</span>
                        </div>
                        <div className="dislike" name="dislike"
                             value={this.state.opinion.dislike}
                             onClick={ this.onDislikeHandler.bind(this) }
                        >
                            <i className="fa fa-thumbs-down" aria-hidden="true">
                            </i><span>{this.state.opinion.dislike}</span></div>
                        <div className="comment">
                            <i className="fa fa-comment-o" aria-hidden="true">
                            </i><span></span></div>
                    </div>
                    <div className="postcomment">
                        <input type="text" placeholder="Type Here" />
                        <input type="submit" value="POST" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feeds;