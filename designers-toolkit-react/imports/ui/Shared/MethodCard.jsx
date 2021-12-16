import React, {useState, useEffect, useRef} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import methodReducer from "../reducers/methodReducer";
import {addToSprint, adjustPhase, showCurrentMethod, removeFromSprint, flipViewingMethod, removePhaseFromMethod} from "../actions/index";
import {connect} from "react-redux";
import DropDownMenu from "./DropDownMenu"
import { Link, useLocation, NavLink } from "react-router-dom";
import {setMethodID} from "../Methodologies/Methodologies";
import Form from "react-bootstrap/Form";

const MethodCard = ({methodData, addToSprint, adjustPhase, removeFromSprint, showCurrentMethod, flipViewingMethod, viewingMethod, removePhaseFromMethod, isinPlan, underPhase}) => {

    var [phases, setPhases] = useState([])

    function addThisMethod(phase){
        adjustPhase(methodData.id, `${phase}`);
        addToSprint(methodData.id, `${phase}`);
        setPhases(phases =[...phases , `${phase}`]);
        //console.log(phases);
    }
    function removeThisMethod(incPhase){
        removePhaseFromMethod(methodData.id, `${incPhase}`);
        removeFromSprint(methodData.id, `${incPhase}`);
        setPhases(phases= phases.filter((phase) => (phase !== incPhase)));
        //console.log(phases);
    }
  
    const [isActive, setIsActive] = useState(false);

    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }

    function isInMethodologies() {
        const location = useLocation();
        return includes(location.pathname,"Methodologies");
    }

    function blurHandler() {
        setIsActive(!false);
    }

    const handleBlur = (e) => {
        setIsActive(false);
        console.log("blurred");
    }

    const handleFocus = (e) => {
        console.log("focused");
        setIsActive(true);
    }

    const [inputRef, setInputFocus] = useFocus();
    return (
        <div className="methodCard">
        <Container className="methodContainer p-0">
        <Row className="justify-content-md-center">
            <Col className="justify-content-md-center d-flex">
                <NavLink to="/methodologies" className="cardNav p-0">
                    <img onClick={()=>{{!viewingMethod ? flipViewingMethod(): undefined}; showCurrentMethod(methodData.id)}} className="cardImg" src={methodData.image}></img>
                </NavLink>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col>
            <h5 className="blackHeader cardHeader">{methodData.name}</h5>
            </Col>
        </Row>

        <div className="row justify-content-md-center fluid">
            <div className="col-auto fluid iconCol">
                <img className="cardIcon" src="personIcon2.svg"/>
                <p className="blackHeader cardHeader">{methodData.participantRange}</p>
            </div>
            <div className="col-auto fluid iconCol">
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <img className="cardIcon" src="clockIcon2.svg"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-auto">
                        <p className="blackHeader cardHeader fluid">{methodData.timeRange}</p>
                    </div>
                </div>
            </div>
            <div className="col-auto fluid">
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
                    
            </div>
        </div>
        <Row className="justify-content-md-center">
            {/* <button onClick={()=>{()=>addToSprint(methodData.id); 
                (e) => setIsActive(!isActive)}}className="cardBtn">
                <h5 className="blackHeader cardHeader btnHead">Add</h5>
            </button> */}
            <Col className="justify-content-md-center d-flex">
            {!isinPlan &&<button className="cardBtn" onClick={(e) => {setIsActive(!isActive); setInputFocus}}>
                <h5 className="blackHeader cardHeader btnHead">Add</h5>
            </button>}
            {isinPlan &&<button onClick={ 
                ()=> removeThisMethod(`${underPhase}`)}className="cardBtn">
                <h5 className="blackHeader cardHeader btnHead">Remove</h5>
            </button>}
            </Col>
            
        </Row>
        {isActive && (
                <div className="dropDownMenu" tabIndex={0} onBlur={handleBlur} onFocus={handleFocus} ref={inputRef}>
                    {methodData.phase.map((phase) => (
                    <div className="row">
                        <div className="col-6">
                            <Form.Check type="checkbox" inline label={phase} onChange={()=> {phases.indexOf(`${phase}`) > -1 ? 
                            removeThisMethod(phase):addThisMethod(phase)}}/>

                        </div>
                    </div>
                    ))}
                </div>
            )}
             </Container>
    </div>
   
    )
    
};


const mapStateToProps = (state) => {
    return {
      viewingMethod: state.methodReducer.viewingMethod
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        addToSprint: (id, itemPhase) => dispatch(addToSprint(id,itemPhase)),
        adjustPhase: (id, itemPhase) => dispatch(adjustPhase(id, itemPhase)),
        removeFromSprint: (id,itemPhase) => dispatch(removeFromSprint(id,itemPhase)),
        showCurrentMethod:(id,itemPhase) => dispatch(showCurrentMethod(id,itemPhase)),
        removePhaseFromMethod:(id,itemPhase) => dispatch(removePhaseFromMethod(id,itemPhase)),
        flipViewingMethod: () => dispatch(flipViewingMethod())

/*<div className={`phaseBtn + ${phase}`}>
                            <p className="whiteHeader phase" 
                            onClick={()=>{adjustPhase(methodData.id, `${phase}`);addToSprint(methodData.id, {phase})}
                            }>{phase}</p>
                            </div>
                            
                            
                            {methodData.currentPhase !== "none" && (
                        <div className={`phaseBtn none`}>
                        <p className="whiteHeader phase" 
                        onClick={()=>{adjustPhase(methodData.id, "none");removeFromSprint(methodData.id)
                        }}>remove</p>
                    </div>
                    )}*/
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MethodCard);
