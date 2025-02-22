import React, { useState, useRef, useEffect } from 'react';
import './Noticias.css';

const Noticias = () => {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const noticiasRef = useRef(null); // Referencia al contenedor de noticias

  const toggleNoticias = (event) => {
    event.stopPropagation(); // Evita que el evento se propague
    setMostrarNoticias(!mostrarNoticias);
  };

  const cerrarNoticias = () => {
    setMostrarNoticias(false);
  };

  // Función para detectar clics fuera del contenedor
  const handleClickOutside = (event) => {
    if (noticiasRef.current && !noticiasRef.current.contains(event.target)) {
      cerrarNoticias(); // Cierra las noticias si el clic fue fuera
    }
  };

  // Añadir el event listener cuando el componente se monta
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="noticias-container" ref={noticiasRef} onClick={(event) => event.stopPropagation()}>
      <div className="noticias-header" onClick={toggleNoticias}>
        <h2 className="noticias-titulo">Últimas Noticias</h2>
        {mostrarNoticias && (
          <button className="noticias-cerrar" onClick={cerrarNoticias}>
            &times; {/* Símbolo de "X" */}
          </button>
        )}
      </div>

      {mostrarNoticias && (
        <div className="noticias-contenido">
          <p>Aquí van las últimas noticias...</p>
          <ul>
            <li>
              <a href="/concierto" className="noticias-enlace">
                Nuevo concierto anunciado para el 15 de diciembre.
              </a>
            </li>
            <li>
              <a
                href="https://www.rollingstone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="noticias-enlace"
              >
                Entrevista exclusiva con la banda en Rolling Stone.
              </a>
            </li>
            <li>
              <a href="/single" className="noticias-enlace">
                Lanzamiento del nuevo single "4 Plumas".
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Noticias;