import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home'
import Header from '../Header/Header';

const App = () => {
  return (
    <div className='app'>
    

<Router>

  <Routes>
  <Route exact path="/" element={<Home />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/heros" element={<Header />} />
  </Routes>
</Router>
    </div>
  )
};

export default App