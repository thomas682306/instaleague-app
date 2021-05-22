import React from 'react';
import "./tournamentcards.css";
import CardItem from "./../CardItem";
import pic9 from "./../../images/jogo.jpeg";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function currenttournamentcard() {
    return (


        <div className="cards">
          <h1>
            Upcoming Tournaments...
          </h1>       
        
          <div className="cards__container">
            <div className="cards__wrapper">
        
              <Card className="cards__items" style={{ width: '24rem' }} padding="2rem" >
                <Card.Img variant="top" src={pic9} />
                <Card.Body >
                  <Card.Title>Season 6</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" size="lg" block>Register</Button>
                </Card.Body>
              </Card>

          </div>
        </div>
      </div>



    );

}

export default currenttournamentcard;
