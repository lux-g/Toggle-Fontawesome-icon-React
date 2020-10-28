import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [icon, setIcon] = useState(false)

  function change(){
    setIcon(!icon);
  }

  return (
    <div className="app">
      <FontAwesomeIcon className="icon" onClick={change} icon={icon ? faSun : faMoon} size="2x"/>
      <h1>Test</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem voluptas asperiores laboriosam dicta itaque neque numquam nihil vitae. Possimus!</p>
    </div>
  );
}

export default App;
