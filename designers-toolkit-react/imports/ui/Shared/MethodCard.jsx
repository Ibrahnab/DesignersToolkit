import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {addToSprint} from "../actions/index";
import {connect} from "react-redux";

const MethodCard = ({methodData, addToSprint}) => {

    return (
        <div className="methodCard">
        
        <Row className="justify-content-md-center">
            <img className="cardImg" src={methodData.image}></img>
        </Row>

        <Row className="justify-content-md-center">
            <h5 className="blackHeader cardHeader">{methodData.name}</h5>
        </Row>

        <Row className="justify-content-md-center">
            <Col>
                <img className="cardIcon" src="personIcon.svg"/>
                <p className="blackHeader cardHeader">{methodData.participants}</p>
            </Col>
            <Col>
                <img className="cardIcon" src="clockIcon.svg"/>
                <p className="blackHeader cardHeader">{methodData.time}m</p>
            </Col>
            <Col>
                <img className="cardIcon" src="tripleDiamondIcon.svg"/>
                    {methodData.phase.map((phase) => (
                        <div id="circle" className={`circle + ${phase}`}></div>
                    ))}
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <button onClick={()=>addToSprint(methodData.id)}className="cardBtn">
                <h5 className="blackHeader cardHeader btnHead">Add</h5>
            </button>
        </Row>
    </div>
    )
    
};

const mapDispatchToProps = dispatch => {
    return {
        addToSprint: (id) => dispatch(addToSprint(id))
    };
};

export default connect(null,mapDispatchToProps)(MethodCard);