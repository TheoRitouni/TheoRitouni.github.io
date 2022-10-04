import React from 'react';
import { Route,Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import TPLMpage from './pages/articlesPages/TPLMpage';
import RTSpage from './pages/articlesPages/RTSpage';
import Contact from './pages/Contact';
import Home from './pages/Home';

import "./styles/index.scss";
import VinePage from './pages/articlesPages/VinePage';

const App = () => {
  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/*' element={<Home/>}/>
          <Route path='/articlesTPLM' element={<TPLMpage/>}/>
          <Route path='/articlesRTS' element={<RTSpage/>}/>
          <Route path='/articlesVine' element={<VinePage/>}/>

        </Routes>
    </div>
  );
};

export default App;