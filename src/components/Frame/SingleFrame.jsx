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
          location: "",
          image: ""
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
                      Location<h3>{this.props.location}</h3>
                    </div>

                    <Message>
                    <div className="image">
                    <Image src={this.props.image} size="large" />
                    </div> 
                    </Message>

                    <Message>
                     Contact <h3>{this.props.contact}</h3>
                    </Message>

                    

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
      location: state.framesReducer.location,
      image: state.framesReducer.image,
      framesid: state.framesReducer.glassesid,
      contact: state.framesReducer.contact
    };
  };

  export default withRouter(connect(mapStateToProps)(SingleFrame));