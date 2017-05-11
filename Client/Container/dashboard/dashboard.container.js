/**
 * Created by anurag on 5/5/17.
 */
import React, { Component } from 'react';
import Header from  './../../Components/navigation.dashboard';
import Buzz from './../../Components/CreateBuzz.dashboard';
import ProfileCard from './../../Components/profileCard.dashboard';
import SidebarMenu from './../../Components/sidebar.menu.dashboard';
import FeedContainer from './../../Components/statusfeed';
import './dashboard.css';
import './dashboard-2.css';
import './dashboard-3.css';
import {
    BrowserRouter as Router ,
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('dashboard user----', this.props)
        return(
            <div>
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        <div className="col-md-3 col-sm-1 hidden-xs
                        display-table-cell v-align box"
                             id="navigation">
                            <ProfileCard props = {this.props.props} />
                            <SidebarMenu props = {this.props.props} />
                        </div>
                        <Header props = {this.props.props} />
                        {
                            this.props.location.pathname == '/dashboard'?
                                <Buzz props = {this.props.props}   />
                                : <span></span>
                        }
                        {
                            this.props.location.pathname == '/dashboard/LostAndFound'?
                                <span className="emptyLost"/>
                                : <span></span>
                        }
                        {
                            this.props.location.pathname == '/dashboard/buzz'?
                                <span className="emptyLost"/>
                                : <span></span>
                        }
                        <FeedContainer props={this.props.props.props} location={this.props.location.pathname} />
                    </div>
                </div>
            </div>
        )
    }

}
export default Dashboard;
