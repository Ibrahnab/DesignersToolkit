import React from "react";
import data from "../Shared/CardData";
import MethodCard from "../Shared/MethodCard";
import MethodDescriptionPanel from "../Shared/MethodDescriptionPanel";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";
import { Container } from "@mui/material";

// export const Methodologies = ({methods}) => (
  
//     <div>
//       <h1>Methodologies Page</h1>
//       <div>
//         {methods.map((meth) => (
//            <MethodCard /> 
//         ))}
//       </div>
      
//       </div>
//   ); 

const Methodologies = ({methods, methodDescriptions}) => {
  return (
    <Container>
      <div>
        <Row>
            {methodDescriptions.map((md) => (
                <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
            ))}
        </Row> 
      </div>
    </Container>
  );
};

  const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
    };
  };

  /*const mapStateToProps2 = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
    };

    <Row>
        {methodDescriptions.map((md) => (
              <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
          ))}
        </Row> 

        <Row>
        {methods.map((meth) => (
              <MethodCard key={meth.id} methodData={meth} /> 
          ))}
        </Row>  
  };*/

export default connect(mapStateToProps)(Methodologies);