import React, { Component } from 'react';
import '../../App.css';
import { withRouter, Link  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header,
    Image,
    Segment,
    Button,
    Rating,
    Message          
} from 'semantic-ui-react';
class SingleFrame extends Component {

    state = {
        singleFrameObject: {
          title: "",
          condition: "",
          description: "",
          city: "",
          pic: ""
        }
      };
    
    render() {
        return(
            <React.Fragment>
              <Segment> 
                  <div id="singleGlass">
                <Header id="singleGlassHeader" as="h1">{this.props.title}</Header>     
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
                        <Button as={Link} to={`/updateframe/${this.props.framesid}`}>Update</Button>
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
      token:state.userReducer.token,  
      title: state.framesReducer.title,
      condition: state.framesReducer.condition,
      description: state.framesReducer.description,
      city: state.framesReducer.city,
      pic: state.framesReducer.pic,
      framesid: state.framesReducer.glassesid
    };
  };

  export default withRouter(connect(mapStateToProps)(SingleFrame));