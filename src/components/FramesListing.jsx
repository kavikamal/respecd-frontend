import React, { Component } from "react";
import "../App.css";
import {
  Header,
  Image,
  Button,
  Segment,
  Rating,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';

class FramesListing extends Component {

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
                    rating={item.rating}
                    maxRating={4}
                    disabled
                  />
                </div>
                <div className="detailsBtn">
                  <Button as={Link} to={`frames/${item.framesId}`}>See More Details</Button>
                </div>

              </div>
            </div>
          </Segment>
        ))}
      </React.Fragment>
    );
  }
}

export default FramesListing;
