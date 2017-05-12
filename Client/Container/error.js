/**
 * Created by anurag on 12/5/17.
 */
import React, { Component } from 'react';
import {
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
const Error = (props) => {
    console.log(props,'---------Error')
    return(
        <div>
            <Link to="/" />
        </div>
    )
}
export default Error;