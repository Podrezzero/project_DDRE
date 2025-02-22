import React from 'react';
import { Link } from 'react-router-dom'; // Para manejar la navegación
import './Header.css'; // Archivo de estilos

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">DDRE</Link>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <Link to="/conciertos" className="header-link">Conciertos</Link>
          <Link to="/fotos" className="header-link">Fotos</Link>
          <Link to="/videos" className="header-link">Videos</Link>
          <Link to="/contacto" className="header-link">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;