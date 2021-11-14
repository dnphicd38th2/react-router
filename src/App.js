import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Error from './components/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
function App(props) {
  console.log('react-router-dom')
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:something' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </Router>

  )
}


export default App

