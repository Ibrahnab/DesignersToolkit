import React from "react";
import {AccountSide} from './AccountSide';
import {RoamMode} from './RoamMode';
import Row  from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export const Dashboard = () => (
  
    <div>
      <Container>
        <Row>
          <Col><RoamMode/></Col>
          <div className = "dashboardVL"></div>
          <Col><AccountSide/></Col>
        </Row>
      </Container>
    </div>
  ); 

  /*<Col><AccountSide/></Col>
        <Col><RoamMode/></Col>*/