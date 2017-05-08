/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';

class SideBarNavigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="navi">
                <ul>
                    <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                    <li><a href="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Workflow</span></a></li>
                    <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Statistics</span></a></li>
                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Calender</span></a></li>
                    <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                    <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                </ul>
            </div>
        )
    }
}
export default SideBarNavigation;