import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "../Shared/MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Methodologies = ({methods, methodDescriptions}) => {

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
                <p className="whiteHeader">Phase 3 Sketch
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
                  <p>In the Understand phase, you will create a shared knowledge base
                     across all participants. Using the Lightning Talk method, knowledge
                      experts across the business are invited to articulate the problem 
                      space from business, user, competitor, and technological angles.</p>
                </div>
              }

              {selectedPhase == "defineLock" && 
                <div>
                  <h3 className="blackHeader">Phase 2</h3>
                  <h5 className="purpleHeader">DEFINE</h5>
                  <p>In the Define phase, the team evaluates everything they 
                    learned in the Understand phase to establish focus. This 
                    is done by defining specific context and desired outcomes 
                    of potential solutions. The phase concludes by choosing a 
                    specific focus for your Sprint, as well as goals, success metrics, and signals.
                  </p>
                </div>
              }

              {selectedPhase == "sketchLock" && 
                <div>
                  <h3 className="blackHeader">Phase 3</h3>
                  <h5 className="purpleHeader">SKETCH</h5>
                  <p>In the Sketch phase, the Design Sprint team generates
                     and shares a broad range of ideas as individuals.
                      You will start by looking for inspiration, such as
                       solutions in alternative spaces. Then, each Design Sprint 
                       participant will individually generate ideas for consideration.
                        From there, the team will narrow down ideas as group to
                         a single, well-articulated Solution Sketch per person.</p>
                </div>
              }

              {selectedPhase == "decideLock" && 
                <div>
                  <h3 className="blackHeader">Phase 4</h3>
                  <h5 className="purpleHeader">DECIDE</h5>
                  <p>In the Decide phase, the Design Sprint team finalizes
                     the direction or concept to be prototyped. Each participant 
                     will share their Solution Sketch, and the team will find
                      consensus on a single idea through decision-making exercises.
                       The final direction will aim to address the Design Sprint focus.

                  </p>
              </div>
              }

              {selectedPhase == "prototypeLock" && 
                <div>
                  <h3 className="blackHeader">Phase 5</h3>
                  <h5 className="purpleHeader">PROTOTYPE</h5>
                  <p> In the Prototype phase, the Design Sprint team will work 
                    together to create a prototype of your concept. This is when 
                    many decisions are made around what exactly the concept is
                     and includes. You will aim to create a prototype that is
                      just real enough to validate, and you will do it really fast!</p>
                </div>
              }

              {selectedPhase == "validateLock" && 
                <div>
                  <h3 className="blackHeader">Phase 6</h3>
                  <h5 className="purpleHeader">VALIDATE</h5>
                  <p>In the Validate phase, the Design Sprint team will put
                     your concept in front of users - this is your moment of 
                     truth! You will gather feedback from users who interact
                      with your prototype, and if relevant, you will conduct 
                      stakeholder and technical feasibility reviews. You’ll 
                      end your Sprint with a validated concept– or an invalidated 
                      concept to improve on. Either way, you’ve made progress.</p>
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
      <div className="row">
          {methods.map((meth) => (
            <div className="col">
              <MethodCard key={meth.id} methodData={meth} /> 
            </div>
          ))}
      </div>
      <div className="row">
         {methodDescriptions.map((md) => (
           <div className="col">
            <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
            </div>
        ))}
      </div>

    </div>)};


  const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(Methodologies);