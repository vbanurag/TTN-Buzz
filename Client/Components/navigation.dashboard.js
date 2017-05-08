/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="col-md-5 aboveHeader">
                <header>
                    <div className="col-md-5 userDropDown">
                        <div className="header-rightside">
                            <ul className="list-inline header-top pull-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="http://lorempixel.com/100/100/people/9/" alt="user" height='32px' width='22px'/>
                                        <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="navbar-content">
                                                <span>JS Krishna</span>
                                                <p className="text-muted small">
                                                    me@jskrishna.com
                                                </p>
                                                <div className="divider">
                                                </div>
                                                <a href="#" className="view btn-sm active">View Profile</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation;