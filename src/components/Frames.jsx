import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
import backendurl from './config';
// import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import FramesListing from './FramesListing.jsx';


class Frames extends Component {
    state = {
        frames: [],
      };
      componentDidMount() {
        fetch(backendurl+"/frames")
          .then(response => response.json())
          .then(data => {
            console.log("frames fetch", data.data);
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

export default Frames;