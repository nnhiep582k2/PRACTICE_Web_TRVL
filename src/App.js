import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router basename='/Practice_web'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/sign-up" element={<SignUp />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
