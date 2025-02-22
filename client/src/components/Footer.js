import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { temaOscuro } = useContext(ThemeContext);

  return (
    <footer className={`footer ${temaOscuro ? 'tema-oscuro' : ''}`}>
      <p>Diamantes DRE: Jurando fuerte por 4 plumas desde 2025.</p>
    </footer>
  );
};

export default Footer;