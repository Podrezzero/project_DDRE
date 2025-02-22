import React from 'react';
import foto1 from '../assets/fotoHome1.jpg';
import foto2 from '../assets/fotoHome2.jpg';
import foto3 from '../assets/fotoHome3.jpg';
import foto4 from '../assets/fotoHome4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const Home = () => {
  const images = [foto1, foto2, foto3, foto4]; // Array de imágenes

  return (
    <div className="home-container">
      <Swiper
        speed={1200} // Velocidad de transición
        effect="fade" // Efecto de transición
        modules={[Autoplay, Navigation, EffectFade]} // Módulos de Swiper
        spaceBetween={0} // Espacio entre slides
        slidesPerView={1} // Una imagen a la vez
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Cambio automático cada 3 segundos
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Flechas de navegación
        loop={true} // Bucle infinito
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div> {/* Flecha siguiente */}
      <div className="swiper-button-prev"></div> {/* Flecha anterior */}
      <div className="home-content">
        <h1 className="home-title">Bienvenido a DDRE</h1>
        <p className="home-subtitle">Explora nuestra música y más.</p>
      </div>
    </div>
  );
};

export default Home;