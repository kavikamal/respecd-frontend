import React, { Component } from "react";
import "../App.css";
import backendurl from './config';
import {
  Header,
  Image,
  Button,
  Segment,
  Rating,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';

class GlassesListing extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.glasses.map((item, index) => (
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
                  <Button as={Link} to={`/${item.glassesid}`}>See More Details</Button>
                </div>
                <div className="prescription">
                  <table border="1" cellSpacing="0" cellPadding="2" className="rx">
                    <tbody>
                      <tr className="h">
                        <th />
                        <th>Sph</th>
                        <th>Cyl</th>
                        <th>Axis</th>
                        <th>Add</th>
                      </tr>
                      <tr className="r">
                        <td>R</td>
                        <td>{item.rightsphere}</td>
                        <td>{item.rightcylinder}</td>
                        <td>{item.rightaxis}</td>
                        <td>{item.add}</td>
                      </tr>
                      <tr>
                        <th>L</th>
                        <td>{item.leftsphere}</td>
                        <td>{item.leftcylinder}</td>
                        <td>{item.leftaxis}</td>
                        <td>{item.add}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Segment>
        ))}
      </React.Fragment>
    );
  }
}

export default GlassesListing;