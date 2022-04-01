import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Message from './component/Message'
import MessageSuccess from './component/MessageSuccess'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/custom.css'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/message' element={<Message />} />
          <Route path='/success' element={<MessageSuccess />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
