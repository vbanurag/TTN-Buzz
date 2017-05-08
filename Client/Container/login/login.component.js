/**
 * Created by anurag on 4/5/17.
 */
import React, { Component }  from 'react';
import {
    fetchUser
} from './../../Action'
import './login.css';

class Login extends Component {
    constructor(props){
        super(props);
    }
    onClickHandler(){
        //this.props.props.props.dispatch(fetchUser());
        console.log(this.props)

    }
    render(){
        console.log('props in login : ',this.props.props);
        return(
            <div className="body">
                <div className="container">
                    <div className="info">
                        <img src="https://res.cloudinary.com/buzzttn/image/upload/v1494144926/logo_gbmyqf.png"/>
                        <h1>Sign in to TTN BUZZ</h1>
                    </div>
                    <div className="form">
                        <div className="thumbnail"><i className="fa fa-paper-plane fa-5x "></i></div>
                        <a href="http://localhost:4500/login/google" onClick={this.onClickHandler.bind(this)}>
                            <button className="loginBtn loginBtn--google">
                                Login with Google
                            </button>
                        </a>

                    </div>
                </div>
            </div>

        )
    }
}

export default Login;