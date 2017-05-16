/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import Feed from './feed.single';
import {
    fetchPost
} from './../Action'
import './CSS/statusFeed.css';

class StatusFeed extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.props.dispatch(fetchPost())
    }
    render () {
        const AllPost = this.props.props.postReducer;

        return(
            <div className="post-Container">
                {AllPost.posts!=null?
                    AllPost.posts.map((item)=> {
                        if(this.props.location=='/dashboard/LostAndFound'){
                            if(item.category=='Lost & Found'){
                                return <li><Feed data={ item }
                                                 dispatch={this.props.props} />
                                        </li>
                            }
                        }
                        else if(this.props.location=='/dashboard/buzz'){
                            if(item.category=='BUZZ'){
                                return <li><Feed data={ item }
                                                 dispatch={this.props.props} />
                                        </li>
                            }
                        }
                        else{
                            return <li><Feed data={ item } dispatch={this.props.props} /></li>
                        }
                    })
                    :<span>Loading</span>
                }
            </div>
        )
    }
}
export default StatusFeed;
