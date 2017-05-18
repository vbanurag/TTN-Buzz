/**
 * Created by anurag on 5/5/17.
 */
import React, { Component } from 'react';
import Login from './login/login.component';
import Error from './error'
import {
    BrowserRouter as Router ,
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
import {
    browserHistory
} from 'react-router';
import Dashboard from './dashboard/dashboard.container';
import {
    fetchUser
} from './../Action/';
import ReactRedirect
 from 'react-redirect';



class StartContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn:false

        }
    }
    componentWillMount(){
        this.props.props.dispatch(fetchUser());

    }


    render() {
        console.log(this.props,'this props---final', Array.isArray(this.props.props.userReducer.users),'------',this.props.props.userReducer.users.role  )
        const homePath = <Route exact path='/'
                                render={ props =>
                                    (<Login { ...props }
                                            props = { this.props }/>)}/>;
        return(
                <div>
                    {homePath}
                    { !Array.isArray(this.props.props.userReducer.users)?
                        <div>
                            <Route exact path='/dashboard'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/LostAndFound'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/buzz'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/complaint'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/viewComplaint'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/profile/:email'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                            <Route exact path='/dashboard/profile/user/:email'
                                   render={ props => (
                                       <Dashboard { ...props}
                                                  props = { this.props }/>)} />
                        </div>

                        :<div>

                        </div>
                    }

                </div>
        )
    }
}
export default StartContainer;
