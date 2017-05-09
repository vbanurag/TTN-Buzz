/**
 * Created by anurag on 7/5/17.
 */
import React, { Component } from 'react';

class  ProfileCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const user = this.props.props.props.userReducer.users;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card hovercard">
                            <div className="cardheader">
                            </div>
                            <div className="avatar">
                                <img alt="" src={ user.imagUrl }/>
                            </div>
                            <div className="info">
                                <div className="title">
                                    <a target="_blank" href="">{user.displayName}</a>
                                </div>
                                <div className="desc">Passionate designer</div>
                            </div>
                            <div className="bottom">
                                <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="btn btn-danger btn-sm" rel="publisher"
                                   href="https://plus.google.com/+ahmshahnuralam">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default ProfileCard;