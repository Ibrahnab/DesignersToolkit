import React, {useState, useEffect} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from "react-redux";
import HamburgerMenu from "./HamburgerMenu"


const NavBar = ({currentSprintMethods}) => {

const [sprintCount, setSprintCount] = useState(0);
const [barlock, setBarLock] = useState()
const [burgerState, changeState] = useState(false)

  useEffect(() => {
    let count=0;
    currentSprintMethods.forEach((item)=>{
      count+= 1;
    });
    setSprintCount(count);
  }, [currentSprintMethods, sprintCount])

  function getActiveRoute() {
    const location = useLocation();
    console.log(location.pathname); 
    return location.pathname;
  }


  return (
    <div>

      <div className="filler"></div>

      <div className="navContainer sticky">
        <Container>
          <Row className="alignNavBarText">
          <Col><Link to="/"><img className="logoImg" src='Logo.svg'/></Link></Col>
          {/* <img  class="logo" src="logo.png"/> */}
            <Col className="d-flex">
              <NavLink to="/introduction" activeClassName="underline" className="navLink">
                <h2 className="whiteHeader navText">Introduction</h2>
                <div className={ 'underscore' + (getActiveRoute() == "/introduction" ? " activated" : "")}></div>
              </NavLink>
            </Col>
            
            <Col className="d-flex">
              <NavLink to="/methodologies" activeClassName="underline" className="navLink">
                <h2 className="whiteHeader navText">Methodologies</h2>
                <div className={ 'underscore' + (getActiveRoute() == "/methodologies" ? " activated" : "")}></div>
              </NavLink>
            </Col>

            <Col className="d-flex">
              <NavLink to="/currentplan" activeClassName="underline" className="navLink">
                <h2 className="whiteHeader navText">Sprint Plan {sprintCount}</h2>
                <div className={ 'underscore' + (getActiveRoute() == "/currentplan" ? " activated" : "")}></div>
              </NavLink>
            </Col>
            <Col ><div className="searchBtn" onClick={()=> changeState(!burgerState)}><img src="searchIcon.svg"></img></div></Col>
          </Row>
        </Container>

        {burgerState && <HamburgerMenu></HamburgerMenu>}
      </div>
    </div>
    
  )
}; 

const mapStateToProps = (state) => {
  return{
    currentSprintMethods: state.methodReducer.currentSprintMethods,
  };
};

export default connect(mapStateToProps)(NavBar);