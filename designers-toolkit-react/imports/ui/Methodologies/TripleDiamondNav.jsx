import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "./MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const TripleDiamondNav = ({methods, methodDescriptions}) => {

    const [selectedPhase, changePhase] = useState("understandLock");
  
    function filterState(input) {
      return input.replace('Lock', '');
    }
  
    return (
      <div>
        <Container className="auto pageContainer">
  
          <Container className="diamondContainer justify-content-md-center">
            <Row className="diamondContainer justify-content-md-center">
              <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div onClick={() => changePhase("understandLock")} className={`triangleLeft understandTriangle ${selectedPhase}`}>
                      <p className="whiteHeader">Phase 1 Understand
                      </p>
                  </div>
              </Col>
              <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
                <div onClick={() => changePhase("defineLock")} className={`triangleRight defineTriangle ${selectedPhase}`}>
                    <p className="whiteHeader">Phase 2 Define
                    </p>
                  </div>
              </Col>
              
              <Col md="auto" className="fluid triangleBtn d-flex p-0 justify-content-around p-0">
              <div onClick={() => changePhase("sketchLock")} className={`triangleLeft sketchTriangle ${selectedPhase}`}>
                  <p className="whiteHeader">Phase 3 .Ideate  
                  </p>
                </div>
              </Col>
  
              <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div onClick={() => changePhase("decideLock")} className={`triangleRight decideTriangle ${selectedPhase}`}>
                    <p className="whiteHeader">Phase 4 Decide
                    </p>
                  </div>
              </Col>
  
              <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div onClick={() => changePhase("prototypeLock")} className={`triangleLeft prototypeTriangle ${selectedPhase}`}>
                      <p className="whiteHeader">Phase 5 Prototype
                      </p>
                  </div>
              </Col>
              <Col md="auto" className="fluid triangleBtn d-flex justify-content-around p-0">
              <div onClick={() => changePhase("validateLock")} className={`triangleRight validateTriangle ${selectedPhase}`}>
                    <p className="whiteHeader">Phase 6 Validate
                    </p>
                  </div>
              </Col>
            </Row>
          </Container>
  
          {/* Try to generalize this section with redux, it's too repetetive*/}
          <Container> 
            <Row>
              <Col className="justify-content-md-center d-flex">
                {selectedPhase == "understandLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 1</h3>
                    <h5 className="purpleHeader">UNDERSTAND</h5>
                    <p>In the Understand phase, the designer will aim to gather knowledge of requirements from the stakeholders. Focus lies on
                      acquiring data that will help you define your problem and goal in the Define phase. Study the user. Examine products/services that tackle
                      the issue that you are working with. Invite stakeholders to discuss opportunities and boundries. Users, business and people generally affected
                      by the issue should be given time to share their perspective. You want to understand the stakeholders deeply, so that when you move 
                      into the next phase you have a clear image of how to define all that is understood.
                    </p>
                  </div>
                }
  
                {selectedPhase == "defineLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 2</h3>
                    <h5 className="purpleHeader">DEFINE</h5>
                    <p>In the Define phase the you will contextualise the data gathered from the previous phase. You define goals and outcomes of your project,
                       and how to create the optimal solution to your project. 
                    </p>
                  </div>
                }
  
                {selectedPhase == "sketchLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 3</h3>
                    <h5 className="purpleHeader">IDEATE</h5>
                    <p>In the Ideation phase, you will ideate possible solutions. Take inspiration from products/services that try to tackle your problem. Here
                      the focus lies on proposing many, often crazy ideas rather than few, detailed ones. Think outside the box and discuss with the team how
                      ideas can be improved. 
                    </p>
                  </div>
                }
  
                {selectedPhase == "decideLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 4</h3>
                    <h5 className="purpleHeader">DECIDE</h5>
                    <p>In this phase you decide on the concept you will prototype and refine. This can be done by the team or by outside help 
                      (target users). Choose between a variety of different methods to ensure the best possible outcome.
                    </p>
                </div>
                }
  
                {selectedPhase == "prototypeLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 5</h3>
                    <h5 className="purpleHeader">PROTOTYPE</h5>
                    <p> In the Prototype phase, you bring your concept to life. The detail and work put into it can vary, depending on 
                      available time. However, it is important to create a real enough prototype so that it can be validated. 
                    </p>
                  </div>
                }
  
                {selectedPhase == "validateLock" && 
                  <div>
                    <h3 className="blackHeader">Phase 6</h3>
                    <h5 className="purpleHeader">VALIDATE</h5>
                    <p>In the Validate phase, the goal is to evaluate your prototype with the help of target users.
                      Gather feedback and note the necessary improvements. Share your progress with other stakeholders, such as the product owner(s)
                      and check the feasibility with the development team.
                    </p>
                  </div>
                }
              </Col>
            </Row>
          </Container>
  
          <Container>
            <Row>
              <Col>
                <h5 className="blackHeader">Common methods used in this phase</h5>
              </Col>
            </Row>
            <Row>
            {methods.filter(meth => meth.phase.find(ph => ph === filterState(selectedPhase))).map((meth) => (
                
                <Col md="auto">
                  <MethodCard key={meth.id} methodData={meth} /> 
                </Col>
              ))}
            
            </Row>
  
          </Container>
        </Container>
      </div>)};
  
  
    const mapStateToProps = (state) => {
      return {
        methodDescriptions: state.methodReducer.methodDescriptions,
        methods: state.methodReducer.methods,
      };
    };
  
  export default connect(mapStateToProps)(TripleDiamondNav);