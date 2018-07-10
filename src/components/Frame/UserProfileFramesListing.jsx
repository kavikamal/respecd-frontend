import React, { Component } from 'react';
import '../../App.css';
import { backendurl } from '../../config';
import {
    Header,
    Image,
    Button,
    Segment,
    Rating,
  } from "semantic-ui-react";
  import { Link, withRouter } from 'react-router-dom';
  import { ProfileSingleFrame } from './ProfileSingleFrame';
  import { connect } from 'react-redux';
  import { profileFrameSingle } from '../../actions/framesAction';

  class UserProfileFramesListing extends Component {
      state = {
          profileFrames: this.props
      }

      getSingleProfileFrame = (frameId) => {
        let method = {
            method: 'GET',
            headers: {
                //'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        fetch(backendurl+"/frames/"+frameId, method)
        .then(response => response.json())
        .then(data => {
          this.props.dispatch(profileFrameSingle(data.data[0]))
          console.log("frames fetch", data.data[0]);
        })
    }

    render() {
        return (
            <React.Fragment>
            {this.props.frames.map((item, index) => (
                <Segment key={index}>
            <div className="listContainer">
              <div className="image">
                <Image src={item.image} />
              </div>
              <div className="title">
                <Header as="h1">{item.title}</Header>
                <div className="quality">
                  <Rating
                    icon="star"
                    rating={item.condition}
                    maxRating={4}
                    disabled
                  />
                </div>
                <div className="detailsBtn">
                  <Button onClick={(evt)=>this.getSingleProfileFrame(item.frameid)} as={Link} to={`/allframes/${item.frameid}`}>See More Details</Button>
                </div>
                
              </div>
            </div>
          </Segment>
            ))}
            </React.Fragment>
        );
    }

  }

  const mapStateToProps = state => {
      return {
          title: state.framesReducer.title,
          condition: state.framesReducer.condition,
          description: state.framesReducer.description,
          location: state.framesReducer.location,
          pic: state.framesReducer.pic,
          userid: state.userReducer.userid,
          frameid: state.framesReducer.frameid
      }
  }

  export default withRouter(connect(mapStateToProps)(UserProfileFramesListing));