import React from 'react';
import {useSelector} from 'react-redux'
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { CurrentPlan } from './CurrentPlan/CurrentPlan';
import {Dashboard} from './Dashboard/Dashboard';
import {Introduction} from './Introduction/Introduction';
import {Methodologies} from './Methodologies/Methodologies';
import {NavBar} from './Shared/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function selector(){
  return counter = useSelector(state => state.counter);
}

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Logo',
  width:  '97px'
};


export const App = () => (
  <div>
    <Router>
      <div className="app">
      <NavBar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/introduction" element={<Introduction/>}/>
        <Route exact path="/currentplan" element={<CurrentPlan/>}/>
        <Route exact path="/methodologies" element={<Methodologies/>}/>
      </Routes>
    </Router>
    <div>
      <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
    </div>
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