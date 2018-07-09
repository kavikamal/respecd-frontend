import React, { Component } from "react";
import "../App.css";
import { backendurl } from './config';
// import banner from "../images/banner.png";
import {
  Header,
  Input,
  Rating,
  Segment,
  Container,
  Form
} from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { glassesCreate } from "../actions/glassesAction.js";

// method="POST"
//           encType="multipart/form-data"

class CreateGlass extends Component {
  state = {
    glassesObject: {
      title: "",
      leftsphere: 0,
      rightsphere: 0,
      leftcylinder: 0,
      rightcylinder: 0,
      leftaxis: 0,
      rightaxis: 0,
      add: 0,
      condition: 0,
      description: "",
      city: "",
      pic: "",
      token: ""
    }
  };

  handleChange = event => {
    const field = event.target.name;
    const glassesObject = this.state.glassesObject;
    glassesObject[field] = event.target.value;
    this.setState({
      glassesObject: glassesObject
    });
    console.log(this.state);
  };

  imageChange = evt => {
    this.glassesObject.pic = evt.target.files[0];
    console.log(this.glassesObject);
  };

  createGlass = (evt) => {
    evt.preventDefault();
    fetch(backendurl+"/glasses",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + this.props.token 
        },
        body: JSON.stringify({
          title: this.state.glassesObject.title,
          leftsphere: this.state.glassesObject.leftsphere,
          rightsphere: this.state.glassesObject.rightsphere,
          leftcylinder: this.state.glassesObject.leftcylinder,
          rightcylinder: this.state.glassesObject.rightcylinder,
          rightaxis: this.state.glassesObject.rightaxis,
          leftaxis: this.state.glassesObject.leftaxis,
          add: this.state.glassesObject.add,
          rating: this.state.glassesObject.condition,
          description: this.state.glassesObject.description,
          location: this.state.glassesObject.city,
          pic: this.state.glassesObject.pic,
          userid: this.props.userid
        })
      }
    );
    this.props.dispatch(glassesCreate(this.state.glassesObject));
  };

  render() {
    return (
      <React.Fragment>
        <Form
          action= {backendurl+"/glasses"} /*"https://re-specd-backend.herokuapp.com/glasses"*/
          method="POST"
          encType="multipart/form-data"
        >
          <Container>
            <div className="container">
              <div className="donate">
                <Segment>
                  <Header as="h1">
                    Have old glasses you'd like to donate? Create a Listing
                  </Header>
                </Segment>

                <Segment>
                  Listing Title{" "}
                  <Input onChange={this.handleChange} name="title" />
                </Segment>

                <Segment>
                  Prescription <br />
                  <br />
                  L Sphere<select
                    onChange={this.handleChange}
                    default={0.0}
                    className="rxLeft1"
                    name="leftsphere"
                  >
                    <option value="-20.00">-20.00</option>
                    <option value="-19.75">-19.75</option>
                    <option value="-19.50">-19.50</option>
                    <option value="-19.25">-19.25</option>
                    <option value="-19.00">-19.00</option>
                    <option value="-18.75">-18.75</option>
                    <option value="-18.50">-18.50</option>
                    <option value="-18.25">-18.25</option>
                    <option value="-18.00">-18.00</option>
                    <option value="-17.75">-17.75</option>
                    <option value="-17.50">-17.50</option>
                    <option value="-17.25">-17.25</option>
                    <option value="-17.00">-17.00</option>
                    <option value="-16.75">-16.75</option>
                    <option value="-16.50">-16.50</option>
                    <option value="-16.25">-16.25</option>
                    <option value="-16.00">-16.00</option>
                    <option value="-15.75">-15.75</option>
                    <option value="-15.50">-15.50</option>
                    <option value="-15.25">-15.25</option>
                    <option value="-15.00">-15.00</option>
                    <option value="-14.75">-14.75</option>
                    <option value="-14.50">-14.50</option>
                    <option value="-14.25">-14.25</option>
                    <option value="-14.00">-14.00</option>
                    <option value="-13.75">-13.75</option>
                    <option value="-13.50">-13.50</option>
                    <option value="-13.25">-13.25</option>
                    <option value="-13.00">-13.00</option>
                    <option value="-12.75">-12.75</option>
                    <option value="-12.50">-12.50</option>
                    <option value="-12.25">-12.25</option>
                    <option value="-12.00">-12.00</option>
                    <option value="-11.75">-11.75</option>
                    <option value="-11.50">-11.50</option>
                    <option value="-11.25">-11.25</option>
                    <option value="-11.00">-11.00</option>
                    <option value="-10.75">-10.75</option>
                    <option value="-10.50">-10.50</option>
                    <option value="-10.25">-10.25</option>
                    <option value="-10.00">-10.00</option>
                    <option value="-9.75">-9.75</option>
                    <option value="-9.50">-9.50</option>
                    <option value="-9.25">-9.25</option>
                    <option value="-9.00">-9.00</option>
                    <option value="-8.75">-8.75</option>
                    <option value="-8.50">-8.50</option>
                    <option value="-8.25">-8.25</option>
                    <option value="-8.00">-8.00</option>
                    <option value="-7.75">-7.75</option>
                    <option value="-7.50">-7.50</option>
                    <option value="-7.25">-7.25</option>
                    <option value="-7.00">-7.00</option>
                    <option value="-6.75">-6.75</option>
                    <option value="-6.50">-6.50</option>
                    <option value="-6.25">-6.25</option>
                    <option value="-6.00">-6.00</option>
                    <option value="-5.75">-5.75</option>
                    <option value="-5.50">-5.50</option>
                    <option value="-5.25">-5.25</option>
                    <option value="-5.00">-5.00</option>
                    <option value="-4.75">-4.75</option>
                    <option value="-4.50">-4.50</option>
                    <option value="-4.25">-4.25</option>
                    <option value="-4.00">-4.00</option>
                    <option value="-3.75">-3.75</option>
                    <option value="-3.50">-3.50</option>
                    <option value="-3.25">-3.25</option>
                    <option value="-3.00">-3.00</option>
                    <option value="-2.75">-2.75</option>
                    <option value="-2.50">-2.50</option>
                    <option value="-2.25">-2.25</option>
                    <option value="-2.00">-2.00</option>
                    <option value="-1.75">-1.75</option>
                    <option value="-1.50">-1.50</option>
                    <option value="-1.25">-1.25</option>
                    <option value="-1.00">-1.00</option>
                    <option value="-0.75">-0.75</option>
                    <option value="-0.50">-0.50</option>
                    <option value="-0.25">-0.25</option>
                    <option selected="selected" value="0.00">
                      0.00
                    </option>
                    <option value="+0.25">+0.25</option>
                    <option value="+0.50">+0.50</option>
                    <option value="+0.75">+0.75</option>
                    <option value="+1.00">+1.00</option>
                    <option value="+1.25">+1.25</option>
                    <option value="+1.50">+1.50</option>
                    <option value="+1.75">+1.75</option>
                    <option value="+2.00">+2.00</option>
                    <option value="+2.25">+2.25</option>
                    <option value="+2.50">+2.50</option>
                    <option value="+2.75">+2.75</option>
                    <option value="+3.00">+3.00</option>
                    <option value="+3.25">+3.25</option>
                    <option value="+3.50">+3.50</option>
                    <option value="+3.75">+3.75</option>
                    <option value="+4.00">+4.00</option>
                    <option value="+4.25">+4.25</option>
                    <option value="+4.50">+4.50</option>
                    <option value="+4.75">+4.75</option>
                    <option value="+5.00">+5.00</option>
                    <option value="+5.25">+5.25</option>
                    <option value="+5.50">+5.50</option>
                    <option value="+5.75">+5.75</option>
                    <option value="+6.00">+6.00</option>
                    <option value="+6.25">+6.25</option>
                    <option value="+6.50">+6.50</option>
                    <option value="+6.75">+6.75</option>
                    <option value="+7.00">+7.00</option>
                    <option value="+7.25">+7.25</option>
                    <option value="+7.50">+7.50</option>
                    <option value="+7.75">+7.75</option>
                    <option value="+8.00">+8.00</option>
                    <option value="+8.25">+8.25</option>
                    <option value="+8.50">+8.50</option>
                    <option value="+8.75">+8.75</option>
                    <option value="+9.00">+9.00</option>
                    <option value="+9.25">+9.25</option>
                    <option value="+9.50">+9.50</option>
                    <option value="+9.75">+9.75</option>
                    <option value="+10.00">+10.00</option>
                    <option value="+10.25">+10.25</option>
                    <option value="+10.50">+10.50</option>
                    <option value="+10.75">+10.75</option>
                    <option value="+11.00">+11.00</option>
                    <option value="+11.25">+11.25</option>
                    <option value="+11.50">+11.50</option>
                    <option value="+11.75">+11.75</option>
                    <option value="+12.00">+12.00</option>
                    <option value="+12.25">+12.25</option>
                    <option value="+12.50">+12.50</option>
                    <option value="+12.75">+12.75</option>
                    <option value="+13.00">+13.00</option>
                    <option value="+13.25">+13.25</option>
                    <option value="+13.50">+13.50</option>
                    <option value="+13.75">+13.75</option>
                    <option value="+14.00">+14.00</option>
                    <option value="+14.25">+14.25</option>
                    <option value="+14.50">+14.50</option>
                    <option value="+14.75">+14.75</option>
                    <option value="+15.00">+15.00</option>
                    <option value="+15.25">+15.25</option>
                    <option value="+15.50">+15.50</option>
                    <option value="+15.75">+15.75</option>
                    <option value="+16.00">+16.00</option>
                    <option value="+16.25">+16.25</option>
                    <option value="+16.50">+16.50</option>
                    <option value="+16.75">+16.75</option>
                    <option value="+17.00">+17.00</option>
                    <option value="+17.25">+17.25</option>
                    <option value="+17.50">+17.50</option>
                    <option value="+17.75">+17.75</option>
                    <option value="+18.00">+18.00</option>
                    <option value="+18.25">+18.25</option>
                    <option value="+18.50">+18.50</option>
                    <option value="+18.75">+18.75</option>
                    <option value="+19.00">+19.00</option>
                    <option value="+19.25">+19.25</option>
                    <option value="+19.50">+19.50</option>
                    <option value="+19.75">+19.75</option>
                    <option value="+20.00">+20.00</option>
                  </select>
                  R Sphere<select
                    onChange={this.handleChange}
                    className="rxLeft2"
                    name="rightsphere"
                  >
                    <option value="-20.00">-20.00</option>
                    <option value="-19.75">-19.75</option>
                    <option value="-19.50">-19.50</option>
                    <option value="-19.25">-19.25</option>
                    <option value="-19.00">-19.00</option>
                    <option value="-18.75">-18.75</option>
                    <option value="-18.50">-18.50</option>
                    <option value="-18.25">-18.25</option>
                    <option value="-18.00">-18.00</option>
                    <option value="-17.75">-17.75</option>
                    <option value="-17.50">-17.50</option>
                    <option value="-17.25">-17.25</option>
                    <option value="-17.00">-17.00</option>
                    <option value="-16.75">-16.75</option>
                    <option value="-16.50">-16.50</option>
                    <option value="-16.25">-16.25</option>
                    <option value="-16.00">-16.00</option>
                    <option value="-15.75">-15.75</option>
                    <option value="-15.50">-15.50</option>
                    <option value="-15.25">-15.25</option>
                    <option value="-15.00">-15.00</option>
                    <option value="-14.75">-14.75</option>
                    <option value="-14.50">-14.50</option>
                    <option value="-14.25">-14.25</option>
                    <option value="-14.00">-14.00</option>
                    <option value="-13.75">-13.75</option>
                    <option value="-13.50">-13.50</option>
                    <option value="-13.25">-13.25</option>
                    <option value="-13.00">-13.00</option>
                    <option value="-12.75">-12.75</option>
                    <option value="-12.50">-12.50</option>
                    <option value="-12.25">-12.25</option>
                    <option value="-12.00">-12.00</option>
                    <option value="-11.75">-11.75</option>
                    <option value="-11.50">-11.50</option>
                    <option value="-11.25">-11.25</option>
                    <option value="-11.00">-11.00</option>
                    <option value="-10.75">-10.75</option>
                    <option value="-10.50">-10.50</option>
                    <option value="-10.25">-10.25</option>
                    <option value="-10.00">-10.00</option>
                    <option value="-9.75">-9.75</option>
                    <option value="-9.50">-9.50</option>
                    <option value="-9.25">-9.25</option>
                    <option value="-9.00">-9.00</option>
                    <option value="-8.75">-8.75</option>
                    <option value="-8.50">-8.50</option>
                    <option value="-8.25">-8.25</option>
                    <option value="-8.00">-8.00</option>
                    <option value="-7.75">-7.75</option>
                    <option value="-7.50">-7.50</option>
                    <option value="-7.25">-7.25</option>
                    <option value="-7.00">-7.00</option>
                    <option value="-6.75">-6.75</option>
                    <option value="-6.50">-6.50</option>
                    <option value="-6.25">-6.25</option>
                    <option value="-6.00">-6.00</option>
                    <option value="-5.75">-5.75</option>
                    <option value="-5.50">-5.50</option>
                    <option value="-5.25">-5.25</option>
                    <option value="-5.00">-5.00</option>
                    <option value="-4.75">-4.75</option>
                    <option value="-4.50">-4.50</option>
                    <option value="-4.25">-4.25</option>
                    <option value="-4.00">-4.00</option>
                    <option value="-3.75">-3.75</option>
                    <option value="-3.50">-3.50</option>
                    <option value="-3.25">-3.25</option>
                    <option value="-3.00">-3.00</option>
                    <option value="-2.75">-2.75</option>
                    <option value="-2.50">-2.50</option>
                    <option value="-2.25">-2.25</option>
                    <option value="-2.00">-2.00</option>
                    <option value="-1.75">-1.75</option>
                    <option value="-1.50">-1.50</option>
                    <option value="-1.25">-1.25</option>
                    <option value="-1.00">-1.00</option>
                    <option value="-0.75">-0.75</option>
                    <option value="-0.50">-0.50</option>
                    <option value="-0.25">-0.25</option>
                    <option selected="selected" value="0.00">
                      0.00
                    </option>
                    <option value="+0.25">+0.25</option>
                    <option value="+0.50">+0.50</option>
                    <option value="+0.75">+0.75</option>
                    <option value="+1.00">+1.00</option>
                    <option value="+1.25">+1.25</option>
                    <option value="+1.50">+1.50</option>
                    <option value="+1.75">+1.75</option>
                    <option value="+2.00">+2.00</option>
                    <option value="+2.25">+2.25</option>
                    <option value="+2.50">+2.50</option>
                    <option value="+2.75">+2.75</option>
                    <option value="+3.00">+3.00</option>
                    <option value="+3.25">+3.25</option>
                    <option value="+3.50">+3.50</option>
                    <option value="+3.75">+3.75</option>
                    <option value="+4.00">+4.00</option>
                    <option value="+4.25">+4.25</option>
                    <option value="+4.50">+4.50</option>
                    <option value="+4.75">+4.75</option>
                    <option value="+5.00">+5.00</option>
                    <option value="+5.25">+5.25</option>
                    <option value="+5.50">+5.50</option>
                    <option value="+5.75">+5.75</option>
                    <option value="+6.00">+6.00</option>
                    <option value="+6.25">+6.25</option>
                    <option value="+6.50">+6.50</option>
                    <option value="+6.75">+6.75</option>
                    <option value="+7.00">+7.00</option>
                    <option value="+7.25">+7.25</option>
                    <option value="+7.50">+7.50</option>
                    <option value="+7.75">+7.75</option>
                    <option value="+8.00">+8.00</option>
                    <option value="+8.25">+8.25</option>
                    <option value="+8.50">+8.50</option>
                    <option value="+8.75">+8.75</option>
                    <option value="+9.00">+9.00</option>
                    <option value="+9.25">+9.25</option>
                    <option value="+9.50">+9.50</option>
                    <option value="+9.75">+9.75</option>
                    <option value="+10.00">+10.00</option>
                    <option value="+10.25">+10.25</option>
                    <option value="+10.50">+10.50</option>
                    <option value="+10.75">+10.75</option>
                    <option value="+11.00">+11.00</option>
                    <option value="+11.25">+11.25</option>
                    <option value="+11.50">+11.50</option>
                    <option value="+11.75">+11.75</option>
                    <option value="+12.00">+12.00</option>
                    <option value="+12.25">+12.25</option>
                    <option value="+12.50">+12.50</option>
                    <option value="+12.75">+12.75</option>
                    <option value="+13.00">+13.00</option>
                    <option value="+13.25">+13.25</option>
                    <option value="+13.50">+13.50</option>
                    <option value="+13.75">+13.75</option>
                    <option value="+14.00">+14.00</option>
                    <option value="+14.25">+14.25</option>
                    <option value="+14.50">+14.50</option>
                    <option value="+14.75">+14.75</option>
                    <option value="+15.00">+15.00</option>
                    <option value="+15.25">+15.25</option>
                    <option value="+15.50">+15.50</option>
                    <option value="+15.75">+15.75</option>
                    <option value="+16.00">+16.00</option>
                    <option value="+16.25">+16.25</option>
                    <option value="+16.50">+16.50</option>
                    <option value="+16.75">+16.75</option>
                    <option value="+17.00">+17.00</option>
                    <option value="+17.25">+17.25</option>
                    <option value="+17.50">+17.50</option>
                    <option value="+17.75">+17.75</option>
                    <option value="+18.00">+18.00</option>
                    <option value="+18.25">+18.25</option>
                    <option value="+18.50">+18.50</option>
                    <option value="+18.75">+18.75</option>
                    <option value="+19.00">+19.00</option>
                    <option value="+19.25">+19.25</option>
                    <option value="+19.50">+19.50</option>
                    <option value="+19.75">+19.75</option>
                    <option value="+20.00">+20.00</option>
                  </select>
                  L Cylinder<select
                    onChange={this.handleChange}
                    id="leftCyl"
                    name="leftcylinder"
                  >
                    <option value="-20.00">-20.00</option>
                    <option value="-19.75">-19.75</option>
                    <option value="-19.50">-19.50</option>
                    <option value="-19.25">-19.25</option>
                    <option value="-19.00">-19.00</option>
                    <option value="-18.75">-18.75</option>
                    <option value="-18.50">-18.50</option>
                    <option value="-18.25">-18.25</option>
                    <option value="-18.00">-18.00</option>
                    <option value="-17.75">-17.75</option>
                    <option value="-17.50">-17.50</option>
                    <option value="-17.25">-17.25</option>
                    <option value="-17.00">-17.00</option>
                    <option value="-16.75">-16.75</option>
                    <option value="-16.50">-16.50</option>
                    <option value="-16.25">-16.25</option>
                    <option value="-16.00">-16.00</option>
                    <option value="-15.75">-15.75</option>
                    <option value="-15.50">-15.50</option>
                    <option value="-15.25">-15.25</option>
                    <option value="-15.00">-15.00</option>
                    <option value="-14.75">-14.75</option>
                    <option value="-14.50">-14.50</option>
                    <option value="-14.25">-14.25</option>
                    <option value="-14.00">-14.00</option>
                    <option value="-13.75">-13.75</option>
                    <option value="-13.50">-13.50</option>
                    <option value="-13.25">-13.25</option>
                    <option value="-13.00">-13.00</option>
                    <option value="-12.75">-12.75</option>
                    <option value="-12.50">-12.50</option>
                    <option value="-12.25">-12.25</option>
                    <option value="-12.00">-12.00</option>
                    <option value="-11.75">-11.75</option>
                    <option value="-11.50">-11.50</option>
                    <option value="-11.25">-11.25</option>
                    <option value="-11.00">-11.00</option>
                    <option value="-10.75">-10.75</option>
                    <option value="-10.50">-10.50</option>
                    <option value="-10.25">-10.25</option>
                    <option value="-10.00">-10.00</option>
                    <option value="-9.75">-9.75</option>
                    <option value="-9.50">-9.50</option>
                    <option value="-9.25">-9.25</option>
                    <option value="-9.00">-9.00</option>
                    <option value="-8.75">-8.75</option>
                    <option value="-8.50">-8.50</option>
                    <option value="-8.25">-8.25</option>
                    <option value="-8.00">-8.00</option>
                    <option value="-7.75">-7.75</option>
                    <option value="-7.50">-7.50</option>
                    <option value="-7.25">-7.25</option>
                    <option value="-7.00">-7.00</option>
                    <option value="-6.75">-6.75</option>
                    <option value="-6.50">-6.50</option>
                    <option value="-6.25">-6.25</option>
                    <option value="-6.00">-6.00</option>
                    <option value="-5.75">-5.75</option>
                    <option value="-5.50">-5.50</option>
                    <option value="-5.25">-5.25</option>
                    <option value="-5.00">-5.00</option>
                    <option value="-4.75">-4.75</option>
                    <option value="-4.50">-4.50</option>
                    <option value="-4.25">-4.25</option>
                    <option value="-4.00">-4.00</option>
                    <option value="-3.75">-3.75</option>
                    <option value="-3.50">-3.50</option>
                    <option value="-3.25">-3.25</option>
                    <option value="-3.00">-3.00</option>
                    <option value="-2.75">-2.75</option>
                    <option value="-2.50">-2.50</option>
                    <option value="-2.25">-2.25</option>
                    <option value="-2.00">-2.00</option>
                    <option value="-1.75">-1.75</option>
                    <option value="-1.50">-1.50</option>
                    <option value="-1.25">-1.25</option>
                    <option value="-1.00">-1.00</option>
                    <option value="-0.75">-0.75</option>
                    <option value="-0.50">-0.50</option>
                    <option value="-0.25">-0.25</option>
                    <option selected="selected" value="0.00">
                      0.00
                    </option>
                    <option value="+0.25">+0.25</option>
                    <option value="+0.50">+0.50</option>
                    <option value="+0.75">+0.75</option>
                    <option value="+1.00">+1.00</option>
                    <option value="+1.25">+1.25</option>
                    <option value="+1.50">+1.50</option>
                    <option value="+1.75">+1.75</option>
                    <option value="+2.00">+2.00</option>
                    <option value="+2.25">+2.25</option>
                    <option value="+2.50">+2.50</option>
                    <option value="+2.75">+2.75</option>
                    <option value="+3.00">+3.00</option>
                    <option value="+3.25">+3.25</option>
                    <option value="+3.50">+3.50</option>
                    <option value="+3.75">+3.75</option>
                    <option value="+4.00">+4.00</option>
                    <option value="+4.25">+4.25</option>
                    <option value="+4.50">+4.50</option>
                    <option value="+4.75">+4.75</option>
                    <option value="+5.00">+5.00</option>
                    <option value="+5.25">+5.25</option>
                    <option value="+5.50">+5.50</option>
                    <option value="+5.75">+5.75</option>
                    <option value="+6.00">+6.00</option>
                    <option value="+6.25">+6.25</option>
                    <option value="+6.50">+6.50</option>
                    <option value="+6.75">+6.75</option>
                    <option value="+7.00">+7.00</option>
                    <option value="+7.25">+7.25</option>
                    <option value="+7.50">+7.50</option>
                    <option value="+7.75">+7.75</option>
                    <option value="+8.00">+8.00</option>
                    <option value="+8.25">+8.25</option>
                    <option value="+8.50">+8.50</option>
                    <option value="+8.75">+8.75</option>
                    <option value="+9.00">+9.00</option>
                    <option value="+9.25">+9.25</option>
                    <option value="+9.50">+9.50</option>
                    <option value="+9.75">+9.75</option>
                    <option value="+10.00">+10.00</option>
                    <option value="+10.25">+10.25</option>
                    <option value="+10.50">+10.50</option>
                    <option value="+10.75">+10.75</option>
                    <option value="+11.00">+11.00</option>
                    <option value="+11.25">+11.25</option>
                    <option value="+11.50">+11.50</option>
                    <option value="+11.75">+11.75</option>
                    <option value="+12.00">+12.00</option>
                    <option value="+12.25">+12.25</option>
                    <option value="+12.50">+12.50</option>
                    <option value="+12.75">+12.75</option>
                    <option value="+13.00">+13.00</option>
                    <option value="+13.25">+13.25</option>
                    <option value="+13.50">+13.50</option>
                    <option value="+13.75">+13.75</option>
                    <option value="+14.00">+14.00</option>
                    <option value="+14.25">+14.25</option>
                    <option value="+14.50">+14.50</option>
                    <option value="+14.75">+14.75</option>
                    <option value="+15.00">+15.00</option>
                    <option value="+15.25">+15.25</option>
                    <option value="+15.50">+15.50</option>
                    <option value="+15.75">+15.75</option>
                    <option value="+16.00">+16.00</option>
                    <option value="+16.25">+16.25</option>
                    <option value="+16.50">+16.50</option>
                    <option value="+16.75">+16.75</option>
                    <option value="+17.00">+17.00</option>
                    <option value="+17.25">+17.25</option>
                    <option value="+17.50">+17.50</option>
                    <option value="+17.75">+17.75</option>
                    <option value="+18.00">+18.00</option>
                    <option value="+18.25">+18.25</option>
                    <option value="+18.50">+18.50</option>
                    <option value="+18.75">+18.75</option>
                    <option value="+19.00">+19.00</option>
                    <option value="+19.25">+19.25</option>
                    <option value="+19.50">+19.50</option>
                    <option value="+19.75">+19.75</option>
                    <option value="+20.00">+20.00</option>
                  </select>
                  R Cylinder<select
                    onChange={this.handleChange}
                    id="rightCyl"
                    name="rightcylinder"
                  >
                    <option value="-20.00">-20.00</option>
                    <option value="-19.75">-19.75</option>
                    <option value="-19.50">-19.50</option>
                    <option value="-19.25">-19.25</option>
                    <option value="-19.00">-19.00</option>
                    <option value="-18.75">-18.75</option>
                    <option value="-18.50">-18.50</option>
                    <option value="-18.25">-18.25</option>
                    <option value="-18.00">-18.00</option>
                    <option value="-17.75">-17.75</option>
                    <option value="-17.50">-17.50</option>
                    <option value="-17.25">-17.25</option>
                    <option value="-17.00">-17.00</option>
                    <option value="-16.75">-16.75</option>
                    <option value="-16.50">-16.50</option>
                    <option value="-16.25">-16.25</option>
                    <option value="-16.00">-16.00</option>
                    <option value="-15.75">-15.75</option>
                    <option value="-15.50">-15.50</option>
                    <option value="-15.25">-15.25</option>
                    <option value="-15.00">-15.00</option>
                    <option value="-14.75">-14.75</option>
                    <option value="-14.50">-14.50</option>
                    <option value="-14.25">-14.25</option>
                    <option value="-14.00">-14.00</option>
                    <option value="-13.75">-13.75</option>
                    <option value="-13.50">-13.50</option>
                    <option value="-13.25">-13.25</option>
                    <option value="-13.00">-13.00</option>
                    <option value="-12.75">-12.75</option>
                    <option value="-12.50">-12.50</option>
                    <option value="-12.25">-12.25</option>
                    <option value="-12.00">-12.00</option>
                    <option value="-11.75">-11.75</option>
                    <option value="-11.50">-11.50</option>
                    <option value="-11.25">-11.25</option>
                    <option value="-11.00">-11.00</option>
                    <option value="-10.75">-10.75</option>
                    <option value="-10.50">-10.50</option>
                    <option value="-10.25">-10.25</option>
                    <option value="-10.00">-10.00</option>
                    <option value="-9.75">-9.75</option>
                    <option value="-9.50">-9.50</option>
                    <option value="-9.25">-9.25</option>
                    <option value="-9.00">-9.00</option>
                    <option value="-8.75">-8.75</option>
                    <option value="-8.50">-8.50</option>
                    <option value="-8.25">-8.25</option>
                    <option value="-8.00">-8.00</option>
                    <option value="-7.75">-7.75</option>
                    <option value="-7.50">-7.50</option>
                    <option value="-7.25">-7.25</option>
                    <option value="-7.00">-7.00</option>
                    <option value="-6.75">-6.75</option>
                    <option value="-6.50">-6.50</option>
                    <option value="-6.25">-6.25</option>
                    <option value="-6.00">-6.00</option>
                    <option value="-5.75">-5.75</option>
                    <option value="-5.50">-5.50</option>
                    <option value="-5.25">-5.25</option>
                    <option value="-5.00">-5.00</option>
                    <option value="-4.75">-4.75</option>
                    <option value="-4.50">-4.50</option>
                    <option value="-4.25">-4.25</option>
                    <option value="-4.00">-4.00</option>
                    <option value="-3.75">-3.75</option>
                    <option value="-3.50">-3.50</option>
                    <option value="-3.25">-3.25</option>
                    <option value="-3.00">-3.00</option>
                    <option value="-2.75">-2.75</option>
                    <option value="-2.50">-2.50</option>
                    <option value="-2.25">-2.25</option>
                    <option value="-2.00">-2.00</option>
                    <option value="-1.75">-1.75</option>
                    <option value="-1.50">-1.50</option>
                    <option value="-1.25">-1.25</option>
                    <option value="-1.00">-1.00</option>
                    <option value="-0.75">-0.75</option>
                    <option value="-0.50">-0.50</option>
                    <option value="-0.25">-0.25</option>
                    <option selected="selected" value="0.00">
                      0.00
                    </option>
                    <option value="+0.25">+0.25</option>
                    <option value="+0.50">+0.50</option>
                    <option value="+0.75">+0.75</option>
                    <option value="+1.00">+1.00</option>
                    <option value="+1.25">+1.25</option>
                    <option value="+1.50">+1.50</option>
                    <option value="+1.75">+1.75</option>
                    <option value="+2.00">+2.00</option>
                    <option value="+2.25">+2.25</option>
                    <option value="+2.50">+2.50</option>
                    <option value="+2.75">+2.75</option>
                    <option value="+3.00">+3.00</option>
                    <option value="+3.25">+3.25</option>
                    <option value="+3.50">+3.50</option>
                    <option value="+3.75">+3.75</option>
                    <option value="+4.00">+4.00</option>
                    <option value="+4.25">+4.25</option>
                    <option value="+4.50">+4.50</option>
                    <option value="+4.75">+4.75</option>
                    <option value="+5.00">+5.00</option>
                    <option value="+5.25">+5.25</option>
                    <option value="+5.50">+5.50</option>
                    <option value="+5.75">+5.75</option>
                    <option value="+6.00">+6.00</option>
                    <option value="+6.25">+6.25</option>
                    <option value="+6.50">+6.50</option>
                    <option value="+6.75">+6.75</option>
                    <option value="+7.00">+7.00</option>
                    <option value="+7.25">+7.25</option>
                    <option value="+7.50">+7.50</option>
                    <option value="+7.75">+7.75</option>
                    <option value="+8.00">+8.00</option>
                    <option value="+8.25">+8.25</option>
                    <option value="+8.50">+8.50</option>
                    <option value="+8.75">+8.75</option>
                    <option value="+9.00">+9.00</option>
                    <option value="+9.25">+9.25</option>
                    <option value="+9.50">+9.50</option>
                    <option value="+9.75">+9.75</option>
                    <option value="+10.00">+10.00</option>
                    <option value="+10.25">+10.25</option>
                    <option value="+10.50">+10.50</option>
                    <option value="+10.75">+10.75</option>
                    <option value="+11.00">+11.00</option>
                    <option value="+11.25">+11.25</option>
                    <option value="+11.50">+11.50</option>
                    <option value="+11.75">+11.75</option>
                    <option value="+12.00">+12.00</option>
                    <option value="+12.25">+12.25</option>
                    <option value="+12.50">+12.50</option>
                    <option value="+12.75">+12.75</option>
                    <option value="+13.00">+13.00</option>
                    <option value="+13.25">+13.25</option>
                    <option value="+13.50">+13.50</option>
                    <option value="+13.75">+13.75</option>
                    <option value="+14.00">+14.00</option>
                    <option value="+14.25">+14.25</option>
                    <option value="+14.50">+14.50</option>
                    <option value="+14.75">+14.75</option>
                    <option value="+15.00">+15.00</option>
                    <option value="+15.25">+15.25</option>
                    <option value="+15.50">+15.50</option>
                    <option value="+15.75">+15.75</option>
                    <option value="+16.00">+16.00</option>
                    <option value="+16.25">+16.25</option>
                    <option value="+16.50">+16.50</option>
                    <option value="+16.75">+16.75</option>
                    <option value="+17.00">+17.00</option>
                    <option value="+17.25">+17.25</option>
                    <option value="+17.50">+17.50</option>
                    <option value="+17.75">+17.75</option>
                    <option value="+18.00">+18.00</option>
                    <option value="+18.25">+18.25</option>
                    <option value="+18.50">+18.50</option>
                    <option value="+18.75">+18.75</option>
                    <option value="+19.00">+19.00</option>
                    <option value="+19.25">+19.25</option>
                    <option value="+19.50">+19.50</option>
                    <option value="+19.75">+19.75</option>
                    <option value="+20.00">+20.00</option>
                  </select>
                  L Axis{" "}
                  <select
                    onChange={this.handleChange}
                    id="axis"
                    name="leftaxis"
                  >
                    <option value="0">0°</option>
                    <option value="1">1°</option>
                    <option value="2">2°</option>
                    <option value="3">3°</option>
                    <option value="4">4°</option>
                    <option value="5">5°</option>
                    <option value="6">6°</option>
                    <option value="7">7°</option>
                    <option value="8">0°</option>
                    <option value="9">9°</option>
                    <option value="10">10°</option>
                    <option value="11">11°</option>
                    <option value="12">12°</option>
                    <option value="13">13°</option>
                    <option value="14">14°</option>
                    <option value="15">15°</option>
                    <option value="16">16°</option>
                    <option value="17">17°</option>
                    <option value="18">18°</option>
                    <option value="19">19°</option>
                    <option value="20">20°</option>
                    <option value="21">21°</option>
                    <option value="22">22°</option>
                    <option value="23">23°</option>
                    <option value="24">24°</option>
                    <option value="25">25°</option>
                    <option value="26">26°</option>
                    <option value="27">27°</option>
                    <option value="28">28°</option>
                    <option value="29">29°</option>
                    <option value="30">30°</option>
                    <option value="31">31°</option>
                    <option value="32">32°</option>
                    <option value="33">33°</option>
                    <option value="34">34°</option>
                    <option value="35">35°</option>
                    <option value="36">36°</option>
                    <option value="37">37°</option>
                    <option value="38">38°</option>
                    <option value="39">39°</option>
                    <option value="40">40°</option>
                    <option value="41">41°</option>
                    <option value="42">42°</option>
                    <option value="43">43°</option>
                    <option value="44">44°</option>
                    <option value="45">45°</option>
                    <option value="46">46°</option>
                    <option value="47">47°</option>
                    <option value="48">48°</option>
                    <option value="49">49°</option>
                    <option value="50">50°</option>
                    <option value="51">51°</option>
                    <option value="52">52°</option>
                    <option value="53">53°</option>
                    <option value="54">54°</option>
                    <option value="55">55°</option>
                    <option value="56">56°</option>
                    <option value="57">57°</option>
                    <option value="58">58°</option>
                    <option value="59">59°</option>
                    <option value="60">60°</option>
                    <option value="61">61°</option>
                    <option value="62">62°</option>
                    <option value="63">63°</option>
                    <option value="64">64°</option>
                    <option value="65">65°</option>
                    <option value="66">66°</option>
                    <option value="67">67°</option>
                    <option value="68">68°</option>
                    <option value="69">69°</option>
                    <option value="70">70°</option>
                    <option value="71">71°</option>
                    <option value="72">72°</option>
                    <option value="73">73°</option>
                    <option value="74">74°</option>
                    <option value="75">75°</option>
                    <option value="76">76°</option>
                    <option value="77">77°</option>
                    <option value="78">78°</option>
                    <option value="79">79°</option>
                    <option value="80">80°</option>
                    <option value="81">81°</option>
                    <option value="82">82°</option>
                    <option value="83">83°</option>
                    <option value="84">84°</option>
                    <option value="85">85°</option>
                    <option value="86">86°</option>
                    <option value="87">87°</option>
                    <option value="88">88°</option>
                    <option value="89">89°</option>
                    <option value="90">90°</option>
                    <option value="91">91°</option>
                    <option value="92">92°</option>
                    <option value="93">93°</option>
                    <option value="94">94°</option>
                    <option value="95">95°</option>
                    <option value="96">96°</option>
                    <option value="97">97°</option>
                    <option value="98">98°</option>
                    <option value="99">99°</option>
                    <option value="100">100°</option>
                    <option value="101">101°</option>
                    <option value="102">102°</option>
                    <option value="103">103°</option>
                    <option value="104">104°</option>
                    <option value="105">105°</option>
                    <option value="106">106°</option>
                    <option value="107">107°</option>
                    <option value="108">108°</option>
                    <option value="109">109°</option>
                    <option value="110">110°</option>
                    <option value="111">111°</option>
                    <option value="112">112°</option>
                    <option value="113">113°</option>
                    <option value="114">114°</option>
                    <option value="115">115°</option>
                    <option value="116">116°</option>
                    <option value="117">117°</option>
                    <option value="118">118°</option>
                    <option value="119">119°</option>
                    <option value="120">120°</option>
                    <option value="121">121°</option>
                    <option value="122">122°</option>
                    <option value="123">123°</option>
                    <option value="124">124°</option>
                    <option value="125">125°</option>
                    <option value="126">126°</option>
                    <option value="127">127°</option>
                    <option value="128">128°</option>
                    <option value="129">129°</option>
                    <option value="130">130°</option>
                    <option value="131">131°</option>
                    <option value="132">132°</option>
                    <option value="133">133°</option>
                    <option value="134">134°</option>
                    <option value="135">135°</option>
                    <option value="136">136°</option>
                    <option value="137">137°</option>
                    <option value="138">138°</option>
                    <option value="139">139°</option>
                    <option value="140">140°</option>
                    <option value="141">141°</option>
                    <option value="142">142°</option>
                    <option value="143">143°</option>
                    <option value="144">144°</option>
                    <option value="145">145°</option>
                    <option value="146">146°</option>
                    <option value="147">147°</option>
                    <option value="148">148°</option>
                    <option value="149">149°</option>
                    <option value="150">150°</option>
                    <option value="151">151°</option>
                    <option value="152">152°</option>
                    <option value="15°">153°</option>
                    <option value="154">154°</option>
                    <option value="155">155°</option>
                    <option value="156">156°</option>
                    <option value="157">157°</option>
                    <option value="158">158°</option>
                    <option value="159">159°</option>
                    <option value="160">160°</option>
                    <option value="161">161°</option>
                    <option value="162">162°</option>
                    <option value="163">163°</option>
                    <option value="164">164°</option>
                    <option value="165">165°</option>
                    <option value="166">166°</option>
                    <option value="167">167°</option>
                    <option value="168">168°</option>
                    <option value="169">169°</option>
                    <option value="170">170°</option>
                    <option value="171">171°</option>
                    <option value="172">172°</option>
                    <option value="173">173°</option>
                    <option value="174">174°</option>
                    <option value="175">175°</option>
                    <option value="176">176°</option>
                    <option value="177">177°</option>
                    <option value="178">178°</option>
                    <option value="179">179°</option>
                    <option value="180">180°</option>
                  </select>
                  R Axis{" "}
                  <select
                    onChange={this.handleChange}
                    id="axis"
                    name="rightaxis"
                  >
                    <option value="0">0°</option>
                    <option value="1">1°</option>
                    <option value="2">2°</option>
                    <option value="3">3°</option>
                    <option value="4">4°</option>
                    <option value="5">5°</option>
                    <option value="6">6°</option>
                    <option value="7">7°</option>
                    <option value="8">0°</option>
                    <option value="9">9°</option>
                    <option value="10">10°</option>
                    <option value="11">11°</option>
                    <option value="12">12°</option>
                    <option value="13">13°</option>
                    <option value="14">14°</option>
                    <option value="15">15°</option>
                    <option value="16">16°</option>
                    <option value="17">17°</option>
                    <option value="18">18°</option>
                    <option value="19">19°</option>
                    <option value="20">20°</option>
                    <option value="21">21°</option>
                    <option value="22">22°</option>
                    <option value="23">23°</option>
                    <option value="24">24°</option>
                    <option value="25">25°</option>
                    <option value="26">26°</option>
                    <option value="27">27°</option>
                    <option value="28">28°</option>
                    <option value="29">29°</option>
                    <option value="30">30°</option>
                    <option value="31">31°</option>
                    <option value="32">32°</option>
                    <option value="33">33°</option>
                    <option value="34">34°</option>
                    <option value="35">35°</option>
                    <option value="36">36°</option>
                    <option value="37">37°</option>
                    <option value="38">38°</option>
                    <option value="39">39°</option>
                    <option value="40">40°</option>
                    <option value="41">41°</option>
                    <option value="42">42°</option>
                    <option value="43">43°</option>
                    <option value="44">44°</option>
                    <option value="45">45°</option>
                    <option value="46">46°</option>
                    <option value="47">47°</option>
                    <option value="48">48°</option>
                    <option value="49">49°</option>
                    <option value="50">50°</option>
                    <option value="51">51°</option>
                    <option value="52">52°</option>
                    <option value="53">53°</option>
                    <option value="54">54°</option>
                    <option value="55">55°</option>
                    <option value="56">56°</option>
                    <option value="57">57°</option>
                    <option value="58">58°</option>
                    <option value="59">59°</option>
                    <option value="60">60°</option>
                    <option value="61">61°</option>
                    <option value="62">62°</option>
                    <option value="63">63°</option>
                    <option value="64">64°</option>
                    <option value="65">65°</option>
                    <option value="66">66°</option>
                    <option value="67">67°</option>
                    <option value="68">68°</option>
                    <option value="69">69°</option>
                    <option value="70">70°</option>
                    <option value="71">71°</option>
                    <option value="72">72°</option>
                    <option value="73">73°</option>
                    <option value="74">74°</option>
                    <option value="75">75°</option>
                    <option value="76">76°</option>
                    <option value="77">77°</option>
                    <option value="78">78°</option>
                    <option value="79">79°</option>
                    <option value="80">80°</option>
                    <option value="81">81°</option>
                    <option value="82">82°</option>
                    <option value="83">83°</option>
                    <option value="84">84°</option>
                    <option value="85">85°</option>
                    <option value="86">86°</option>
                    <option value="87">87°</option>
                    <option value="88">88°</option>
                    <option value="89">89°</option>
                    <option value="90">90°</option>
                    <option value="91">91°</option>
                    <option value="92">92°</option>
                    <option value="93">93°</option>
                    <option value="94">94°</option>
                    <option value="95">95°</option>
                    <option value="96">96°</option>
                    <option value="97">97°</option>
                    <option value="98">98°</option>
                    <option value="99">99°</option>
                    <option value="100">100°</option>
                    <option value="101">101°</option>
                    <option value="102">102°</option>
                    <option value="103">103°</option>
                    <option value="104">104°</option>
                    <option value="105">105°</option>
                    <option value="106">106°</option>
                    <option value="107">107°</option>
                    <option value="108">108°</option>
                    <option value="109">109°</option>
                    <option value="110">110°</option>
                    <option value="111">111°</option>
                    <option value="112">112°</option>
                    <option value="113">113°</option>
                    <option value="114">114°</option>
                    <option value="115">115°</option>
                    <option value="116">116°</option>
                    <option value="117">117°</option>
                    <option value="118">118°</option>
                    <option value="119">119°</option>
                    <option value="120">120°</option>
                    <option value="121">121°</option>
                    <option value="122">122°</option>
                    <option value="123">123°</option>
                    <option value="124">124°</option>
                    <option value="125">125°</option>
                    <option value="126">126°</option>
                    <option value="127">127°</option>
                    <option value="128">128°</option>
                    <option value="129">129°</option>
                    <option value="130">130°</option>
                    <option value="131">131°</option>
                    <option value="132">132°</option>
                    <option value="133">133°</option>
                    <option value="134">134°</option>
                    <option value="135">135°</option>
                    <option value="136">136°</option>
                    <option value="137">137°</option>
                    <option value="138">138°</option>
                    <option value="139">139°</option>
                    <option value="140">140°</option>
                    <option value="141">141°</option>
                    <option value="142">142°</option>
                    <option value="143">143°</option>
                    <option value="144">144°</option>
                    <option value="145">145°</option>
                    <option value="146">146°</option>
                    <option value="147">147°</option>
                    <option value="148">148°</option>
                    <option value="149">149°</option>
                    <option value="150">150°</option>
                    <option value="151">151°</option>
                    <option value="152">152°</option>
                    <option value="15°">153°</option>
                    <option value="154">154°</option>
                    <option value="155">155°</option>
                    <option value="156">156°</option>
                    <option value="157">157°</option>
                    <option value="158">158°</option>
                    <option value="159">159°</option>
                    <option value="160">160°</option>
                    <option value="161">161°</option>
                    <option value="162">162°</option>
                    <option value="163">163°</option>
                    <option value="164">164°</option>
                    <option value="165">165°</option>
                    <option value="166">166°</option>
                    <option value="167">167°</option>
                    <option value="168">168°</option>
                    <option value="169">169°</option>
                    <option value="170">170°</option>
                    <option value="171">171°</option>
                    <option value="172">172°</option>
                    <option value="173">173°</option>
                    <option value="174">174°</option>
                    <option value="175">175°</option>
                    <option value="176">176°</option>
                    <option value="177">177°</option>
                    <option value="178">178°</option>
                    <option value="179">179°</option>
                    <option value="180">180°</option>
                  </select>
                  Add{" "}
                  <select onChange={this.handleChange} name="add">
                    <option value="0.00">0.00</option>
                    <option value="+0.25">+0.25</option>
                    <option value="+0.50">+0.50</option>
                    <option value="+0.75">+0.75</option>
                    <option value="+1.00">+1.00</option>
                    <option value="+1.25">+1.25</option>
                    <option value="+1.50">+1.50</option>
                    <option value="+1.75">+1.75</option>
                    <option value="+2.00">+2.00</option>
                    <option value="+2.25">+2.25</option>
                    <option value="+2.50">+2.50</option>
                    <option value="+2.75">+2.75</option>
                    <option value="+3.00">+3.00</option>
                    <option value="+3.25">+3.25</option>
                    <option value="+3.50">+3.50</option>
                    <option value="+3.75">+3.75</option>
                    <option value="+4.00">+4.00</option>
                  </select>
                </Segment>

                <Segment>
                  <div>
                    Condition{" "}
                    <Rating
                      onRate={this.handleChange}
                      name="condition"
                      icon="star"
                      defaultRating={0}
                      maxRating={4}
                    />
                  </div>
                </Segment>
              </div>

              <div className="picContainer">
                <Segment>
                  <div className="description">
                    Description <Input name="description" onChange={this.handleChange} />
                  </div>
                </Segment>
                <Segment>
                  <div>
                    Location <Input onChange={this.handleChange} name="city" />
                  </div>
                </Segment>
                <div className="picture">
                  <Segment>
                    Upload Images{" "}
                    <Form.Input
                      onChange={this.handleChange}
                      method="post"
                      type="file"
                      name="pic"
                      accept="image/*"
                    />
                  </Segment>
                </div>
                <Form.Button
                  onClick={this.createGlass}
                  color="teal"
                  type="submit"
                >
                  Create Listing
                </Form.Button>
              </div>
            </div>
          </Container>
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.glassesReducer.title,
    rightsphere: state.glassesReducer.rightsphere,
    leftsphere: state.glassesReducer.leftsphere,
    rightcylinder: state.glassesReducer.rightcylinder,
    leftcylinder: state.glassesReducer.leftcylinder,
    rightaxis: state.glassesReducer.rightaxis,
    leftaxis: state.glassesReducer.leftaxis,
    add: state.glassesReducer.add,
    condition: state.glassesReducer.condition,
    description: state.glassesReducer.description,
    city: state.glassesReducer.city,
    pic: state.glassesReducer.pic,
    token: state.glassesReducer.token,
    userid: 1
  };
};

export default withRouter(connect(mapStateToProps)(CreateGlass));
