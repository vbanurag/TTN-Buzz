/**
 * Created by anurag on 26/5/17.
 */
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MobileView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const user = this.props.props.props.userReducer.users;
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                       <NavItem href="http://anuragsharma.com:9000/dashboard/buzz">Home</NavItem>
                        <Link to="/dashboard/buzz" ><NavItem>Buzz</NavItem></Link>
                        <Link to="/dashboard/LostAndFound" ><NavItem>Lost & Found</NavItem></Link>
                        <Link to="/dashboard/complaint" ><NavItem>Complaint</NavItem></Link>
                        {
                            user.role=='Admin'?
                                <Link to="/dashboard/resolve_complaint" ><NavItem>Resolved Complaint</NavItem></Link>
                                :<Link to="/dashboard/viewComplaint" ><NavItem>View Complaint</NavItem></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default MobileView;