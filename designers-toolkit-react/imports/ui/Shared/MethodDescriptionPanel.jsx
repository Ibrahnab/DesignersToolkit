import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {loadCurrentMethod} from "../actions/index";
import {connect} from "react-redux";


const MethodDescriptionPanel = ({methodDescriptionData}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="methodDescriptionPanel">
            <div className="row justify-content-md-center mt-3">
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
        
            <div className="row justify-content-md-center mt-4">
                <Col md="auto">
                    <img className="methodDescriptionImage" src={methodDescriptionData.image}></img>
                </Col>
            </div>

            <div className="row justify-content-md-center mt-2">
                <Col md="auto">
                    <h5 className="methodDescriptionHeader">{methodDescriptionData.name}</h5>
                </Col>
            </div>

            <div className="row justify-content-md-center mt-1">
                <div className="col-sm-6">
                    <p className="methodDescriptionBodyText">{methodDescriptionData.description}</p>
                </div>
            </div>

            <div className="row justify-content-md-center mt-3">
                <Col md="auto">
                    <img src="participants_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.participants}</p>
                </Col>
                <Col md="auto" className="method-icons-left-margin">
                    <img src="clock_big.svg"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.time}m</p>
                </Col>
                <Col md="auto" className="method-icons-left-margin mt-2">
                    <img src="triplediamond_big.svg"/>
                    <div className="row justify-content-md-center">
                        {methodDescriptionData.phase.map((phase) => (
                                <Col md="auto" className="mt-3">
                                    <div className={`method-circle + ${phase}`}></div>
                                </Col>

                        ))}
                    </div>
                </Col>
            </div>
            <div className="row">
            {methodDescriptionData.steps.map((step) =>(
                <div className="row justify-content-center">
                    <div className="col-sm-1 ml-3">
                        <div className="stepCircle"><p>{count}</p></div> 
                    </div>
                    <div className="col-sm-6 md-2">
                        <p className="method-step-text">{step}</p>
                    </div>
                </div>
                    ))}
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