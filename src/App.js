import './App.css';
// import React from 'react';
import { useState } from 'react';
import Contents from './components/Contents';

const courses = [
  {
    id:1,
    name: 'jva'
  },
  {
    id:2,
    name: 'reduc'
  },
  {
    id:3,
    name: 'php'
  },

]

function App() {
  const [show, setShow] =useState(false)

  const handleShow = () => show ? setShow(false) : setShow(true)
  
  return (
    <div>
      <button onClick={handleShow}>tongle</button>
      {show && <Contents />}

    </div>
  );
}

export default App;
 