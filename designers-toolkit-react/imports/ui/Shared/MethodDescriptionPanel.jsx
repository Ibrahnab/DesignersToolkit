import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {loadCurrentMethod} from "../actions/index";
import {connect} from "react-redux";

const MethodDescriptionPanel = ({methodDescriptionData}) => {

    return (
        <div className="methodDescriptionPanel">
        
            <Row className="justify-content-md-center">
                <img className="methodDescriptionImage" src={methodDescriptionData.image}></img>
            </Row>

            <Row className="justify-content-md-center">
                <h5 className="methodDescriptionHeader">{methodDescriptionData.name}</h5>
            </Row>

            <Row className="justify-content-md-center">
                <p className="methodDescriptionBodyText">{methodDescriptionData.description}</p>
            </Row>

            <Row className="justify-content-md-center">
                <Col>
                    <img className="cardIcon" src="participants_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.participants}</p>
                </Col>
                <Col>
                    <img className="cardIcon" src="clock_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.time}m</p>
                </Col>
                <Col>
                    <img src="triplediamond_big.svg"/>
                    {methodDescriptionData.phase.map((phase) => (
                    <div className="col">
                    <div id="circle" className={`circle + ${phase}`}></div>
                    </div>))}
                </Col>
            </Row>
            <Row>
                <Col>
                {methodDescriptionData.steps.map((step) =>(
                <p>{step}</p>
                    ))}
                </Col>
            </Row>
        </div>
    )
    
};

const mapDispatchToProps = dispatch => {
    return {
        loadCurrentMethod: (id) => dispatch(loadCurrentMethod(id))
    };
};

export default connect(null,mapDispatchToProps)(MethodDescriptionPanel);