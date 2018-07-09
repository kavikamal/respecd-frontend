import React, { Component } from 'react';
import { backendurl } from '../../config';
import FramesListing from './FramesListing.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Frames extends Component {
    state = {
        frames: [],
      };
      componentDidMount() {
        const { token } = this.props;
        let method = {
            method: 'GET',
            headers: {
                // 'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        fetch(backendurl+"/frames", method)
        .then(response => response.json())
        .then(data => {      
          console.log("Frames fetch", data.data);
          this.setState({ frames: data.data });
          
        })  
        
      };
    render() {
        const { frames } = this.state;
        return (
            <React.Fragment>
                <FramesListing frames={frames}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Inside the glasses +++++ state",state.glassesReducer);
    return {
        token:state.userReducer.token,
        frames:state.framesReducer
    }
}
export default withRouter(connect(mapStateToProps)(Frames));