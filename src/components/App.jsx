import React, { Component } from 'react';
import '../App.css';
import LoginRegister from './LoginRegister';
import { Button, Form, Divider, Container, Header, Sidebar } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
import Glasses from './Glasses.jsx';
import SideNav from './Sidebar.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      
      <div className="App">
          Hello This is the home page for re-spec'd  
      </div>

      <Switch>
        <Route exact path="/" component={LoginRegister}/>
        <Route path='/glasses' component={Glasses}/>
        
      </Switch>

      </React.Fragment>
    )

  }
}

export default App;
