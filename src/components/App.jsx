import React, { Component } from "react";
import "../App.css";

import LoginRegister from "./User/LoginRegister";
import SingleGlass from "./Glass/SingleGlass";
import UpdateGlass from './Glass/UpdateGlass';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import CreateGlass  from "./Glass/CreateGlass";
import Frames from "./Frame/Frames";
import CreateFrame from "./Frame/CreateFrame";
import Glasses from "./Glass/Glasses";
import User from "./User/User";
import NavBar from "./NavBar";
import SingleFrame from './Frame/SingleFrame';
import ProfileGlasses from "./Glass/UserProfileGlasses";
import ProfileSingleGlass from './Glass/ProfileSingleGlass';
import ProfileSingleFrame from './Frame/ProfileSingleFrame';


class App extends Component {
  
  render() {

    return (
      <React.Fragment>   
        <NavBar/>   
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/glasses/:glassesid" component={SingleGlass}/>
          <Route path="/glasses" component={Glasses} />
          <Route path="/createGlass/:glassesid" component={UpdateGlass} />
          <Route path="/createGlass" component={CreateGlass} />
          <Route path="/updateFrame/:glassesid" component={UpdateGlass} />
          <Route path="/createFrame" component={CreateFrame} />
          <Route path="/frames/:frameid" component={SingleFrame} />
          <Route path="/frames" component={Frames} />
          <Route path="/user" component={User} />
          <Route path="/allposts/:glassesid" component={ProfileSingleGlass} />
          <Route path="/allposts" component={ProfileGlasses} />
          <Route path="/allframes/:framesid" component={ProfileSingleFrame} />
          
        </Switch>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      token : state.userReducer.token,
      user : state.userReducer
  }
}
export default withRouter(connect(mapStateToProps)(App));
