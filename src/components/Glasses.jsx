import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
import { Button, Form, Divider, Container, Header, Sidebar, Segment, Menu, Icon, Image } from 'semantic-ui-react';
import Listing from './Listing.jsx';
import SideNav from './Sidebar.jsx';

class Glasses extends Component {

    
    render() {
        
        return (
            <React.Fragment>
                
                <SideNav />
        
            </React.Fragment>
        )
    }
}

export default Glasses;