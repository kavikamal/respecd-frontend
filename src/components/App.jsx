import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button, Form, Divider, Container, Header, Sidebar } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
import Glasses from './Glasses.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>

      <div className="App">
          Hello This is the home page for re-spec'd  
      </div>

      <div id="glassesButtons">
        <Button size='large' color='green'>Donate Glasses</Button>
        <Link to='/glasses'><Button size='large' color='blue'>Browse Glasses</Button></Link>
      </div>

      <Switch>

        <Route exact path='/glasses' component={Glasses}/>
        
      </Switch>

      </React.Fragment>
    )
  }
}

export default App;
