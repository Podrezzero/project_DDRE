import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './pages/Home';
import Conciertos from './pages/Conciertos';
import Fotos from './pages/Fotos';
import Videos from './pages/Videos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conciertos" element={<Conciertos />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;