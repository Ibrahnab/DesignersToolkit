
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const DropDownMenu = () => {
    return (
        <div className="dropdown">
            <Container>
                <Row>
                    <Col>
                        <div className="dropDownPhase">Understand</div>
                    </Col>
                    <Col>
                        <div className="dropDownPhase">Define</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="dropDownPhase">Sketch</div>
                    </Col>
                    <Col>
                        <div className="dropDownPhase">Decide</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="dropDownPhase">Prototype</div>
                    </Col>
                    <Col>
                        <div className="dropDownPhase">Validate</div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
};

export default DropDownMenu;