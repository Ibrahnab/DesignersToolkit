import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const NavBar = () => (
  <div className="navContainer">
    <Container>
      <Row className='navRow'>
      <Col><Link to="/" class="navText"><img class="logoImg" src='Logo.svg'/></Link></Col>
      {/* <img  class="logo" src="logo.png"/> */}
        <Col><Link to="/introduction" class="navText">Introduction</Link></Col>
        <Col><Link to="/methodologies" class="navText">Methodologies</Link></Col>
        <Col><Link to="/currentplan" class="navText">Current Plan</Link></Col>
      </Row>
    </Container>
  </div>
  ); 