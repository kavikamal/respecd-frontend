import React, { Component } from "react";
import {  Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import banner from "../images/login.png";
import { backendurl } from '../config';
import { logoutUser } from '../actions/userAction';

import { connect } from 'react-redux';
import {
    Menu,
    Dropdown, 
    Icon,
    Image
  } from "semantic-ui-react";

class NavBar extends Component {
    state = { activeItem: 'home', banner: banner  }

        handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        handleLogout = (e, { name }) => {

            let method = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }

            fetch(backendurl+"/logout", method)
                .then(response => response.json())
                .then((data) => {
                    this.props.dispatch(logoutUser())
                    console.log(data);
                })




            this.setState({ activeItem: name })
            //alert("So Long!")
            this.props.history.push("/")
            this.setState({ activeItem: "home" })
            
            
            console.log(this.state);
    } 
    render() {
        const { activeItem , banner} = this.state
    return (
        <React.Fragment>
        <div>
        <Image src={banner} fluid />
        </div>
        <Menu size="huge" color="teal" widths={5} pointing secondary>
            <Menu.Item id="home" as={Link} to={"/"} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name="home" />Home
            </Menu.Item>
            
            <Dropdown item  text='Browse '>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/glasses"} name="glasses"  active={activeItem === 'glasses'} onClick={this.handleItemClick} text='Glasses' />
              <Dropdown.Item as={Link} to={"/frames"} name="frames" active={activeItem === 'frames'} onClick={this.handleItemClick} text='Frames' />
              </Dropdown.Menu>  
            </Dropdown>
            {this.props.token && 
            <React.Fragment>
             <Dropdown item  text='Donate '>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/createGlass"} name="glasses"  active={activeItem === 'glasses'} onClick={this.handleItemClick} text='Glasses' />
              <Dropdown.Item as={Link} to={"/createFrame"} name="frames" active={activeItem === 'frames'} onClick={this.handleItemClick} text='Frames' />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item  text='Account '>
              <Dropdown.Menu>
              <Dropdown.Item as={Link} to={"/user"} name="user"  active={activeItem === 'user'} onClick={this.handleItemClick} text='Your profile' />
              <Dropdown.Item as={Link} to={"/allposts"} name="posts" active={activeItem === 'posts'} onClick={this.handleItemClick} text='Your posts' />
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item  name='logout' active={activeItem === 'logout'} onClick={this.handleLogout}>
            <Icon name="sign out"/>Logout
            </Menu.Item>
            </React.Fragment>}
        </Menu>
        </React.Fragment>
    )
    }       
}

const mapStateToProps = (state) => {
    return {
        userid: state.userReducer.userid,
        firstname: state.userReducer.firstname,
        lastname: state.userReducer.lastname,
        email: state.userReducer.email,
        token: state.userReducer.token,
        // user: state.userReducer
    }
  }
  export default withRouter(connect(mapStateToProps)(NavBar));