import React, { Component } from 'react';
import '../../App.css';
import '../App.jsx';
import { backendurl } from '../../config';
// import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import GlassesListing from './GlassesListing';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Glasses extends Component {
    state = {
        glasses: [],
      };
      componentDidMount() {
        const { token } = this.props;
        let method = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        fetch(backendurl+"/glasses", method)
        .then(response => response.json())
        .then(data => {      
          console.log("glasses fetch", data.data);
          this.setState({ glasses: data.data });
        })
     
      };
    render() {
        const { glasses } = this.state;
        return (
            <React.Fragment>
                <GlassesListing glasses={glasses}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Inside the glasses +++++ state",state.glassesReducer);
    return {
        token:state.userReducer.token,
        glasses:state.glassesReducer
    }
}
export default withRouter(connect(mapStateToProps)(Glasses));