/**
 * Created by anurag on 4/5/17.
 */
import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Container from './Start.container';
import {
    browserHistory
} from 'react-router';


class App extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <BrowserRouter history={browserHistory}>
                <Container props={this.props}/>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;