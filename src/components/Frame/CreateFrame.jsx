import React, { Component } from "react";
import "../../App.css";
import { backendurl } from '../../config';
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
import { createFrame } from "../../actions/framesAction.js";

class CreateFrame extends Component {
  state = {
    framesObject: {
      title: "",
      condition: "",
      description: "",
      location: "",
      frameimage: ""
    }
  };

  handleChange = event => {
    const field = event.target.name;
    const framesObject = this.state.framesObject;
    framesObject[field] = event.target.value;
    this.setState({
      framesObject: framesObject
    });
  } 
    handleRating = (event,{rating}) => {
      
      const framesObject = this.state.framesObject;
      framesObject.condition= rating;
      this.setState({
        framesObject: framesObject
      });  
  };

  imageChange = evt => {
    console.log(evt.target.files[0])
    const framesObject = this.state.framesObject;
    framesObject.frameimage = evt.target.files[0];
      this.setState({
        framesObject: framesObject
      });  
  };


  createFrame = (evt) => {
    const { token } = this.props;
    evt.preventDefault();
        let method = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors',
            body: JSON.stringify({
              title: this.state.framesObject.title,
              condition: this.state.framesObject.condition,
              description: this.state.framesObject.description,
              location: this.state.framesObject.location,
              frameimage: this.state.framesObject.frameimage,
              userid: this.props.userid
            })
        }
        fetch(backendurl+"/frames", method)
        .then(response => response.json())
        .then(() => {
          // console.log(data);
          // console.log(this.state);
          this.props.dispatch(createFrame(this.state.framesObject));
          // console.log("Create frame fetch", data);
        })
  }

  

  render() {
    return (
      <React.Fragment>
        <Form
          action={backendurl+"/frames"}
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
                      onRate={this.handleRating}
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
                    Description <Input onChange={this.handleChange} name="description"/>
                  </div>
                </Segment>
                <Segment>
                  <div>
                    Location <Input onChange={this.handleChange} name="location" />
                  </div>
                </Segment>
                <div className="picture">
                  <Segment>
                    Upload Images{" "}
                    <Form.Input
                      onChange={this.imageChange}
                      method="post"
                      type="file"
                      name="frameimage"
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
    token:state.userReducer.token,
    title: state.framesReducer.title,
    condition: state.framesReducer.condition,
    description: state.framesReducer.description,
    city: state.framesReducer.city,
    frameimage: state.framesReducer.frameimage,
    userid:state.userReducer.userid
  };
};

export default withRouter(connect(mapStateToProps)(CreateFrame));
