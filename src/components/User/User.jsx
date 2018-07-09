import React, { Component } from 'react';
import '../../App.css';
import '../App.jsx';
import { Grid, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class User extends Component {

    render() {
        const { user } = this.props;
        console.log("user",user);
        return (
            <React.Fragment>
                 
                <Grid columns={3} textAlign='center'>
                <Image src="" size='medium' shape='circular'/>
                
                <Header as='h3'>{user.lastname},{user.firstname}</Header>
                <Header as='h4'>{user.email}</Header>
                </Grid>
      
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