/**
 * Created by anurag on 9/5/17.
 */
import React, { Component } from 'react';
import Feed from './feed.single';
import './CSS/statusFeed.css';

class StatusFeed extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props,'in status feed')
        return(
            <div>
                <Feed/>
            </div>
        )
    }
}
export default StatusFeed;
