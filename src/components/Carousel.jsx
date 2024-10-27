import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // New import for Swiper v11 modules
import 'swiper/css'; // Core Swiper styles
import "./Carousel.css"

const Carousel = (props) => {

  const { images } = props

  // attempt to fix bug where page refreshes when clicking carousel on mobile devices
  useEffect(() => {
    const preventPullToRefresh = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();  // Prevent pull-to-refresh on mobile
      }
    };

    document.addEventListener('touchmove', preventPullToRefresh, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventPullToRefresh);  // Clean up on unmount
    };
  }, []);


  return (
    <div className="swiper-container">
      <Swiper
        centeredSlides={true} // Center the active slide
        breakpoints={{
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          }
        }}

        onTouchStart={(e) => e.preventDefault()}

        loop={true}
        modules={[Autoplay]} // Pass Autoplay module to Swiper
        autoplay={{
          delay: 2500, // Set autoplay delay (2.5 seconds)
          disableOnInteraction: false, // Autoplay continues after interaction
          waitForTransition: false,  // Ensures autoplay doesn't wait for slide transition after interaction
          start: true,  // Ensures autoplay starts automatically without interaction
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
});

export default Carousel;
