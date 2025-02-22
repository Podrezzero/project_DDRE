import React, { useState, useEffect } from 'react';
import Noticias from '../components/Noticias'; // Importa el componente
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.css';

const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);

  // Cargar imágenes del slider desde la base de datos
  useEffect(() => {
    fetch('http://localhost:5001/api/slider')
      .then((response) => response.json())
      .then((data) => setSliderImages(data))
      .catch((error) => console.error('Error cargando imágenes:', error));
  }, []);

  return (
    <div className="home-container">
      <Noticias /> {/* Añade el componente aquí */}
      <Swiper
        speed={800}
        effect="fade"
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        loop={true}
      >
        {sliderImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="home-content">
        <h1 className="home-title">Bienvenido a DDRE</h1>
        <p className="home-subtitle">Explora nuestra música y más.</p>
      </div>
    </div>
  );
};

export default Home;