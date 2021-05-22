import React from 'react';
import Badge from "react-bootstrap/Badge";

import "./tournamentcards.css";
import CardItem from "./../CardItem";
import pic9 from "./../../images/jogo.jpeg";
import pic8 from "./../../images/gametown.jpg";
import pic7 from "./../../images/usc.jpg";

import pic6 from "./../../images/turfpark.jpg";

function tournamentcards() {
    return (
        <div className="cards">
          <h1>
            Previous Tournaments <Badge variant="secondary">...</Badge>
            </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
        
            <ul className="cards__items">
            
       
                 <CardItem
                 src={pic9}
                 text="Season 1 "
                 label="Gama"
                 path="/services"
               />
            
           
              <CardItem
                src={pic8}
                text=" Season 2"
                label="USC"
                path="/services"
              />
            {/* </ul>
            <ul className="cards__items"> */}
              <CardItem
                src={pic7}
                text="Season 3"
                label="GameTown"
                path="/services"
              />
{/*              
            </ul>
            <ul className="cards__items"> */}
            <CardItem
                src={pic6}
                text=" Season        4 & 5"
                label="Turf Park"
                path="/products"
              />
          </ul>
          </div>
        </div>
      </div>
    );
}

export default tournamentcards;



