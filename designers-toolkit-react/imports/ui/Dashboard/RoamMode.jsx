import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


export const RoamMode = () => (
  
    <div>
        <Container>
            <div className="row d-flex justify-content-center flex-nowrap roamModeTopTextLeftPadding">
                <Col md="auto">
                    <p className ="dashboardHeader">Use without an account</p>
                </Col>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap topPaddingTen">
                <Col md="auto">
                    <img className ='dashboardCardImage'src='dashboard_cards_image.svg'/>
                </Col>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap">
                <Col md="auto">
                    <button className='dashboardStartButton'><Link to="/methodologies" className="buttonText big">Start</Link></button>
                </Col>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap topPaddingEight">
                <Col md="auto">
                <p className='dashboardStandardText'>You can only search for and browse through methodologies in this mode. If you want to create projects and save your progress, 
                please sign in or create a new account on the right hand side.</p>
                </Col>
            </div>
        </Container>
    </div>
  ); 