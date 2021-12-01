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
            <div className="row justify-content-md-center">
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-understand"></div>
                </Col>
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-define"></div>
                </Col>
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-sketch"></div>
                </Col>
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-decide"></div>
                </Col>
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-prototype"></div>
                </Col>
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-validate"></div>
                </Col>
            </div>
        
            <div className="row justify-content-md-center">
                <img className="methodDescriptionImage" src={methodDescriptionData.image}></img>
            </div>

            <div className="row justify-content-md-center">
                <h5 className="methodDescriptionHeader">{methodDescriptionData.name}</h5>
            </div>

            <div className="row justify-content-md-center">
                <p className="methodDescriptionBodyText">{methodDescriptionData.description}</p>
            </div>

            <div className="row justify-content-md-center">
                <div className="col">
                    <img className="cardIcon" src="participants_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.participants}</p>
                </div>
                <div className="col">
                    <img className="cardIcon" src="clock_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.time}m</p>
                </div>
                <div className="col">
                    <img src="triplediamond_big.svg"/>
                    {methodDescriptionData.phase.map((phase) => (
                    <div className="col">
                    <div id="circle" className={`circle + ${phase}`}></div>
                    </div>))}
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="stepCircle"></div>
                {methodDescriptionData.steps.map((step) =>(
                <p>{step}</p>
                    ))}
                </div>
            </div>
        </div>
    )
    
};

const mapDispatchToProps = dispatch => {
    return {
        loadCurrentMethod: (id) => dispatch(loadCurrentMethod(id))
    };
};

export default connect(null,mapDispatchToProps)(MethodDescriptionPanel);