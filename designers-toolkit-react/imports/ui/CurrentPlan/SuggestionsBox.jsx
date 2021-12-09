import React, { useState } from "react";
import MethodCard from "../Shared/MethodCard";
import { suggestMethods } from "../actions/index";
import { connect } from "react-redux"
import { Container } from "react-bootstrap/Container";

export const SuggestionsBox = ({suggestMethods, suggestedMethods}) =>(
    <Container className ="suggestion-box">
        <div className="row">
            {suggestedMethods.map((meth) => (
                <div className="col">
                <MethodCard key={meth.id} methodData={meth} isinPlan={false}/> 
                </div>
            ))}
        </div>
    </Container>
);

const mapStateToProps = (state) => {
    return {
      suggestedMethods: state.methodReducer.suggestedMethods,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        suggestMethods: (id) => dispatch(suggestMethods(id)),
    };
  };
  
    export default connect(mapStateToProps,mapDispatchToProps)(SuggestionsBox);