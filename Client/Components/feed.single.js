/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';

const Feeds = (props) => {
    const item = props.data;
    const user = Object.assign({},item.postedBy);
    const date = new Date(item.createdAt);
    return(
        <div className="post">
            <div className="postheader">
                <img src={user.imagUrl} alt="User Image" />
                <div className="user">
                        <span className="Username">
                            { user.displayName }
                        </span>
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
                    <a href="#">Like</a>
                    <a href="#">Dislike</a>
                    <a href="#">Comment</a>
                </div>
                <div className="postcomment">
                    <input type="text" placeholder="Type Here" />
                    <input type="submit" value="POST" />
                </div>
            </div>
        </div>
    )
}

/*class Feeds extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const item = this.props.data;
        let obj = Object.assign({},item.postedBy)
        console.log('user------',obj)
        return(
            <div className="post">
                <div className="postheader">
                    <img src='' alt="User Image" />
                    <div className="user">
                        <span className="Username">

                        </span>
                        <div className="userDetails">
                            <span className="email">{item.createdAt}</span>
                        </div>
                    </div>
                    <div className="status">
                        {item.category}
                    </div>
                </div>
                <div className="postcontainer">
                    <div className="postimage">
                        <img src={item.imageUrl} alt="post image" />
                    </div>
                    <div className="postthoughts">
                        <p>
                            {item.content}
                        </p>
                    </div>
                </div>
                <div className="postfooter">
                    <div className="likediscom">
                        <a href="#">Like</a>
                        <a href="#">Dislike</a>
                        <a href="#">Comment</a>
                    </div>
                    <div className="postcomment">
                        <input type="text" placeholder="Type Here" />
                        <input type="submit" value="POST" />
                    </div>
                </div>
            </div>
        )
    }
}*/
export default Feeds;