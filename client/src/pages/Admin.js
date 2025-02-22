import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [newNoticia, setNewNoticia] = useState({ titulo: '', contenido: '', url: '' });
  const [noticiaEditando, setNoticiaEditando] = useState(null);

  // Cargar imágenes del slider
  useEffect(() => {
    fetch('http://localhost:5001/api/slider')
      .then((response) => response.json())
      .then((data) => setSliderImages(data));
  }, []);

  // Cargar noticias
  useEffect(() => {
    fetch('http://localhost:5001/api/noticias')
      .then((response) => response.json())
      .then((data) => setNoticias(data));
  }, []);

  // Añadir una nueva imagen al slider
  const agregarImagen = () => {
    fetch('http://localhost:5001/api/slider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: newImage }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSliderImages([...sliderImages, { id: data.id, image: newImage }]);
        setNewImage('');
      });
  };

  // Añadir una nueva noticia
  const agregarNoticia = () => {
    fetch('http://localhost:5001/api/noticias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNoticia),
    })
      .then((response) => response.json())
      .then((data) => {
        setNoticias([...noticias, { id: data.id, ...newNoticia }]);
        setNewNoticia({ titulo: '', contenido: '', url: '' });
      });
  };

  // Editar una noticia
  const editarNoticia = (noticia) => {
    setNoticiaEditando(noticia);
  };

  // Guardar la edición de una noticia
  const guardarEdicion = () => {
    fetch(`http://localhost:5001/api/noticias/${noticiaEditando.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo: noticiaEditando.titulo,
        contenido: noticiaEditando.contenido,
        url: noticiaEditando.url,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(() => {
        const noticiasActualizadas = noticias.map((n) =>
          n.id === noticiaEditando.id ? noticiaEditando : n
        );
        setNoticias(noticiasActualizadas);
        setNoticiaEditando(null); // Cierra el modal
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Cancelar la edición de una noticia
  const cancelarEdicion = () => {
    setNoticiaEditando(null); // Cierra el modal
  };

  // Eliminar una noticia
  const eliminarNoticia = (id) => {
    fetch(`http://localhost:5001/api/noticias/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(() => {
        const noticiasActualizadas = noticias.filter((n) => n.id !== id);
        setNoticias(noticiasActualizadas);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Eliminar una imagen del slider
const eliminarImagen = (id) => {
  fetch(`http://localhost:5001/api/slider/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(() => {
      const imagenesActualizadas = sliderImages.filter((image) => image.id !== id);
      setSliderImages(imagenesActualizadas);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// En el JSX, añade un botón para eliminar junto a cada imagen


  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>

      <section className="section-imagenes">
        <h2>Nueva imagen</h2>
        <input
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="URL de la imagen"
        />
        <button onClick={agregarImagen}>Añadir Imagen</button>
        <div class="grid-imagenes">
          {sliderImages.map((image) => (
            <div class="imagen-container" key={image.id}>
              <img src={image.image} alt={`Slider ${image.id}`} />
              <button onClick={() => eliminarImagen(image.id)}>Eliminar</button>
            </div>
          ))}
        </div>
        
      </section>

      <section className="admin-noticias">
        <h2>Nueva Noticia</h2>
        <input
          type="text"
          value={newNoticia.titulo}
          onChange={(e) => setNewNoticia({ ...newNoticia, titulo: e.target.value })}
          placeholder="Título"
        />
        <textarea
          value={newNoticia.contenido}
          onChange={(e) => setNewNoticia({ ...newNoticia, contenido: e.target.value })}
          placeholder="Contenido"
        />
        <input
          type="text"
          value={newNoticia.url}
          onChange={(e) => setNewNoticia({ ...newNoticia, url: e.target.value })}
          placeholder="URL"
        />
        <button onClick={agregarNoticia}>Añadir Noticia</button>
        <ul>
          {noticias.map((noticia) => (
            <li key={noticia.id}>
              <div className="info-noticias">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.contenido}</p>
                <p>{noticia.url}</p>
              </div>

              <div className="botones-noticia">
                <button onClick={() => editarNoticia(noticia)}>Editar</button>
                <button onClick={() => eliminarNoticia(noticia.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal de edición */}
      {noticiaEditando && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Noticia</h3>
            <input
              type="text"
              value={noticiaEditando.titulo}
              onChange={(e) =>
                setNoticiaEditando({ ...noticiaEditando, titulo: e.target.value })
              }
              placeholder="Título"
            />
            <textarea
              value={noticiaEditando.contenido}
              onChange={(e) =>
                setNoticiaEditando({ ...noticiaEditando, contenido: e.target.value })
              }
              placeholder="Contenido"
            />
            <input
              type="text"
              value={noticiaEditando.url}
              onChange={(e) =>
                setNoticiaEditando({ ...noticiaEditando, url: e.target.value })
              }
              placeholder="URL"
            />
            <button onClick={guardarEdicion}>Guardar</button>
            <button onClick={cancelarEdicion}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;