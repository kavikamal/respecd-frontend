import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
// import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import Listing from './Listing.jsx';


class Glasses extends Component {
    state = {
        glasses: [],
      };
      componentDidMount() {
        fetch("https://re-specd-backend.herokuapp.com/glasses")
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
                <Listing glasses={glasses}/>
            </React.Fragment>
        )
    }
}

export default Glasses;