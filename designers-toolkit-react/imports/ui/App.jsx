import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import {useSelector} from 'react-redux'



function selector(){
  return counter = useSelector(state => state.counter);
}

export const App = () => (
  
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <h1>Counter</h1>
    <Info/>
  </div>
); 


//export default App;

// function App() {

//   const counter = useSelector(state => state.counter);
//   return(
//     <div className ="App">
//       <h1>Welcome to Meteor!</h1>
//       <h1>Counter</h1>
//     </div>
//   );
  
// }

// export default App;