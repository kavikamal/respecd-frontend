import React, { Component } from "react";
import "../App.css";
import {
  Header,
  Image,
  Button,
  Segment,
  Rating,
} from "semantic-ui-react";
import image1 from "../images/image1.jpg";
import star from "../images/star.png";
import starOff from "../images/star_off.png";

class Listing extends Component {
  
  render() {
    return (
      <React.Fragment>
        {this.props.glasses.map((item, index) => (
          <Segment key={index}>
            <div class="listContainer">
              <div class="image">
                <Image src={image1} />
              </div>
              <div class="title">
                <Header as="h1">{item.title}</Header>
                <div className="quality">
                  <Rating
                    icon="star"
                    defaultRating={3}
                    maxRating={4}
                    disabled
                  />
                </div>

                <div class="detailsBtn">
                  <Button>See More Details</Button>
                </div>
                <div class="prescription">
                  <table border="1" cellspacing="0" cellpadding="2" class="rx">
                    <tbody>
                      <tr class="h">
                        <th />
                        <th>Sph</th>
                        <th>Cyl</th>
                      </tr>
                      <tr class="r">
                        <td>R</td>
                        <td>{item.rightsphere}</td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <th>L</th>
                        <td>{item.leftsphere}</td>
                        <td>0.00</td>
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

export default Listing;
