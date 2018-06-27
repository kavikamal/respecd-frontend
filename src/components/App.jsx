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
import { Switch, Route, Link } from "react-router-dom";
import Glasses from "./Glasses.jsx";
import SideNav from "./Sidebar.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Image src={banner} fluid/>
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/">
                {/* <Button size="large" color="yellow"> */}
                  Home
                {/* </Button> */}
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/glasses">
                {/* <Button size="large" color="blue"> */}
                  Browse
                {/* </Button> */}
              </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to="/">
              {/* <Button size="large" color="green"> */}
                Donate
              {/* </Button> */}
            </Link>
            </Menu.Item>
            <Menu.Item onClick={this.handleItemClick}>
            <Link to="/">
            {/* <Button size="large" color="red"> */}
              Logout
            {/* </Button> */}
            </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/glasses" component={Glasses} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
