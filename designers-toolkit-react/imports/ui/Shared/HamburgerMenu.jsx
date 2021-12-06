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

    const [navbarOpen, setNavbarOpen] = useState(false)

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
              <Row className="firstSearchRow">
                <Col>
                  <p className="smallBlackHeader">Select phases</p>
                </Col>
                
              </Row>
              <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Understand" name="group1" />
                      <Form.Check type="checkbox" inline label="Define" name="group1" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Sketch" name="group1" />
                      <Form.Check type="checkbox" inline label="Decide" name="group1" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" inline label="Prototype" name="group1" />
                      <Form.Check type="checkbox" inline label="Validate" name="group1" />
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
                  <input className="inputNumber" type="number"></input>
                </Col>
              </Row>

              <Row className="firstSearchRow">
              {methods.filter(meth => meth.phase.find(ph => ph === "define")).map((meth) => (
                
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