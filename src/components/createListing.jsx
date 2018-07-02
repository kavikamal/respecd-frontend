import React, { Component } from 'react';
import '../App.css';
// import banner from "../images/banner.png";
import { Header, Input, Rating, Segment, Container, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {titleChange, rxLeft, rxRight, quality, description, city, imageString } from '../actions/glassesAction.js'



class Create extends Component {


    titleInputChange = evt => {
        this.props.dispatch(titleChange(evt.target.value))
    }

    rxLeftChange = evt => {
        this.props.dispatch(rxLeft(evt.target.value))
    }

    rxRightChange = evt => {
        this.props.dispatch(rxRight(evt.target.value))
    }

    qualityChange = (evt, { rating }) => {
        console.log({ rating })
        this.props.dispatch(quality({ rating }));
    }

    descriptionChange = (evt) => {
        this.props.dispatch(description(evt.target.value))
    }

    locationChange = (evt) => {
        // console.log(evt.target.value)
        this.props.dispatch(city(evt.target.value))
    }

    imageChange = (evt) => {
        // console.log(evt.target.files[0].name)
        this.props.dispatch(imageString(evt.target.files[0]))
    }

    // listingSubmit = () => {
    //     console.log(this.props.condition)
    // }

 
    listingSubmit = () => {
        console.log(this.props.condition)

        console.log(this.props.whatever)
        fetch('https://re-specd-backend.herokuapp.com/glasses', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": this.props.title,
                "leftsphere": this.props.leftsphere,
                "rightsphere": this.props.rightsphere,
                "rating": this.props.condition,
                "description": this.props.description,
                "location": this.props.city,
                "image": "noimage",
                "userid": 1
            })
        })
    }

    render() {
        return(
            <React.Fragment>
                <Form>
            <Container>
                <div className="container">
                <div className="donate">
                 <Segment>    
                <Header as="h1">Have old glasses you'd like to donate?  Create a Listing</Header>
                </Segment>

                <Segment>
                Listing Title <Input onChange={this.titleInputChange}/>
                </Segment>

        <Segment>
       Prescription <br/><br/>
       L <select onChange={this.rxLeftChange} id="rxLeft1">
       <option value="-5.00">-5.00</option>
       <option value="-4.75">-4.75</option>
       <option value="-4.50">-4.50</option>
       <option value="-4.25">-4.25</option>
       <option value="-4.00">-4.00</option>
       <option value="-3.75">-3.75</option>
       <option value="-3.50">-3.50</option>
       <option value="-3.25">-3.25</option>
       <option value="-3.00">-3.00</option>
       <option value="-2.75">-2.75</option>
       <option value="-2.50">-2.50</option>
       <option value="-2.25">-2.25</option>
       <option value="-2.00">-2.00</option>
       <option value="-1.75">-1.75</option>
       <option value="-1.50">-1.50</option>
       <option value="-1.25">-1.25</option>
       <option value="-1.00">-1.00</option>
       <option value="-0.75">-0.75</option>
       <option value="-0.50">-0.50</option>
       <option value="-0.25">-0.25</option>
       <option value="0.00">0.00</option>
       <option value="+0.25">+0.25</option>
       <option value="+0.50">+0.50</option>
       <option value="+0.75">+0.75</option>
       <option value="+1.00">+1.00</option>
       <option value="+1.25">+1.25</option>
       <option value="+1.50">+1.50</option>
       <option value="+1.75">+1.75</option>
       <option value="+2.00">+2.00</option>
       <option value="+2.25">+2.25</option>
       <option value="+2.50">+2.50</option>
       <option value="+2.75">+2.75</option>
       <option value="+3.00">+3.00</option>
       <option value="+3.25">+3.25</option>
       <option value="+3.50">+3.50</option>
       <option value="+3.75">+3.75</option>
       <option value="+4.00">+4.00</option>
       <option value="+4.25">+4.25</option>
       <option value="+4.50">+4.50</option>
       <option value="+4.75">+4.75</option>
       <option value="+5.00">+5.00</option>
     </select>

     R <select onChange={this.rxRightChange} id="rxLeft2">
       <option value="-5.00">-5.00</option>
       <option value="-4.75">-4.75</option>
       <option value="-4.50">-4.50</option>
       <option value="-4.25">-4.25</option>
       <option value="-4.00">-4.00</option>
       <option value="-3.75">-3.75</option>
       <option value="-3.50">-3.50</option>
       <option value="-3.25">-3.25</option>
       <option value="-3.00">-3.00</option>
       <option value="-2.75">-2.75</option>
       <option value="-2.50">-2.50</option>
       <option value="-2.25">-2.25</option>
       <option value="-2.00">-2.00</option>
       <option value="-1.75">-1.75</option>
       <option value="-1.50">-1.50</option>
       <option value="-1.25">-1.25</option>
       <option value="-1.00">-1.00</option>
       <option value="-0.75">-0.75</option>
       <option value="-0.50">-0.50</option>
       <option value="-0.25">-0.25</option>
       <option value="0.00">0.00</option>
       <option value="+0.25">+0.25</option>
       <option value="+0.50">+0.50</option>
       <option value="+0.75">+0.75</option>
       <option value="+1.00">+1.00</option>
       <option value="+1.25">+1.25</option>
       <option value="+1.50">+1.50</option>
       <option value="+1.75">+1.75</option>
       <option value="+2.00">+2.00</option>
       <option value="+2.25">+2.25</option>
       <option value="+2.50">+2.50</option>
       <option value="+2.75">+2.75</option>
       <option value="+3.00">+3.00</option>
       <option value="+3.25">+3.25</option>
       <option value="+3.50">+3.50</option>
       <option value="+3.75">+3.75</option>
       <option value="+4.00">+4.00</option>
       <option value="+4.25">+4.25</option>
       <option value="+4.50">+4.50</option>
       <option value="+4.75">+4.75</option>
       <option value="+5.00">+5.00</option>
     </select>
     </Segment>

     <Segment>
            <div>
     Condition <Rating onRate={this.qualityChange} icon='star' defaultRating={0} maxRating={4} />
            </div>
    </Segment>

     </div>

    


     <div className="picContainer">

          <Segment>
         <div className="description" >
           Description <Input onChange={this.descriptionChange}/>
         </div>
         </Segment>
         <Segment>
         <div>
         Location <Input onChange={this.locationChange}/>
         </div>
         </Segment>
       <div className="picture">
         <Segment>
             Upload Images <Form.Input onChange={this.imageChange} method="post" type="file" name="pic" accept="image/*"/>
         </Segment>

         
        </div>
        <Form.Button onClick={this.listingSubmit} color="teal" type="submit">Create Listing</Form.Button>

        
       
    </div>

      
     </div>
    </Container>
    </Form>
   
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.glassesReducer.title,
        rightsphere: state.glassesReducer.rightsphere,
        leftsphere: state.glassesReducer.leftsphere,
        condition: state.glassesReducer.condition,
        description: state.glassesReducer.description,
        city: state.glassesReducer.city,
        whatever: state
    }
}

export default withRouter(connect(mapStateToProps)(Create));