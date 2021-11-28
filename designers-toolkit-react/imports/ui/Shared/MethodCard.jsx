import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";

export const MethodCard = ({methodData}) => (
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
            <button className="cardBtn">
                <h5 className="blackHeader cardHeader">Add</h5>
            </button>
        </Row>
    </div>
);