/**
 * Created by anurag on 5/5/17.
 */
import React, { Component } from 'react';
import Login from './login/login.component';
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

class StartContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
                <div>
                    <Route exact path='/'
                           render={ props =>
                               (<Login { ...props }
                                       props = { this.props }/>)}/>
                    <Route exact path='/dashboard'
                           render={ props => (
                               <Dashboard { ...props}
                               props = { this.props }/>)} />
                </div>
        )
    }
}
export default StartContainer;
