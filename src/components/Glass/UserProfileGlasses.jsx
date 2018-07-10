import React, { Component } from 'react';
import '../../App.css';
import '../App.jsx';
import { backendurl } from '../../config';
// import GlassesListing from './GlassesListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfileGlassesListing from './UserProfileGlassesListing';
import UserProfileFramesListing from '../Frame/UserProfileFramesListing';
class ProfileGlasses extends Component {

    state = {
        allGlasses: [],
        profileGlasses: [],
        allFrames: [],
        profileFrames: []
    };

    userListings = [];
    framesListings = [];

    componentDidMount() {
        // const { token } = this.props;
        let glassesMethod = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }

        let framesMethod = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }


        fetch(backendurl + '/glasses', glassesMethod)
        .then(response => response.json())
        .then(data => {
            console.log('profileGlasses fetch', data.data);

            
            this.setState({ allGlasses: data.data });
            for(let i = 0; i < this.state.allGlasses.length; i++) {
                if(this.state.allGlasses[i].userid === this.props.userid) {
                    this.userListings.push(this.state.allGlasses[i]);
                }
            };
            this.setState({ profileGlasses: this.userListings })
            console.log(this.state.profileGlasses);
        })
        .then(fetch(backendurl + '/frames', framesMethod)
        .then(response => response.json())
        .then(data2 => {
            console.log('profileFrames fetch', data2.data);

            
            this.setState({ allFrames: data2.data });
            for(let i = 0; i < this.state.allFrames.length; i++) {
                if(this.state.allFrames[i].userid === this.props.userid) {
                    this.framesListings.push(this.state.allFrames[i]);
                }
            };
            this.setState({ profileFrames: this.framesListings })
            console.log(this.state.profileFrames);
        })
    )

        
        
    };
    render() {
        const { profileGlasses, profileFrames } = this.state;
        return (
            <React.Fragment>
                <h1>Your Glasses Listings</h1>
                <UserProfileGlassesListing glasses={profileGlasses} />
                <h1>Your Frames Listings</h1>
                <UserProfileFramesListing frames={profileFrames} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userid: state.userReducer.userid
    }
}

export default withRouter(connect(mapStateToProps)(ProfileGlasses));