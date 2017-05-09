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
        console.log(AllPost,'in status feed-------')
        return(
            <div>
                {AllPost.posts!=null?
                    AllPost.posts.map((item)=> {
                        return <li><Feed data={ item }/></li>
                    })
                    :<span>fail</span>
                }
            </div>
        )
    }
}
export default StatusFeed;
