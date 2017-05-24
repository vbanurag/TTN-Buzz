/**
 * Created by anurag on 4/5/17.
 */
import React, { Component }  from 'react';
import './login.css';

const Login = (props) => {
    console.log('props in login : ',props.props);
    return(
        <div className="body">
            <div className="container">
                <div className="info">
                    <img src="https://res.cloudinary.com/buzzttn/image/upload/v1494144926/logo_gbmyqf.png"/>
                    <h1>Sign in to TTN BUZZ</h1>
                </div>
                <div className="form">
                    <div className="thumbnail"><i className="fa fa-paper-plane fa-5x "></i></div>
                    <a href="http://localhost:4500/login/google" >
                        <button className="loginBtn loginBtn--google">
                            Login with Google
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Login;