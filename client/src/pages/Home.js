import React from 'react';
import Noticias from '../components/Noticias'; // Importa el componente
import foto1 from '../assets/fotoHome1.jpg';
import foto2 from '../assets/fotoHome2.jpg';
import foto3 from '../assets/fotoHome3.jpg';
import foto4 from '../assets/fotoHome4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.css';

const Home = () => {
  const images = [foto1, foto2, foto3, foto4];

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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
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