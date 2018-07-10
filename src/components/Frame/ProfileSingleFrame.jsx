import React, { Component } from 'react';
import '../../App.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header,
    
    Segment,
    Button,
    Rating,
    Message          
} from 'semantic-ui-react';

class ProfileSingleFrame extends Component {

    state = {
        singleProfileFrameObject: {
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
                <div className="singleGlass">
              <Header className="singleGlassHeader" as="h1">{this.props.title}</Header>
            

                <div className="quality">
                  Condition<Rating
                    icon="star"
                    rating={this.props.condition}
                    maxRating={4}
                    disabled
                   />
                </div>

                <Message className="singleGlassMessage">
                    <h3>Description</h3>
                    <p>{this.props.description}</p>
                </Message>
                
                  <div className="singleGlassLocation">
                    Location<h3>{this.props.city}</h3>
                  </div>

                  <Message>
                    <p>Pics can go here?</p>
                  </Message>

                  <Message>
                     Contact <h3>email placeholder</h3>
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
        title: state.framesReducer.title,
        condition: state.framesReducer.condition,
        description: state.framesReducer.description,
        city: state.framesReducer.city,
        pic: state.framesReducer.pic,
        framesid: state.framesReducer.glassesid

    }
}

export default withRouter(connect(mapStateToProps)(ProfileSingleFrame));