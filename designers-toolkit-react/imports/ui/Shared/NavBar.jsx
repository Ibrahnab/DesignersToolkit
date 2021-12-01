import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from "react-redux";


const NavBar = ({currentSprintMethods}) => {

const [sprintCount, setSprintCount] = useState(0);

  useEffect(() => {
    let count=0;
    currentSprintMethods.forEach((item)=>{
      count+= 1;
    });
    setSprintCount(count);
  }, [currentSprintMethods, sprintCount])

  return (
    <div className="navContainer">
    <Container>
      <Row className="alignNavBarText">
      <Col><Link to="/"><img className="logoImg" src='Logo.svg'/></Link></Col>
      {/* <img  class="logo" src="logo.png"/> */}
        <Col><Link to="/introduction" className="navText">Introduction</Link></Col>
        <Col><Link to="/methodologies" className="navText">Methodologies</Link></Col>
        <Col><Link to="/currentplan" className="navText">Sprint Plan {sprintCount}</Link></Col>
      </Row>
    </Container>
  </div>
  )
}; 

const mapStateToProps = (state) => {
  return{
    currentSprintMethods: state.methodReducer.currentSprintMethods,
  };
};

export default connect(mapStateToProps)(NavBar);