import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "./MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TripleDiamondNav from "./TripleDiamondNav"
import {flipViewingMethod} from "../actions/index";

const Methodologies = ({methods, currentMethod, viewingMethod}) => {

  const [selectedPhase, changePhase] = useState("understandLock");

  export const [methodID, setMethodID] = useState(1);

  /*export const adjustPhase = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_PHASE,
        payload: {
            id: itemID,
            ph: value
        }
    }
}*/

  function filterState(input) {
    return input.replace('Lock', '');
  }

  function toString(input){
    return input.toString();
  }

  return (
    <div>
      {/* <Container className="auto pageContainer">
        <TripleDiamondNav />
      </Container>
        
      
      <div className="row">
        <div className="col-sm-3 method-section-methodologies">
          <div className="row justify-content-md-center">
            {methods.map((meth) => (
              <div className="col">
                <MethodCard key={meth.id} methodData={meth} /> 
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          {currentMethod.map((md) => (
              <div className="col float-md-right">
                <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
                </div>
            ))}
        </div>
      </div> */}

      {!viewingMethod && 
      
        <Container className="auto pageContainer">
          <TripleDiamondNav />
        </Container>
      
      }

      {viewingMethod && 
        <Container>
          <div className="col">
            {currentMethod.map((md) => (
                <div className="col float-md-right">
                  <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
                  </div>
              ))}
          </div>
        </Container>
      }
    
    </div>
  )};


  const mapStateToProps = (state) => {
    return {
      currentMethod: state.methodReducer.currentMethod,
      methods: state.methodReducer.methods,
      viewingMethod: state.methodReducer.viewingMethod
    };
  };

export default connect(mapStateToProps)(Methodologies);