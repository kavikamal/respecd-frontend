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
        <Menu size="huge" color="teal" widths={4} pointing secondary>
            <Menu.Item as={Link} to={"/"} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name="home" />Home
            </Menu.Item>
            <Menu.Item as={Link} to={"/glasses"} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
              <Icon name="newspaper"/>Browse
            </Menu.Item>
            <Menu.Item as={Link} to={"/createGlass"} name='donate' active={activeItem === 'donate'} onClick={this.handleItemClick}>
            <Icon name="add"/>Donate
            </Menu.Item>
            <Menu.Item  name='logout' active={activeItem === 'logout'} onClick={this.handleLogout}>
            <Icon name="sign out"/>Logout
            </Menu.Item>
        </Menu>
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
