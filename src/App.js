import './App.css';
// import React from 'react';
import { useState } from 'react';
// import Contents from './components/Contents';
// import Cart from './components/Cart';
import PracticeCss from './components/PracticeCss'

function App() {
  const [show, setShow] =useState(false)

  const handleShow = () => show ? setShow(false) : setShow(true)
  
  return (
    <div>
      <button onClick={handleShow}>tongle</button>
      {show && <PracticeCss />}

    </div>
  );
}

export default App;
 