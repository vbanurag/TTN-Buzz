/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const user = this.props.props.props.users;
        return(
            <div className="col-md-5 aboveHeader">
                <header>
                    <div className="col-md-5 userDropDown">
                        <div className="header-rightside">
                            <ul className="list-inline header-top pull-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle"
                                       data-toggle="dropdown">
                                        <img src= {user.imagUrl}
                                             alt="user" height='32px' width='22px'/>
                                        <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="navbar-content">
                                                <span>{ user.displayName }</span>
                                                <p className="text-muted small">
                                                    { user.email }
                                                </p>
                                                <div className="divider">
                                                </div>
                                                <a href="http://localhost:4500/user/logout"
                                                   className="view btn-sm active">Logout</a>
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