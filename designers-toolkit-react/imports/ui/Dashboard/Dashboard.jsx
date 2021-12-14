import React from "react";
import {AccountSide} from './AccountSide';
import {RoamMode} from './RoamMode';
import Row  from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export const Dashboard = () => (
  
    <div>
      <Container>
        <Row className='dashboardRowHeader'>
          <Col><RoamMode/></Col>
          <Col md={1}><div className = "dashboardVL"></div></Col>
            
          <Col md ={{offset:1}}><AccountSide/></Col>
        </Row>
      </Container>
    </div>
  ); 

  /*<Col><AccountSide/></Col>
        <Col><RoamMode/></Col>*/