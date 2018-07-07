import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
import { backendurl } from './config';
// import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import GlassesListing from './GlassesListing';


class Glasses extends Component {
    state = {
        glasses: [],
      };
      componentDidMount() {
        fetch(backendurl+"/glasses")
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

export default Glasses;