import React, { Component } from "react";
import "../App.css";
import banner from "../images/banner.png";
import LoginRegister from "./LoginRegister";
import {
  Button,
  Form,
  Divider,
  Container,
  Header,
  Sidebar,
  Menu,
  Segment,
  Image
} from "semantic-ui-react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Glasses from "./Glasses.jsx";
import SideNav from "./Sidebar.jsx";
import Create  from "./createListing.jsx";

class App extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <React.Fragment>
        <Image src={banner} fluid />
        <Menu size="huge">
          <Menu.Menu position="right" inverted widths={4}>
            <Menu.Item as={Link} to={"/"} onClick={this.handleItemClick}>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to={"/glasses"} onClick={this.handleItemClick}>
              Browse
            </Menu.Item>
            <Menu.Item as={Link} to={"/createListing"} onClick={this.handleItemClick}>
              Donate
            </Menu.Item>
            <Menu.Item as={Link} to={"/"} onClick={this.handleItemClick}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/glasses" component={Glasses} />
          <Route path="/createListing" component={Create} />
        </Switch>
      </React.Fragment>
    );
  }
}



export default App;
