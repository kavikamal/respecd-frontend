import React, { Component } from "react";
import {
  Button,
  Form,
  Divider,
  Container,
  Header,
  Segment
} from "semantic-ui-react";
import {backendurl,AUTH_USER,UNAUTH_USER} from './config';

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPwd: "",
      loginEmail: "",
      loginPwd: "",
      loginSuccess: false
    };
  }
  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };
  handleRegisterSubmit = e => {
    e.preventDefault();
    console.log("Inside handle register")
    const postOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      })
    };
    fetch(backendurl+"/register", postOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === "success") {this.setState({ firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPwd: "",
        loginSuccess: true
      })}
      })
      .catch(e => {
        console.log(e);
      });
  };
  handleLoginSubmit = e => {
    e.preventDefault();
    const postOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPwd
      })
    };
    fetch(backendurl+"/login", postOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    //   if (data.auth) {
    //     dispatch({ type: AUTH_USER,
    //             username: credentials.username,userid:data.id,
    //             token: data.token  });
    //     this.props.history.push("/glasses")        

    // } else {
    //     dispatch({ type: UNAUTH_USER,
    //         message: "Login Unsuccessful" });
    //     alert("Incorrect Username or Password")    
    // }
    })
    .catch(err=> console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <Container text>
          <Segment textAlign="center" inverted color="teal">
            <Header size="huge">Welcome! </Header>
          </Segment>
          <Container text>
            <Segment color="teal">
              <Header size="large">New to Re-Spec'd? Register here!</Header>
            </Segment>
            <Form onSubmit={this.handleRegisterSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("firstname")}
                  fluid
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstname}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("lastname")}
                  fluid
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("email")}
                  fluid
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
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
                  value={this.state.password}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("confirmPwd")}
                  fluid
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.confirmPwd}
                  required
                />
              </Form.Field>
              <Button color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <Divider horizontal>OR</Divider>
          <Container text>
            <Segment color="teal">
              <Header as="h2">Already a member? Login</Header>
            </Segment>
            <Form onSubmit={this.handleLoginSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("loginEmail")}
                  fluid
                  label="Email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("loginPwd")}
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
