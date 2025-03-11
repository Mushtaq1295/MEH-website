import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import default styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const SplideCarousel = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <img src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-turbo-bs6.png" alt="Slide1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-402.png" alt="" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-turbo-bs2.png" alt="Slide 3" />
      </SplideSlide>
    </Splide>
  );
};

export default SplideCarousel;
