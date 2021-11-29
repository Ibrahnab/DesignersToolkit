import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export const CurrentPlan = () => (
    <div>
      <Container>
        <div className="row d-flex justify-content-center flex-nowrap topPaddingFour">
          <Col md="auto">
            <img src="small_triplediamond.svg"/>
          </Col>
        </div>
        <div className="row topPaddingFour roamModeTopTextLeftPadding">
          <Col>
            <img src="understand_circle_image.svg"/>
          </Col>
          <Col>
            <img src="define_circle_image.svg"/>
          </Col>
          <Col>
            <img src="sketch_circle_image.svg"/>
          </Col>
          <Col>
            <img src="decide_circle_image.svg"/>
          </Col>
          <Col>
            <img src="prototype_circle_image.svg"/>
          </Col>
          <Col>
            <img src="validate_circle_image.svg"/>
          </Col>
        </div>
      </Container>
    </div>
  ); 