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
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
      </div>
      <div className="right-hero">
        <img
          id="hero"
          src={Hero}
          alt="Image of food on a tray"
          aria-labelledby="hero-description"
        />
        <span id="hero-description" className="sr-only">
          Image of delicious Mediterranean food
        </span>
      </div>
    </div>
  );
};

export default About;
