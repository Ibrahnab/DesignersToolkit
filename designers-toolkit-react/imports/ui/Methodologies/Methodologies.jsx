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
  const [showMethodDescription, setShowMethodDescription] = React.useState(false);
    const onClick = () => setShowMethodDescription(true);

  return (

    <Container>
      <div className="row" onClick={onClick}>
          {methods.map((meth) => (
              <MethodCard onClick= {this.onClick} key={meth.id} methodData={meth} /> 
          ))}
      </div>
      <div className="row">
         {methodDescriptions.map((md) => (
            <MethodDescriptionPanel key={md.id} methodDescriptionData={md} /> 
        ))}
      </div> 
    </Container>
  );
};

  const mapStateToProps = (state) => {
    return {
      methodDescriptions: state.methodReducer.methodDescriptions,
      methods: state.methodReducer.methods,
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