import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render () {

    return (
    <footer>
      <div id="footer">  
            <div >
                <a class="item" href="#">Site Map</a>
                <a class="item" href="#">Contact Us</a>
                <a class="item" href="#">Terms and Conditions</a>
                <a class="item" href="#">Privacy Policy</a>
            </div>
          </div>
     
    </footer>
      );
    }
  };

  export default Footer;