import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MethodCard from "../Shared/MethodCard";

import { connect } from "react-redux";

const CurrentPlan = ({methods, currentSprintMethods}) => {

    return(
    <div>
      
      <Container>
        <Row><img className="tinyTripleDiamond" src="tinyTripleDiamond.svg"></img></Row>
        <Row>
          <Col className="sprintCol">{currentSprintMethods.map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}</Col>
          <Col className="sprintCol">
          
          {currentSprintMethods.filter(meth => meth.currentPhase === "define").map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}

          </Col>
          <Col className="sprintCol">
          {currentSprintMethods.filter(meth => meth.currentPhase === "sketch").map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}
          
          </Col>
          <Col className="sprintCol">

          <div className="circle sprint decide"></div>
          {currentSprintMethods.filter(meth => meth.currentPhase === "decide").map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}
          
          </Col>
          <Col className="sprintCol">
          {currentSprintMethods.filter(meth => meth.currentPhase === "prototype").map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}
          
          </Col>
          <Col className="sprintCol">
          {currentSprintMethods.filter(meth => meth.currentPhase === "validate").map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}
          
          </Col>
        </Row>
      </Container>
    </div>
  ); 
};

const mapStateToProps = (state) => {
  return {
    methods: state.methodReducer.methods,
    currentSprintMethods: state.methodReducer.currentSprintMethods,
  };
};

  export default connect(mapStateToProps)(CurrentPlan);