import React from "react";
import data from "../Shared/CardData";
import {MethodCard} from "../Shared/MethodCard";
import {connect} from "react-redux"
import Row from "react-bootstrap/Row";

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

const Methodologies = ({methods}) => {
  return (
    <div>
      <h1>Methodologies Page</h1>
      <Row>
      {methods.map((meth) => (
            <MethodCard key={meth.id} methodData={meth} /> 
         ))}
        
         
         </Row>
         
         
       </div>
  );
};

  const mapStateToProps = (state) => {
    return {
      methods: state.methodReducer.methods,
    };
  };

export default connect(mapStateToProps)(Methodologies);