import React from "react";
import "./Menu.css";
import fish from "../Assets/grilledfish.jpg";
import Salad from "../Assets/greeksalad.jpg";
import Bruchetta from "../Assets/bruchetta.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <img
          className="food"
          src={Salad}
          alt="A picture of a Greek salad"
          aria-labelledby="salad-description"
        />
        <div className="item-details">
          <h2>Greek Salad</h2>
          <h3>$12.99</h3>
        </div>
        <p id="salad-description">
          The famous Greek salad of crispy lettuce, peppers, olives and our
          Chicago style geta is to die for.
        </p>
      </div>
      <div className="menu-item">
        <img
          className="food"
          src={Bruchetta}
          alt="A picture of bruschetta"
          aria-labelledby="bruchetta-description"
        />
        <div className="item-details">
          <h2>Bruschetta</h2>
          <h3>$10.99</h3>
        </div>
        <p id="bruchetta-description">
          Bruschetta is served with toasted garlic bread, diced tomatoes, basil,
          garlic and olive oil all freshly cooked.
        </p>
      </div>
      <div className="menu-item">
        <img
          className="food"
          src={fish}
          alt="A picture of grilled fish"
          aria-labelledby="fish-description"
        />
        <div className="item-details">
          <h2>Grilled Fish</h2>
          <h3>$17.99</h3>
        </div>
        <p id="fish-description">
          Our grilled fish is served with a side of garlic butter and lemon,
          served with...
        </p>
      </div>
    </div>
  );
};

export default Menu;
