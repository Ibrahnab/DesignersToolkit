import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "../Shared/MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TripleDiamondNav from "./TripleDiamondNav"

const Methodologies = ({methods, methodDescriptions}) => {

  const [selectedPhase, changePhase] = useState("understandLock");

  function filterState(input) {
    return input.replace('Lock', '');
  }

  return (
    <div>
      <Container className="auto pageContainer">
        <TripleDiamondNav />

        {/* ---------------------------------------- */}
      </Container>
      <div className="row">
          {methods.map((meth) => (
            <div className="col">
              <MethodCard key={meth.id} methodData={meth} /> 
            </div>
          ))}
      </div>
      <div className="row">
         {methodDescriptions.map((md) => (
           <div className="col">
            <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
            </div>
        ))}
      </div>

    </div>)};


  const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(Methodologies);