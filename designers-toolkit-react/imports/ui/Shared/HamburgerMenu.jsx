import React, {useState} from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "../Shared/MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const HamburgerMenu = ({methods}) => {
    return (
        <div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(HamburgerMenu);