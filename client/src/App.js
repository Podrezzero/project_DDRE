import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Importa el ThemeProvider
import Header from './components/Header';
import Footer from './components/Footer'; // Importa el Footer
import Home from './pages/Home';
import Conciertos from './pages/Conciertos';
import Fotos from './pages/Fotos';
import Videos from './pages/Videos';
import Contacto from './pages/Contacto';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} /> {/* Nueva ruta de administración */}
          <Route path="/conciertos" element={<Conciertos />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer /> {/* Añade el Footer aquí */}
    </Router>
    </ThemeProvider>
  );
}

export default App;