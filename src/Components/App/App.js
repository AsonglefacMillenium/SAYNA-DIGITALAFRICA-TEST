import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home'
import Header from '../Header/Header';
import Propos from '../../pages/propos/Propos';
import Heros from '../../pages/heros/Heros';
import Adversaires from '../../pages/adversaires/Adversaires';

const App = () => {
  return (
    <div className='app'>
    

<Router>

  <Routes>
  <Route exact path="/" element={<Home />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/heros" element={<Heros />} />
    <Route exact path='/propos' element={<Propos/>}/>
    <Route exact path='/adversaires' element={<Adversaires/>}/>
  </Routes>
</Router>
    </div>
  )
};

export default App