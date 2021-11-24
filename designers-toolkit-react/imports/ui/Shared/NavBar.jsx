import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const NavBar = () => (
  <Container>
    <Row>
      <Col><Link to="/">Dashboard</Link></Col>
      <Col><Link to="/introduction">Introduction</Link></Col>
      <Col><Link to="/methodologies">Methodologies</Link></Col>
      <Col><Link to="/currentplan">Current Plan</Link></Col>
    </Row>
  </Container>
  ); 