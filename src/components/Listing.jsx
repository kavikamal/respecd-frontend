import React, { Component } from 'react';
import '../App.css';
import { Header, Image, Button, Container } from 'semantic-ui-react';
import image1 from '../images/image1.jpg';
import star from '../images/star.png';
import starOff from '../images/star_off.png'

class Listing extends Component {
    render() {
        return(
            <React.Fragment>
               
            <div class="test">
            <div class="image">
              <Image src={image1}/>
            </div>
              <div class="title">
                <Header as="h1">Gold Wire Frame Spectacles</Header>
                <div className="quality">
                   <Image src={star}/>
                   <Image src={star}/>
                   <Image src={star}/>
                   <Image src={starOff}/>
                </div>

                <div class="detailsBtn">
                <Button>See More Details</Button>
                </div>

                <div class="prescription">
                    <table border="1" cellspacing="0" cellpadding="2" class="rx">
                    <tbody>
                        <tr class="h">
                            <th></th>
                            <th>Sph</th>
                            <th>Cyl</th>
                        </tr>
                        <tr class="r">
                            <td>R</td>
                            <td>0.00</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <th>L</th>
                            <td>0.00</td>
                            <td>0.00</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
              </div>
              
            </div>
   
            </React.Fragment>
           
        )
    }
}

export default Listing;
