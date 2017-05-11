/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';
import {
    BrowserRouter as Router ,
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
class SideBarNavigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="navi">
                <ul>
                    <li><Link to="/dashboard">
                        <i className="fa fa-home" aria-hidden="true">
                        </i><span className="hidden-xs hidden-sm">
                        Home
                    </span></Link></li>
                    <li><Link to="dashboard/buzz">
                        <i className="fa fa-tasks" aria-hidden="true">
                        </i><span className="hidden-xs hidden-sm">
                        Buzz
                    </span></Link></li>
                    <li><Link to="/dashboard/LostAndFound">
                        <i className="fa fa-bar-chart" aria-hidden="true">
                        </i><span className="hidden-xs hidden-sm">
                        Lost and Found
                    </span></Link></li>
                    <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                </ul>
            </div>
        )
    }
}
export default SideBarNavigation;