/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

const SideBarNavigation = (props) => {
    const user = props.props.props.userReducer.users;
    return(
        <div className="navi">
            <ul>
                <li><Link to="/dashboard">
                    <i className="fa fa-home" aria-hidden="true">
                    </i><span className="hidden-xs hidden-sm">
                        Home
                    </span></Link></li>
                <li><Link to="/dashboard/buzz">
                    <i className="fa fa-tasks" aria-hidden="true">
                    </i><span className="hidden-xs hidden-sm">
                        Buzz
                    </span></Link></li>
                <li><Link to="/dashboard/LostAndFound">
                    <i className="fa fa-bar-chart" aria-hidden="true">
                    </i><span className="hidden-xs hidden-sm">
                        Lost and Found
                    </span></Link></li>
                <li><Link to="/dashboard/complaint">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true">
                    </i><span className="hidden-xs hidden-sm">
                        Complaint
                    </span></Link></li>
                <li><Link to="/dashboard/viewComplaint">
                    <i className="fa fa-list" aria-hidden="true">
                    </i><span className="hidden-xs hidden-sm">
                         View Complaint
                    </span></Link></li>
                <li>
                    {
                        user.role=='User'?
                            <Link to="/dashboard/resolve_complaint">
                                <i className="fa fa-th-list" aria-hidden="true">
                                </i><span className="hidden-xs hidden-sm">
                                    Resolve Complaint</span>
                            </Link>
                            :<span></span>
                    }
                </li>
            </ul>
        </div>
    )
}
export default SideBarNavigation;