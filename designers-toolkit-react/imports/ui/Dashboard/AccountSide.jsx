import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {UsernameTextField} from './UsernameTextField';
import {PasswordTextField} from './PasswordTextField';

export const AccountSide = () => (
  
    <div>
        <Container>
            <div className="row d-flex justify-content-center flex-nowrap">
                <Col md="auto">
                    <p className ="dashboardHeader">Create or select a project</p>
                </Col>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap dashboardDivMargin">
                <Col md="auto">
                    <p className ='dashboardStandardText'>You are not signed in, if you want to create projects, please sign in or create a new account</p>
                </Col>
            </div>
            <Row>
                <Col>
                <UsernameTextField/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PasswordTextField/>
                </Col>
            </Row>
            <div className="row d-flex justify-content-center flex-nowrap">
                <Col md='auto'>
                <button className="dashboardSignInButton"><p className="buttonText">Sign In</p></button>
                </Col>
            </div>
            <div className="dashboardHL"></div>
            <div className="row d-flex justify-content-center flex-nowrap textTopMargin">
                <Col>
                    <p className="dashboardStandardText paragraph">Don’t have an account? Create a new one here</p>
                </Col>
            </div>
            <div className="row d-flex justify-content-center flex-nowrap">
                <Col md='auto'>
                    <button className="dashboardCreateAccountButton"><p className="buttonText">Create New Account</p></button>
                </Col>
            </div>
        </Container>
        
    </div>
  ); 