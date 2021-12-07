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

const HamburgerMenu = ({methods}) => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [search, setSearchState] = useState("understand");
    const [timeState, setTimeState] = useState(50);
    const [participantsState, setParticipantsState] = useState(1);
    const [checkedState, setCheckedState] = useState(
      new Array(6).fill(false)
    );
    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
    
      setCheckedState(updatedCheckedState);

    };


    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

      const closeMenu = () => {
        setNavbarOpen(false)
      }

      

    return (
        <div className="navBar2">
            {/* <nav className="navBar">
                <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
            </nav> */}
            <Container>
              <Row className="firstSearchRow">
                <Col sm="10" className="d-flex"><h5 className="blackHeader">Search for design methods</h5></Col>
                <Col sm="1"><img src="crossIcon.svg"></img></Col>
              </Row>

              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Normal text" onChange={(e)=> setSearchState(e.target.value)} />
                </Col>
              </Row>

              <Row><Col><hr></hr></Col></Row>

              <Row className="firstSearchRow">
                <Col>
                  <p className="smallBlackHeader">Select phases</p>
                </Col>
                
              </Row>
              
              <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Understand" name="group1" checked={checkedState[1]} onChange={() => handleOnChange(1)} />
                      <Form.Check type="checkbox" inline label="Define" name="group1"  checked={checkedState[2]} onChange={() => handleOnChange(2)}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Sketch" name="group1"  checked={checkedState[3]} onChange={() => handleOnChange(3)}/>
                      <Form.Check type="checkbox" inline label="Decide" name="group1"  checked={checkedState[4]} onChange={() => handleOnChange(4)} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Prototype" name="group1"  checked={checkedState[5]} onChange={() => handleOnChange(5)} />
                      <Form.Check type="checkbox" inline label="Validate" name="group1" checked={checkedState[6]} onChange={() => handleOnChange(6)} />
                    </Col>
                  </Row>


              <Row className="firstSearchRow">
                <Col>
                <p className="smallBlackHeader">Amount of time</p>
                </Col>
                <Col>
                  <SimpleSlider></SimpleSlider>
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
              {methods.filter(meth => meth.name == search).map((meth) => (
                
                <Col md="auto">
                  <MethodCard key={meth.id} methodData={meth} /> 
                </Col>
              ))}
              </Row>
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


const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(HamburgerMenu);