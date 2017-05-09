/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';

class Feeds extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="post">
                <div className="postheader">
                    <img src='' alt="User Image" />
                    <div className="user">
                        <span className="Username">
                            Anurag Sharma
                        </span>
                        <div className="userDetails">
                            <span className="email">abc@gmail.com</span>
                        </div>
                    </div>
                    <div className="status">
                        Lost n Found
                    </div>
                </div>
                <div className="postcontainer">
                    <div className="postimage">
                        <img src='' alt="post image" />
                    </div>
                    <div className="postthoughts">
                        <p>

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
}
export default Feeds;