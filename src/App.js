import React from 'react';
import logo from './logo.svg';
import './App.css';
import Default_name_for_layout from './components/Layout'
// import Characters from './components/characters/Characters'      //This import is used when we use normal function (w/o const)
import { Characters } from './components/characters/Characters'     //We need to use {} for importing functions defined using const
import Movies from './components/movies/Movies'


function App() {      //We cannot use state in functional component as we use in class component (Talking about syntax)
  const movieQuestion = "Have you seen movies?";
  const characterQuestion = "Who is your favourite character?";     //These are props

  return (
    <div className="App">
      <Default_name_for_layout />
      <Movies question = {movieQuestion} />       {/* Props are passed as attribute of tag*/}
      <Characters question = {characterQuestion} />
    </div>
  );
}

export default App;
