import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";


export const Introduction = () => (
  
  <Container className="pageContainer">
    
    <div className="sectionContainer start">
      <img className="cardInfo" src="introMethods.svg"/>
    </div>

    <div className="sectionContainer">
    
      <h1 className="blackHeader">Welcome to Designer's Toolkit</h1>
      
      <p>The purpose of this tool is to aid you in your design sprint. 
        You can use it to browse different design methods and to explore 
        the 6 phases of the triple diamond concept that is commonly
        used when designing experiences.  
      </p>
    </div>
   

    <div className="sectionContainer">
      <h3 className="purpleHeader">The triple diamond design process</h3>

      <img className="cardInfo" src="TripleDiamondImg.svg"/>

      <p>This tool adapts the triple diamond design process which is made up of
        six different phases as seen in the figure above. When starting up a 
        project you begin in the first phase which is Understand. 
        When you are at this phase, there are certain methodologies that
          you can look up to help you in this phase. You can use this tool 
          to browse through design methodologies for this phase and all the 
          other phases as well. 
      </p>
    </div>
    


    <div className="sectionContainer">
      <h3 className="purpleHeader">Design methodologies</h3>
      <Row>
        <Col><img className="cardInfo" src="cardinfo.svg"/></Col>
        {/* <Col>
        <p>The different design methodologies are represented with these cards.
          They show the name, amount of participants required, time to execute 
          and phase in which they can take place. </p>
        </Col> */}
      </Row>
    </div>
    

    
    <div className="sectionContainer">
      <h3 className="purpleHeader">Sprint Plan</h3>
      <p>
      In the sprint plans section, you can see  all the methodologies you have 
      added for each phase. This helps you get an overview of what methods 
      you have used for your project. You can also manage the methodologies
      by removing them from a phase if you don’t want it there anymore
      </p>
    </div>
    <Row>
      <Col><div className="sectionContainer">
      <img className="sprintPlanImg"src="planImg.png"/>
    </div></Col>
    </Row>
    
    <div className="sectionContainer">
    <Row className="justify-content-md-center">
      <Col md="auto" className="">
     
      {/* <h1 className="purpleBtn">lmao</h1> */}
      <Link to="/methodologies" className="">

      <Button className="purpleBtn">
        <h6 className="whiteHeader">Begin Exploring</h6>
      </Button>
      </Link>
      </Col>
    </Row>
    </div>
    
</Container>
  ); 