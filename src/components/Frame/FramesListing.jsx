import React, { Component } from "react";
import "../../App.css";
import {backendurl} from '../../config';
import {
  Header,
  Image,
  Button,
  Segment,
  Rating,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { getSingleFrame } from '../../actions/framesAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FramesListing extends Component {

getSingleFrame = (frameId) => {
  // const { token } = this.props;
      let method = {
          method: 'GET',
          headers: {
              // 'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json' 
          },
          mode: 'cors'
      }
      fetch(backendurl+"/frames/"+frameId, method)
      .then(response => response.json())
      .then(data => {
        this.props.dispatch(getSingleFrame(data.data[0]))
        console.log("Single frame fetch", data.data[0]);
      })
}

  render() {
    console.log(this.props.frames);
    return (
      <React.Fragment>
        {this.props.frames.map((item, index) => (
          <Segment key={index}>
            <div className="listContainer">
              <div className="image">
                <Image src={item.image} size="large"/>
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
                <Button onClick={(evt)=>this.getSingleFrame(item.frameid)} as={Link} to={`/frames/${item.frameid}`}>See More Details</Button>
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
    token:state.userReducer.token,
    title: state.framesReducer.title,
    condition: state.framesReducer.condition,
    description: state.framesReducer.description,
    city: state.framesReducer.city,
    pic: state.framesReducer.pic,
    framesid: state.framesReducer.framesid,
    userid:state.framesReducer.userid,
    contact: state.framesReducer.email
  };
};

export default withRouter(connect(mapStateToProps)(FramesListing));
