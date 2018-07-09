import React, { Component } from 'react';
import '../App.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header,
         Image,
         Segment,
         Button,
         Rating,
         Message          
} from 'semantic-ui-react';
class SingleGlass extends Component {

    state = {
        singleGlassObject: {
          title: "",
          leftsphere: "",
          rightsphere: "",
          leftcylinder: "",
          rightcylinder: "",
          leftaxis: "",
          rightaxis: "",
          add: "",
          condition: "",
          description: "",
          city: "",
          pic: "",
          token: ""
        }
      };
    
    render() {
        return(
            <React.Fragment>
              <Segment> 
                  <div id="singleGlass">
                <Header id="singleGlassHeader" as="h1">{this.props.title}</Header>
              
              
               
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
                          <td>{this.props.rightsphere}</td>
                          <td>{this.props.rightcylinder}</td>
                          <td>{this.props.rightaxis}°</td>
                          <td>{this.props.add}</td>
                        </tr>
                        <tr>
                          <th>L</th>
                          <td>{this.props.leftsphere}</td>
                          <td>{this.props.leftcylinder}</td>
                          <td>{this.props.leftaxis}°</td>
                          <td>{this.props.add}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  <div id="singleGlassQuality" className="quality">
                    Condition<Rating
                      icon="star"
                      rating={this.props.condition}
                      maxRating={4}
                      disabled
                     />
                  </div>

                  <Message id="singleGlassMessage">
                      <h3>Description</h3>
                      <p>{this.props.description}</p>
                  </Message>
                  
                    <div id="singleGlassLocation">
                      Location<h3>{this.props.city}</h3>
                    </div>

                    <Message>
                      <p>Pics can go here?</p>
                    </Message>

                    <div>
                        <Button as={Link} to={`/createGlass/${this.props.glassesid}`}>Update</Button>
                        <Button>Delete</Button>
                    </div>

                  </div>
                </Segment>
                
                
                
                
                
                
            </React.Fragment>
        )
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
      glassesid: state.glassesReducer.glassesid,
      token: state.glassesReducer.token
    };
  };

  export default withRouter(connect(mapStateToProps)(SingleGlass));



