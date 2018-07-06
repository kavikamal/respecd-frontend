import React, { Component } from "react";
import "../App.css";
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
import { createFrame } from "../actions/framesAction.js";

class CreateFrame extends Component {
  state = {
    framesObject: {
      title: "",
      condition: "",
      description: "",
      city: "",
      pic: ""
    }
  };

  handleChange = event => {
    const field = event.target.name;
    const framesObject = this.state.framesObject;
    framesObject[field] = event.target.value;
    this.setState({
      framesObject: framesObject
    });
    console.log(this.state);
  };

  imageChange = evt => {
    this.framesObject.image = evt.target.files[0];
    console.log(this.framesObject);
  };

  createFrame = () => {
    this.props.dispatch(createFrame(this.state.framesObject));
  };

  listingSubmit = evt => {
    evt.preventDefault();
    fetch(
      "https://re-specd-backend.herokuapp.com/frames" /*"http://127.0.0.1:3000/frames"*/,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.props.title,
          rating: this.props.condition,
          description: this.props.description,
          location: this.props.city,
          image: this.props.image,
          userid: 1
        })
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <Form
          action="https://re-specd-backend.herokuapp.com/frames"
          method="POST"
          encType="multipart/form-data"
        >
          <Container>
            <div className="container">
              <div className="donate">
                <Segment>
                  <Header as="h1">
                    Have old frames you'd like to donate? Create a Listing
                  </Header>
                </Segment>

                <Segment>
                  Listing Title{" "}
                  <Input onChange={this.handleChange} name="title" />
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
                  <div className="description" name="description">
                    Description <Input onChange={this.handleChange} />
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
                  onClick={this.createFrame}
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
    title: state.framesReducer.title,
    condition: state.framesReducer.condition,
    description: state.framesReducer.description,
    city: state.framesReducer.city,
    pic: state.framesReducer.pic
  };
};

export default withRouter(connect(mapStateToProps)(CreateFrame));
