import React, { Component } from "react";
import "../App.css";
import banner from "../images/banner.png";
import LoginRegister from "./LoginRegister";
import {
  Menu,
  Image, 
  Icon
} from "semantic-ui-react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Glasses from "./Glasses.jsx";
import CreateGlass  from "./CreateGlass";
import Frames from "./Frames";
import CreateFrame from "./CreateFrame";

class App extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = (e, { name }) => {
    this.setState({ activeItem: name })
    alert("So Long!")
    this.props.history.push("/")
    this.setState({ activeItem: "home" })
  }
  render() {
    const { activeItem } = this.state
    
    return (
      <React.Fragment>
        <div>
        <Image src={banner} fluid />
        </div>

        <div id="menuDiv">
        <Menu size="huge" color="teal" widths={4} pointing secondary>
            <Menu.Item id="home" as={Link} to={"/"} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name="home" />Home
            </Menu.Item>

            
            
            <div className="dropdown">
              <Icon name="newspaper"/>Browse
              <Menu.Item className="dropbtn" name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
              {/* <Icon name="newspaper"/>Browse */}
                <div className="dropdown-content">
                  <a href="/glasses">Glasses</a>
                  <a href="/frames">Frames</a>
                </div> 
              </Menu.Item>
            </div>

            <div className="dropdown">
            <Icon name="add"/>Donate
              <Menu.Item className="dropbtn" name='donate' active={activeItem === 'donate'} onClick={this.handleItemClick}>
              {/* <Icon name="add"/>Donate */}
                <div className="dropdown-content">
                  <a href="/createGlass">Glasses</a>
                  <a href="/createFrame">Frames</a>
                </div>
              </Menu.Item>
            </div>

            <Menu.Item  id="logout" name='logout' active={activeItem === 'logout'} onClick={this.handleLogout}>
            <Icon name="sign out"/>Logout
            </Menu.Item>
        </Menu>
        </div>
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/glasses" component={Glasses} />
          <Route path="/createGlass" component={CreateGlass} />
          <Route path="/frames" component={Frames} />
          <Route path="/createFrame" component={CreateFrame} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App));
