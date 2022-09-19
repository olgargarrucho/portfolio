import { useState } from 'react';
import MouseParticles from "react-mouse-particles";
import { Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Proyects from './Proyects';

function App() {
  return <div className='page'>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutme' element={<Aboutme />} />
      <Route path='/proyects' element={<Proyects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    <MouseParticles g={3} color="random" cull="col,image-wrapper"/>
  </div>;
}

export default App;
