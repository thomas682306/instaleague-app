import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import Logo from "../images/instaleaguelogo.png";
import { Link, Route } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} height="50px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto font-weight-bold">
          <Nav.Link>
            <Link to="/tournaments">Tournaments</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about_us">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/sign_up">Sign Up</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;
