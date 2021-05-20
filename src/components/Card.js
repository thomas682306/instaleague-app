import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import pic9 from "../images/jogo.jpeg";
import pic8 from "../images/gametown.jpg";
import pic7 from "../images/usc.jpg";

import pic6 from "../images/turfpark.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Sponsors</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pic9}
              text="Host of Season 1"
              label="Gama"
              path="/services"
            />
            <CardItem
              src={pic8}
              text="Host of Season 2"
              label="USC"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={pic7}
              text="Host of Season 3"
              label="GameTown"
              path="/services"
            />
            <CardItem
              src={pic6}
              text="Host of Season 4 & 5"
              label="Turf Park"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
