import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {addToSprint, adjustPhase, removeFromSprint} from "../actions/index";
import {connect} from "react-redux";
import DropDownMenu from "./DropDownMenu"

const MethodCard = ({methodData, addToSprint, adjustPhase, removeFromSprint}) => {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className="methodCard">
<Container className="methodContainer p-0">
        <Row className="justify-content-md-center">
            <Col className="justify-content-md-center d-flex">
            <img className="cardImg" src={methodData.image}></img>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col>
            <h5 className="blackHeader cardHeader">{methodData.name}</h5>
            </Col>
        </Row>

        <Row md="auto" className="justify-content-md-center fluid">
            <Col  md="auto" className="fluid iconCol">
                <img className="cardIcon" src="personIcon2.svg"/>
                <p className="blackHeader cardHeader">{methodData.participants}</p>
            </Col>
            <Col  md="auto" className="fluid iconCol">
                <img className="cardIcon" src="clockIcon2.svg"/>
                <p className="blackHeader cardHeader fluid">{methodData.time}m</p>
            </Col>
            <Col md ="auto" className="fluid">
                <Row>
                    <Col md="auto" className="iconCol fluid">
                        <img className="cardIcon" src="tripleDiamondIcon2.svg"/>
                    </Col>
                </Row>
                <Row className="row justify-content-md-center">
                {/* <div className="row justify-content-md-center"> */}
                    {methodData.phase.map((phase) => (
                        <Col md="auto" className="circleCol fluid p-1">
                            <div id="circle" className={`circle + ${phase}`}></div>
                        </Col>
                    ))}
                </Row>
                    
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            {/* <button onClick={()=>{()=>addToSprint(methodData.id); 
                (e) => setIsActive(!isActive)}}className="cardBtn">
                <h5 className="blackHeader cardHeader btnHead">Add</h5>
            </button> */}
            <Col className="justify-content-md-center d-flex">
            <button onClick={ 
                (e) => setIsActive(!isActive)}className="cardBtn">
                <h5 className="blackHeader cardHeader btnHead">Add</h5>
            </button>
            </Col>
            
        </Row>
        {isActive && (
                <div className="dropDownMenu">

                    {methodData.phase.map((phase) => (

                    <div className="col">
                        <div className={`phaseBtn + ${phase}`}>
                            <p className="whiteHeader phase" 
                            onClick={()=>{adjustPhase(methodData.id, `${phase}`);addToSprint(methodData.id, {phase})}
                            }>{phase}</p>
                        </div>

                    </div>
                    ))}
                    {methodData.currentPhase !== "none" && (
                        <div className={`phaseBtn none`}>
                        <p className="whiteHeader phase" 
                        onClick={()=>{adjustPhase(methodData.id, "none");removeFromSprint(methodData.id)
                        }}>remove</p>
                    </div>
                    )}

                </div>
            )}
             </Container>
    </div>
   
    )
    
};

const mapDispatchToProps = dispatch => {
    return {
        addToSprint: (id) => dispatch(addToSprint(id)),
        adjustPhase: (id, ph) => dispatch(adjustPhase(id, ph)),
        removeFromSprint: (id) => dispatch(removeFromSprint(id))
    };
};

export default connect(null,mapDispatchToProps)(MethodCard);