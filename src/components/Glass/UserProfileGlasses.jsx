import React, { Component } from 'react';
import '../../App.css';
import '../App.jsx';
import { backendurl } from '../../config';
import GlassesListing from './GlassesListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfileGlassesListing from './UserProfileGlassesListing';

class ProfileGlasses extends Component {

    state = {
        allGlasses: [],
        profileGlasses: []
    };

    userListings = [];

    componentDidMount() {
        const { token } = this.props;
        let method = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }
        fetch(backendurl + '/glasses', method)
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
        
    };
    render() {
        const { profileGlasses } = this.state;
        return (
            <React.Fragment>
                <UserProfileGlassesListing glasses={this.state.profileGlasses} />
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