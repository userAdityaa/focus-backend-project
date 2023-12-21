

import './index.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function App(){
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<SignInForm/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpForm/>} />
      </Routes>
    </Router>
  );
};

export default App;

