import React from 'react';
import {useSelector} from 'react-redux'
import {Route, BrowserRouter as Router } from 'react-router-dom';
import { CurrentPlan } from './CurrentPlan';
import Dashboard from './Dashboard';
import {Introduction} from './Introduction';
import {Methodologies} from './Methodologies';

function selector(){
  return counter = useSelector(state => state.counter);
}

export const App = () => (
  <Router>
    <div className="app">
      <h1>Welcome to Meteor!</h1>
    </div>
    <Methodologies/>
    <Route exact path="/" component={Dashboard}/>
  </Router>
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