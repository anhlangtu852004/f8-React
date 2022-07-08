import './App.css';
// import React from 'react';
// import { useState } from 'react';
// import Contents from './components/Contents';
// import Cart from './components/Cart';
// import PracticeCss from './components/PracticeCss'

import {Routes, Route, Link } from 'react-router-dom'

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

function App() {
  // const [show, setShow] =useState(false)

  // const handleShow = () => show ? setShow(false) : setShow(true)
  
  return (
    <div>
      {/* <button onClick={handleShow}>tongle</button> */}
      {/* {show && <PracticeCss />} */}
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
 