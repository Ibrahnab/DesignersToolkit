import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const RoamMode = () => (
  
    <div>
        <Container>
            <Row>
                <Col>
                <p className ="dashboardHeader">Use without an account</p>
                </Col>
            </Row>
            <Row className="dashboardImageRow">
                <Col>
                    <img className ='dashboardCardImage'src='dashboard_cards_image.svg'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className='dashboardStartButton'><img className='dashboardButtonImage' src='dashboard_roam_button.svg' onClick={myFunc}/></button>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className='dashboardStandardText'>You can only search for and browse through methodologies in this mode. If you want to create projects and save your progress, 
                please sign in or create a new account on the right hand side.</p>
                </Col>
            </Row>
        </Container>
    </div>
  ); 

  function myFunc(){
      console.log("Clicked");
  }