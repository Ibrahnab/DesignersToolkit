import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "../Shared/MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import RangeSlider from 'react-bootstrap-range-slider';

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { flipHamburger } from "../actions";

const HamburgerMenu = ({methods, flipHamburger}) => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [search, setSearchState] = useState("");
    const [timeState, setTimeState] = useState(60);
    const [participantsState, setParticipantsState] = useState(3);
    const [checkedState, setCheckedState] = useState(
      new Array(6).fill(true)
    );
    const phaseArray = ["understand", "define", "sketch", "decide", "prototype", "validate"]
    const [selectedPhaseArray, setPhaseArray] = useState(["understand", "define", "sketch", "decide", "prototype", "validate"]);

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);

      setPhaseArray(updatedCheckedState.map((value, index) => value ? phaseArray[index] : "none"));

    };

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

      const closeMenu = () => {
        setNavbarOpen(false)
      }
    function searchValidate(methodName,userInput) {
      const m1 = methodName.toLowerCase();
      const m2 = userInput.toLowerCase();

      return m1.includes(m2);
    }
      
    function blurHandler() {
        setIsActive(!false);
    }

    const handleBlur = (e) => {
        setIsActive(e.target.value);
        console.log("blurred");
    }

    return (
        <div className="navBar2">
            {/* <nav className="navBar">
                <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
            </nav> */}
            <Container className="firstSearchRow">
              <Row className="firstSearchRow">
                <Col sm="10" className="d-flex"><h5 className="blackHeader">Search for design methods</h5></Col>
                <Col sm="1"><img className="crossIcon" onClick={() => flipHamburger()} src="crossIcon.svg"></img></Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Search method name" onChange={(e)=> setSearchState(e.target.value)} />
                </Col>
              </Row>

              <Row><Col><hr></hr></Col></Row>

              <Row className="firstSearchRow">
                <Col>
                  <p className="smallBlackHeader">Select phases</p>
                </Col>
                
              </Row>
              
              {/* <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Understand" name="group1" checked={checkedState[0]} onChange={() => handleOnChange(0)} />
                      <Form.Check type="checkbox" inline label="Define" name="group1"  checked={checkedState[1]} onChange={() => handleOnChange(1)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Sketch" name="group1"  checked={checkedState[2]} onChange={() => handleOnChange(2)}/>
                      <Form.Check type="checkbox" inline label="Decide" name="group1"  checked={checkedState[3]} onChange={() => handleOnChange(3)} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Prototype" name="group1"  checked={checkedState[4]} onChange={() => handleOnChange(4)} />
                      <Form.Check type="checkbox" inline label="Validate" name="group1" checked={checkedState[5]} onChange={() => handleOnChange(5)} />
                    </Col>
                  </Row> */}
              <Row className="firstSearchRow">
                <Col>
                  <Form.Check type="checkbox" inline label="Understand" name="group1" checked={checkedState[0]} onChange={() => handleOnChange(0)} /> <br />
                  <Form.Check type="checkbox" inline label="Sketch" name="group1"  checked={checkedState[2]} onChange={() => handleOnChange(2)}/> <br />
                  <Form.Check type="checkbox" inline label="Prototype" name="group1"  checked={checkedState[4]} onChange={() => handleOnChange(4)} /> <br />
                </Col>
                <Col>
                <Form.Check type="checkbox" inline label="Define" name="group1"  checked={checkedState[1]} onChange={() => handleOnChange(1)}/> <br />
                <Form.Check type="checkbox" inline label="Decide" name="group1"  checked={checkedState[3]} onChange={() => handleOnChange(3)} /> <br />
                  <Form.Check type="checkbox" inline label="Validate" name="group1" checked={checkedState[5]} onChange={() => handleOnChange(5)} /> <br />
                
                </Col>
              </Row>

              <Row className="firstSearchRow">
                <Col>
                <p className="smallBlackHeader">Amount of time</p>
                </Col>
                <Col>
                  {/* <SimpleSlider></SimpleSlider> */}
                  <RangeSlider value={timeState} onChange={(e) => setTimeState(e.target.value)}></RangeSlider>
                </Col>
              </Row>
              <Row className="firstSearchRow">
                <Col>
                  <p className="smallBlackHeader">Amount of participants</p>
                </Col>
                <Col>
                  <input className="inputNumber" type="number" value={participantsState} onChange={(e) => setParticipantsState(e.target.value)}></input>
                </Col>
              </Row>
              <Row><Col><hr></hr></Col></Row>

              <Row className="firstSearchRow">
              {methods.filter(meth => 
                meth.participants <= participantsState &&  //Filter by the amount of particioants selected
                meth.time <= timeState && //Filter by the applied time
                (meth.phase.find((phase) => selectedPhaseArray.includes(phase)) && //Filter by selected phases
                searchValidate(meth.name,search)) //Filter by user search input
                ).map((meth) => (
                
                <Col md="auto">
                  <MethodCard key={meth.id} methodData={meth} /> 
                </Col>
              ))}
              </Row>
              <Row className="rowFiller"></Row>
            </Container>
            
        </div>
    );
}

const SimpleSlider = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );

};

const mapDispatchToProps = dispatch => {
  return {
    flipHamburger: () => dispatch(flipHamburger())
  }
  
}

const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
      isHamburgerOpen: state.methodReducer.isHamburgerOpen
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);