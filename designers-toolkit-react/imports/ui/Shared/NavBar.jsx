import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const NavBar = () => (
  <div className="navContainer">
    <Container>
      <Row className='navRow'>
      <Col><Link to="/" className="navText"><img className="logoImg" src='Logo.svg'/></Link></Col>
      {/* <img  class="logo" src="logo.png"/> */}
        <Col><Link to="/introduction" className="navText">Introduction</Link></Col>
        <Col><Link to="/methodologies" className="navText">Methodologies</Link></Col>
        <Col><Link to="/currentplan" className="navText">Current Plan</Link></Col>
      </Row>
    </Container>
  </div>
  ); 