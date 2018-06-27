import React, { Component } from 'react';
import { Button, Sidebar, Menu, Dropdown, Segment } from 'semantic-ui-react';
import '../App.css';
import Listing from './Listing.jsx'

export default class SideNav extends Component {
  state = { visible: false }

  render() {
    const { visible } = this.state
 
        return(
          
<div id="test">               

<Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thick'
            >

  <form id="sideBar">  

   <Menu.Item id="rightRX">RIGHT RX
   </Menu.Item>

    <Menu.Item id="rxSelect1">
     <select id="rxRight1">
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
       
     <select id="rxRight2">
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
     
   </Menu.Item>

   <Menu.Item id="leftRX">LEFT RX
   </Menu.Item>
   <Menu.Item id="rxSelect2">
     <select id="rxLeft1">
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
   </Menu.Item>

   <Menu.Item id="sizeItem">SIZE
   </Menu.Item>
   <Menu.Item id="size">
       <select id="sizeInput">
         <option value="Adult">Adult</option>
         <option value="Pediatric">Pediatric</option>
       </select>
   </Menu.Item>

   <Menu.Item id="location">LOCATION</Menu.Item>
   <Menu.Item id="locationItem">
       
       <form><input id="city" placeholder="City"></input></form>
       <form><input id="state" placeholder="State"></input></form>
       
   </Menu.Item>

   <Menu.Item id="condition">CONDITION</Menu.Item>

   <Menu.Item id="conditionItem">
       <div id="radio1"><input type="radio"></input><div id="star1">*</div></div>
       <div id="radio1"><input type="radio"></input><div id="star1">*  *</div></div>
       <div id="radio1"><input type="radio"></input><div id="star1">*  *  *</div></div>
       <div id="radio1"><input type="radio"></input><div id="star1">*  *  *  *</div></div>
   </Menu.Item>


   <Menu.Item id="buttons">
  
       <Button id="searchBtn" size='large' color='blue'><div id="searchLabel">Refine Search</div></Button>
       <Button id="startOverBtn" size='large' color='gray'><div id="startOverLabel">Start Over</div></Button>
    
   </Menu.Item>
   </form>
  
</Sidebar>

<Sidebar.Pusher>
<Segment basic>
    <Listing />
    <Listing />
    <Listing />
    <Listing />
  </Segment>
</Sidebar.Pusher>
</Sidebar.Pushable>
</div>


        )
    }
}