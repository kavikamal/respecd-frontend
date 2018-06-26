import React, { Component } from 'react';
import '../App.css';
import './App.jsx';
import { Button, Form, Divider, Container, Header, Sidebar } from 'semantic-ui-react';

class Glasses extends Component {
    render() {
        return (
            <React.Fragment>

                <section className="glassesList">
                    <ul>
                        <h1> stuff </h1>
                        {/* This section will map through the glasses listings in the database and create a new individual glasses listing component (</Listing) for each listing */}
                    </ul>
                </section>

            </React.Fragment>
        )
    }
}

export default Glasses;