import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MethodCard from "../Shared/MethodCard";
import { suggestMethods } from "../actions/index";
import { connect } from "react-redux";

const CurrentPlan = ({currentSprintMethods, suggestedMethods, suggestMethods}) => {

    return(
    <div>
      
      <Container className="pageContainer">
        <Row>
          <Col>
            <img className="tinyTripleDiamond" src="tinyTripleDiamond.svg"></img>
          </Col>
        </Row>
        <Row className="sprintsContainer">
          <Col className="sprintCol">
            <Row>
              <Col><div className="circle sprint understand"></div></Col>
              <Col><h5 className="blackHeader">Understand</h5></Col>
            </Row>
            {currentSprintMethods.filter(meth => meth.currentPhase === "understand").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("understand")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
            ))}
          </Col>
          <Col className="sprintCol">

          <Row>
              <Col><div className="circle sprint define"></div></Col>
              <Col><h5 className="blackHeader">Define</h5></Col>
            </Row>

            {currentSprintMethods.filter(meth => meth.currentPhase === "define").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("define")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
            ))}
          </Col>
          <Col className="sprintCol">
          <Row>
              <Col><div className="circle sprint sketch"></div></Col>
              <Col><h5 className="blackHeader">Sketch</h5></Col>
            </Row>

            {currentSprintMethods.filter(meth => meth.currentPhase === "sketch").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("sketch")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
            ))}
          </Col>
          <Col className="sprintCol">

          <Row>
              <Col><div className="circle sprint decide"></div></Col>
              <Col><h5 className="blackHeader">Decide</h5></Col>
            </Row>

            {currentSprintMethods.filter(meth => meth.currentPhase === "decide").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("decide")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
            ))}
          
          </Col>

          <Col className="sprintCol">
          <Row>
              <Col><div className="circle sprint prototype justify-content-md-center"></div></Col>
              <Col><h5 className="blackHeader">Prototype</h5></Col>
            </Row>

            {currentSprintMethods.filter(meth => meth.currentPhase === "prototype").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("prototype")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
            ))}
          
          </Col>
          <Col className="sprintCol">
          <Row>
              <Col><div className="circle sprint validate"></div></Col>
              <Col><h5 className="blackHeader">Validate</h5></Col>
            </Row>
            {currentSprintMethods.filter(meth => meth.currentPhase === "validate").map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
            ))}
            <button onClick={()=>{suggestMethods("validate")}} className="currentplan-add-button"><img className="currentplan-plus-img" src="plus_img.svg"></img></button>
            {suggestedMethods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
                </div>
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
    suggestedMethods: state.methodReducer.suggestedMethods,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      suggestMethods: (id) => dispatch(suggestMethods(id)),
  };
};

  export default connect(mapStateToProps,mapDispatchToProps)(CurrentPlan);