import React from 'react'
import "../../Styles/Slide8.css"
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/twitter";
import "react-social-icons/pinterest";
import "react-social-icons/instagram";
import "react-social-icons/vimeo";
import "bootstrap/dist/css/bootstrap.css"




const Slide8 = () => {
  return (
    <div id="bg-black">
      <div>
        <h6>ADD A LITTLE COLOR TO YOUR INBOX</h6>
        <br />
        <input type="email" name="" id="email" placeholder="email@gmail.com" />
        <Button id="btn">SUBSCRIBE</Button>
      </div>
      <div>
        <h6>ABOUT</h6>
        <br />
        <a href="" id="a">
          <li>About Us</li>
        </a>

        <a href="" id="a">
          <li>My Accunt</li>
        </a>
        <a href="" id="a">
          <li>Press</li>
        </a>
        <a href="" id="a">
          <li>Rewards</li>
        </a>
      </div>
      <div>
        <h6>HELP</h6>
        <br />
        <a href="" id="a">
          <li>Content us</li>
        </a>
        <a href="" id="a">
          <li>FAQ</li>
        </a>
        <a href="" id="a">
          <li>Privacy Policy</li>
        </a>
        <a href="" id="a">
          <li>Return & Exchange</li>
        </a>
        <a href="" id="a">
          <li>Term of Serive</li>
        </a>
      </div>
      <div>
        <div id="icon">
          <SocialIcon url="www.facebook.com" className="me-2" />
          <SocialIcon url="www.twitter.com" className="me-2" />
          <SocialIcon url="www.pinterest.com" className="me-2" />
          <SocialIcon url="www.instagram.com" className="me-2" />
          <SocialIcon url="www.vimeo.com" className="me-2" />
        </div>
      </div>
    </div>
  );
}

export default Slide8