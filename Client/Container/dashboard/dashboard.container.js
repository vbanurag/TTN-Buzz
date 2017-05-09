/**
 * Created by anurag on 5/5/17.
 */
import React, { Component } from 'react';
import Header from  './../../Components/navigation.dashboard';
import Buzz from './../../Components/CreateBuzz.dashboard';
import ProfileCard from './../../Components/profileCard.dashboard';
import SidebarMenu from './../../Components/sidebar.menu.dashboard';
import './dashboard.css';
import './dashboard-2.css';
import './dashboard-3.css';
import {
    fetchUser
}from './../../Action/'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <Buzz props = {this.props.props} />
                    </div>
                </div>
            </div>
        )
    }

}
export default Dashboard;
