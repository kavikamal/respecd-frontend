import React, { Component } from 'react';
import '../../App.css';
import '../App.jsx';
import { Grid, Header, Image, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


class User extends Component {

    render() {
        const { user } = this.props;
        console.log("user",user);
        return (
            <React.Fragment>
                 
                {/* <Grid columns={3} textAlign='center'> */}
                
                {/* <Header as='h3'>{user.lastname},{user.firstname}</Header> */}
                <Segment>
                Name<Header as='h2'>{user.firstname} {user.lastname}</Header>
                </Segment>
                <Segment>
                Email<Header as='h3'>{user.email}</Header>
                </Segment>
                <Segment>
                    <Button as={Link} to={"/allposts"}>Go To Your Listings</Button>
                </Segment>
                {/* </Grid> */}
      
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.userReducer.token,
        user: state.userReducer
    }
}
export default withRouter(connect(mapStateToProps)(User));