import React, { useState, useRef, useEffect } from 'react';
import './Noticias.css';

const Noticias = () => {
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [noticias, setNoticias] = useState([]); // Estado para las noticias
  const noticiasRef = useRef(null); // Referencia al contenedor de noticias

  // Cargar noticias desde el backend
  useEffect(() => {
    fetch('http://localhost:5001/api/noticias')
      .then((response) => response.json())
      .then((data) => setNoticias(data));
  }, []);

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
          <ul>
            {noticias.map((noticia) => (
              <li key={noticia.id}>
                <a
                  href={noticia.url}
                  className="noticias-enlace"
                  target="_blank" // Abre en una nueva pestaña
                  rel="noopener noreferrer" // Mejora la seguridad
                >
                  {noticia.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Noticias;