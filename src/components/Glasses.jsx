import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import Listing from './Listing.jsx';


class Glasses extends Component {

    
    render() {
        
        return (
            <React.Fragment>
               
        
                <Listing />
                <Listing />
                <Listing />
                
        
            </React.Fragment>
        )
    }
}

export default Glasses;