import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpeg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

function CarouselView() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h3>Witness Action Like Never Before!</h3>
          <p>The game we love, the game we live for</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Season 2 🐱‍👤</h3>
          <p>Do you have what it takes ?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="Third slide" />

        <Carousel.Caption>
          <h3>One Love ⚽</h3>
          <p>Destiny Beckons</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselView;
