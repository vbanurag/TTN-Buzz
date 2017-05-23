/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Feed from './feed.single';
import {
    fetchPost
} from './../Action'
import './CSS/statusFeed.css';
import ReactCSSTransitionGroup from 'react-transition-group';

class StatusFeed extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.props.dispatch(fetchPost())
    }
    render () {
        const AllPost = this.props.props.postReducer;
        console.log(AllPost,'-----------------all post-----------')
        return(
            <div className="post-Container">
                {AllPost.posts!=null?
                    AllPost.posts.map((item)=> {
                        if(this.props.location=='/dashboard/LostAndFound'){
                            if(item.category=='Lost & Found'){
                                return <LazyLoad height={50} offset={[50,50]} once={true} debounce={1000} scroll={true}>
                                    <li><Feed data={ item } dispatch={this.props.props} /></li>
                                </LazyLoad>

                            }
                        }
                        else if(this.props.location=='/dashboard/buzz'){
                            if(item.category=='BUZZ' || item.category=='Buzz'){
                                return <LazyLoad height={50} offset={[50,50]} once={true} debounce={1000} scroll={true}>
                                    <li><Feed data={ item } dispatch={this.props.props} /></li>
                                </LazyLoad>
                            }
                        }
                        else{
                            return <LazyLoad height={50} offset={[50,50]} once={true} debounce={1000} scroll={true}>
                                <li><Feed data={ item } dispatch={this.props.props} /></li>
                            </LazyLoad>

                        }
                    })
                    :<span>Loading</span>
                }
            </div>

        )
    }
}
export default StatusFeed;
