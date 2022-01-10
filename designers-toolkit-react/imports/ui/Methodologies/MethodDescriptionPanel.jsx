import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {loadCurrentMethod} from "../actions/index";
import {connect} from "react-redux";
import {flipViewingMethod} from "../actions/index";


const MethodDescriptionPanel = ({methodDescriptionData, viewingMethod, flipViewingMethod}) => {

    return (
        <div className="methodDescriptionPanel">
            <div className="row justify-content-md-center mt-3">
                <Col className="d-flex">
                <div className="backBtn" >
                    <img src="backBtn.svg" onClick={() => flipViewingMethod()}></img>
                </div>
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
                    <img src="personIcon2.svg" className="methodDescriptionIcon mt-2"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.participantRange}</p>
                </Col>
                <Col md="auto" className="method-icons-left-margin">
                    <img src="clockIcon.svg" className="methodDescriptionIcon mt-2"/>
                    <p className="blackHeader cardHeader">{methodDescriptionData.timeRange}</p>
                </Col>
                <Col md="auto" className="method-icons-left-margin">
                    <div className="row justify-content-md-center">
                        <div className="col-auto">
                        <img src="tripleDiamondIcon2.svg" className="methodDescriptionIcon"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        {methodDescriptionData.phase.map((phase) => (
                                <Col md="auto" className="mt-3">
                                    <div className={`method-circle + ${phase}`}></div>
                                </Col>

                        ))}
                    </div>
                </Col>
            </div>
            <div className="row justify-content-md-center mb-3">
                <div className="col-sm-6 md-2">
                    {methodDescriptionData.steps.map((step) =>(
                        <div className="row justify-content-md-center">
                            <div className="col-sm-2 mt-3">
                            <div className="stepCircle"><p className="step-number-text">{methodDescriptionData.steps.indexOf(step)+1}</p></div>
                            </div>
                            <div className="col mt-3">
                            <p className="method-step-text">{step}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
    
};

/*{methodDescriptionData.stepsNrb.map((nbr) =>(
                        <div className="col-sm-1 ml-3">
                            <div className="stepCircle"><p>{nbr}</p></div> 
                        </div>
                    ))}*/

                    
const mapDispatchToProps = dispatch => {
    return {
        loadCurrentMethod: (id) => dispatch(loadCurrentMethod(id)),
        flipViewingMethod: () => dispatch(flipViewingMethod())
    };
};

/*<div className="row justify-content-md-center mt-3">
                <Col md="auto" className="adjust-col-width">
                    <div className="triangle-understand">
                        <div classNmae="row ">
                            <div className="col">
                                <div className="triangle-smaller-understand"/>
                            </div>
                        </div>
                    </div>
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
            </div>*/
const mapStateToProps = (state) => {
    return {
      viewingMethod: state.methodReducer.viewingMethod
    };
  };

export default connect(mapStateToProps ,mapDispatchToProps)(MethodDescriptionPanel);