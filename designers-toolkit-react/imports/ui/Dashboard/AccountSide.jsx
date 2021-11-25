import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {UsernameTextField} from './UsernameTextField';
import {PasswordTextField} from './PasswordTextField';

export const AccountSide = () => (
  
    <div>
        <Container>
            <Row>
                <Col>
                <p className ="dashboardHeader">Create or select a project</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className ='dashboardStandardText'>You are not signed in, if you want to create projects, please sign in or create a new account
</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <UsernameTextField/>
                </Col>
                <Col>
                    <PasswordTextField/>
                </Col>
            </Row>
        </Container>
        
    </div>
  ); 