import React, { Component } from 'react';
import '../App.css';
import banner from "../images/banner.png";
import { Header, Input, Rating, Segment, Container, Form } from 'semantic-ui-react';

export default class Create extends Component {
    render() {
        return(
            <React.Fragment>
                <Form>
            <Container>
                <div class="container">
                <div class="donate">
                 <Segment>    
                <Header as="h1">Have old glasses you'd like to donate?  Create a Listing</Header>
                </Segment>

                <Segment>
                Listing Title <Input/>
                </Segment>

        <Segment>
       Prescription <select id="rxLeft1">
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

     <select id="rxLeft2">
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
     Condition <Rating icon='star' defaultRating={3} maxRating={4} />
            </div>
            </Segment>
     </div>


     <div class="picContainer">
     <div class="picture">
     <Segment>
     

        Upload Images <Form.Input type="file" name="pic" accept="image/*"/>
        <Form.Input type="submit"/>
    
    </Segment>
    </div>
    </div>
     </div>
    </Container>
    </Form>
   
            </React.Fragment>
        )
    }
}