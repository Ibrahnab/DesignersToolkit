import React from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Methodologies = ({methods}) => {
  return (
    <div>
      <Container className="auto">

      <Container className="diamondContainer">
        <Row>
          <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div class="triangleLeft understandTriangle">
                  <p className="whiteHeader">Phase 1 Understand
                  </p>
              </div>
          </Col>
          <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
            <div class="triangleRight defineTriangle">
                <p className="whiteHeader">Phase 2 Define
                </p>
              </div>
          </Col>
          
          <Col md="auto" className="fluid triangleBtn d-flex p-0 justify-content-around p-0">
            <div class="triangleLeft sketchTriangle">
              <p className="whiteHeader">Phase 3 Sketch
              </p>
            </div>
          </Col>

          <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
            <div class="triangleRight decideTriangle">
                <p className="whiteHeader">Phase 4 Decide
                </p>
              </div>
          </Col>

          <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div class="triangleLeft prototypeTriangle">
                  <p className="whiteHeader">Phase 5 Prototype
                  </p>
              </div>
          </Col>
          <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
            <div class="triangleRight validateTriangle">
                <p className="whiteHeader">Phase 6 Validate
                </p>
              </div>
          </Col>
          
          
        </Row>
      </Container>
        {/*------------ Not supposed to be in the final ---------- */}
        <Row>
          {methods.map((meth) => (
              <Col md="auto">
                <MethodCard key={meth.id} methodData={meth} /> 
              </Col>
              ))
          }
        </Row>
      </Container>
    </div>
  );
};

  const mapStateToProps = (state) => {
    return {
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(Methodologies);