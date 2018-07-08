import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
          pic: ""
        }
      };
    
    render() {
        return(
            <React.Fragment>
                <h1>test</h1>
                <h2>{this.props.title}</h2>
                <h2>{this.props.leftsphere}</h2>
                <h2>{this.props.rightsphere}</h2>
                <h2>{this.props.leftcylinder}</h2>
                <h2>{this.props.rightcylinder}</h2>
                <h2>{this.props.leftaxis}</h2>
                <h2>{this.props.rightaxis}</h2>
                <h2>{this.props.add}</h2>
                <h2>{this.props.add}</h2>
                <h2>{this.props.condition}</h2>
                <h2>{this.props.description}</h2>
                <h2>{this.props.city}</h2>
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
      pic: state.glassesReducer.pic
    };
  };

  export default withRouter(connect(mapStateToProps)(SingleGlass));



