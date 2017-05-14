/**
 * Created by anurag on 14/5/17.
 */
import React, { Component } from 'react';
import './profile.css';

class ProfileCard extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{

            }
        }
    }
    componentWillMount(){
        let user;
        if(this.props.props.match.path == '/dashboard/profile/:email'){
            console.log('user hit')
            user = this.props.props.props.props.userReducer.users;
            this.setState({user:user});
        }else if(this.props.props.match.path == '/dashboard/profile/user/:email'){
            const postUser = this.props.props.props.props.postReducer.posts
            user= postUser.filter((item) => {
                return item.postedBy.email == this.props.props.match.params.email
            })
            user = user[0].postedBy;
            this.setState({user:user});
        }
    }
    render() {
        const { user } = this.state;
        return(
            <div className="profile-container">
                <div className="profile-display">
                    <div className="col-sm-2 col-md-2">
                        <img src={ user.imagUrl }
                             alt="" className="img-rounded img-responsive" />
                    </div>
                    <div className="col-sm-4 col-md-4">
                        <blockquote>
                            <p>{ user.displayName }</p> <small>
                            <cite title="Source Title">Delhi, India
                                <i className="glyphicon glyphicon-map-marker">
                                </i></cite></small>
                        </blockquote>
                        <p> <i className="glyphicon glyphicon-envelope"></i> { user.email }
                            <br/> </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileCard;