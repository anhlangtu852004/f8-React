import './App.css';
// import React from 'react';
import { useState } from 'react';
// import Contents from './components/Contents';
import Cart from './components/Cart';

function App() {
  const [show, setShow] =useState(false)

  const handleShow = () => show ? setShow(false) : setShow(true)
  
  return (
    <div>
      <button onClick={handleShow}>tongle</button>
      {show && <Cart />}

    </div>
  );
}

export default App;
 