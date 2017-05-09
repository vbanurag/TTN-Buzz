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
import {
    fetchUser
} from './../Action/';


class StartContainer extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.props.dispatch(fetchUser());
    }

    render() {
        console.log('this props---final',this.props.props.userReducer)
        return(
                <div>
                    <Route exact path='/'
                           render={ props =>
                               (<Login { ...props }
                                       props = { this.props }/>)}/>

                    {this.props.props.userReducer.users !=0?
                        <Route exact path='/dashboard'
                               render={ props => (
                                   <Dashboard { ...props}
                                              props = { this.props }/>)} />
                        :<Link to="/" />
                    }

                </div>
        )
    }
}
export default StartContainer;
