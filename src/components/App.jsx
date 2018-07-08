import React, { Component } from "react";
import "../App.css";
import banner from "../images/banner.png";
import LoginRegister from "./LoginRegister";
import {
  Menu,
  Dropdown,
  Image, 
  Icon
} from "semantic-ui-react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import CreateGlass  from "./CreateGlass";
import Frames from "./Frames";
import CreateFrame from "./CreateFrame";
import Glasses from "./Glasses";
import SingleGlass from "./SingleGlass";

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
            <Menu.Item id="home" as={Link} to={"/"} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name="home" />Home
            </Menu.Item>
            
            <Dropdown item  icon="newspaper" text='Browse '>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/glasses"} name="glasses"  active={activeItem === 'glasses'} onClick={this.handleItemClick} text='Glasses' />
              <Dropdown.Item as={Link} to={"/frames"} name="frames" active={activeItem === 'frames'} onClick={this.handleItemClick} text='Frames' />
              </Dropdown.Menu>  
            </Dropdown>

             <Dropdown item  icon="add" text='Donate '>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/createGlass"} name="glasses"  active={activeItem === 'glasses'} onClick={this.handleItemClick} text='Glasses' />
              <Dropdown.Item as={Link} to={"/createFrame"} name="frames" active={activeItem === 'frames'} onClick={this.handleItemClick} text='Frames' />
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item  name='logout' active={activeItem === 'logout'} onClick={this.handleLogout}>
            <Icon name="sign out"/>Logout
            </Menu.Item>
        </Menu>
       
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/glasses/:glassesid" component={SingleGlass}/>
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
