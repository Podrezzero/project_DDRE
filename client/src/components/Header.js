import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { temaOscuro, toggleTema } = useContext(ThemeContext);

  return (
    <header className={`header ${temaOscuro ? 'tema-oscuro' : ''}`}>
      <div className="header-left">
        <a href="/" className="header-logo">DDRE</a>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <a href="/conciertos" className="header-link">Conciertos</a>
          <a href="/fotos" className="header-link">Fotos</a>
          <a href="/videos" className="header-link">Videos</a>
          <a href="/contacto" className="header-link">Contacto</a>
        </nav>
        <button onClick={toggleTema} className="tema-boton">
          {temaOscuro ? '⚫':'⚪' }
        </button>
      </div>
    </header>
  );
};

export default Header;