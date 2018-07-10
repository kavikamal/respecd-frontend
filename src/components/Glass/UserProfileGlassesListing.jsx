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
  import { profileGlassSingle } from '../../actions/glassesAction';
import { connect } from 'react-redux';

class UserProfileGlassesListing extends Component {

    state = {
        profileGlasses: this.props
    }

    getSingleProfileGlass = (glassId) => {
        let method = {
            method: 'GET',
            headers: {
                //'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json' 
            },
            mode: 'cors'
        }
        fetch(backendurl+"/glasses/"+glassId, method)
        .then(response => response.json())
        .then(data => {
          this.props.dispatch(profileGlassSingle(data.data[0]))
          console.log("glasses fetch", data.data[0]);
        })
    }


    render() {
        return (
            <React.Fragment>
            {this.props.glasses.map((item, index) => (
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
                  <Button onClick={(evt)=>this.getSingleProfileGlass(item.glassesid)} as={Link} to={`/allposts/${item.glassesid}`}>See More Details</Button>
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
                        <td>{item.rightaxis}°</td>
                        <td>{item.add}</td>
                      </tr>
                      <tr>
                        <th>L</th>
                        <td>{item.leftsphere}</td>
                        <td>{item.leftcylinder}</td>
                        <td>{item.leftaxis}°</td>
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

const mapStateToProps = state => {
    return {
      title: state.glassesReducer.title,
      rightsphere: state.glassesReducer.rightsphere,
      leftsphere: state.glassesReducer.leftsphere,
      rightcylinder: state.glassesReducer.rightcylinder,
      leftcylinder: state.glassesReducer.leftcylinder,
      rightaxis: state.glassesReducer.rightaxis,
      leftaxis: state.glassesReducer.leftaxis,
      add: state.glassesReducer.add,
      condition: state.glassesReducer.condition,
      description: state.glassesReducer.description,
      city: state.glassesReducer.city,
      pic: state.glassesReducer.pic,
      glassesid: state.glassesReducer.glassesid
    };
  };
  
  export default withRouter(connect(mapStateToProps)(UserProfileGlassesListing));


