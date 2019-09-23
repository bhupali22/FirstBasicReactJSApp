import React from 'react';
import logo from './logo.svg';
import './App.css';
import Default_name_for_layout from './components/Layout'
// import Characters from './components/characters/Characters'      //This import is used when we use normal function (w/o const)



function App() {      //We cannot use state in functional component as we use in class component (Talking about syntax)
  
  return (
    <div className="App">
      <Default_name_for_layout />
    </div>
  );
}

export default App;
