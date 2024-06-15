import React from "react";
import Hero from "../Assets/hero.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="hero-container">
      <div className="left-hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Meditarranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
      </div>
      <div className="right-hero">
        <img id="hero" src={Hero} alt="image of food ona tray" />
      </div>
    </div>
  );
};

export default About;
