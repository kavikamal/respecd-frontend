import React, { Component } from "react";
import { Button, Form, Divider, Container, Header, Segment } from "semantic-ui-react";

export default class LoginRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",

        }
    }
    handleChange = field => e => {
        this.setState({ [field]: e.target.value });
      };
    handleRegisterSubmit = e => {
        e.preventDefault();
        const postOptions = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username
            // password: "this.state.password",
            // displayName: "this.state.username"
          })
        };
        fetch("https://re-specd-backend.herokuapp.com/register", postOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    render() {
    return (
      <React.Fragment>
        <Container text>
        <Segment textAlign="center" padded="heavy" inverted color="teal">
          <Header as="h1">Welcome to Re-Spec'd!</Header>
        </Segment>
          <Container text>
            <Header as="h2">New to Re-Spec'd? Register here!</Header>
            <Form onSubmit={this.handleRegisterSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("username")}
                  fluid
                  label="Username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("password")}
                  fluid
                  label="Password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                // onChange={""}
                  fluid
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Field>
              <Button  color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <Divider horizontal>OR</Divider>
          <Container text>
            <Header as="h2">Already a member? Login</Header>
            <Form onSubmit={""}>
              <Form.Field>
                <Form.Input
                  onChange={""}
                  fluid
                  label="Username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={""}
                  fluid
                  label="Password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Field>
              <Button color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <br />
        </Container>
      </React.Fragment>
    );
  }
}
