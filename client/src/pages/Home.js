import React from 'react';
import fotoHome from '../assets/fotoHome.jpg'; // Importa la imagen
import './Home.css'; // Archivo de estilos

const Home = () => {
  return (
    <div className="home-container">
      {/* Contenido de la página de inicio */}
      <h1 className="home-title">Bienvenido a DDRE</h1>
      <p className="home-subtitle">Explora nuestra música y más.</p>
    </div>
  );
};

export default Home;