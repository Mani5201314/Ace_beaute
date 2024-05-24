import React from 'react'
import "../../Styles/Slide1.css"
import Button from "react-bootstrap/Button";

const Slide = () => {
  return (
    <div className="bg">
      <div id="center">
        <h2 style={{ fontWeight: "1000" }}>UNLOCK YOUR RADIANCE</h2>

        <h5 id="slide1_text">
          Elevate Your Look with Luxurious Formulas and Vibrant Shades for Every
          Occasion
        </h5>

        <Button variant="outline-danger" id='btn-slide1'>SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Slide