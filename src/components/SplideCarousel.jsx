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
        perPage: 3, // Default: Show 3 items per row
        gap: '1rem', // Space between slides
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          640: {
            perPage: 2, // Show 2 items per row on mobile screens (≤ 640px)
            gap: '0.5rem',
          },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {/* Slides */}
      <SplideSlide>
  <div style={{ 
    position: 'relative', 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-hino-bs6.png"  
      alt="Slide 1"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Top-left text */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px', 
      fontSize: '13px',
      fontWeight: 'bold'
    }}>
      ASHOK LEYLAND HINO
    </div>

    {/* Bottom-right text */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px', 
      fontSize: '12px'
    }}>
      BS2, BS3, BS6, Non Turbo
    </div>
  </div>
</SplideSlide>


      <SplideSlide>
  <div style={{ 
    position: 'relative', 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-turbo-bs6.png"  
      alt="Slide 2"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Top-left text (Brand Name) */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px', 
      fontSize: '14px',
      fontWeight: 'bold'
    }}>
      ASHOK LEYLAND
    </div>

    {/* Bottom-right text (Types) */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px', 
      fontSize: '12px',
      textAlign: 'right'
    }}>
      401, 402, EURO-1, EURO-2, 412, BS2370, <br />
      ECOMENT-BS2, BS3, Non Turbo, <br />
      Turbo-BS2, 3, 4, 6
    </div>
  </div>
</SplideSlide>


      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/tc-24-valves.png" 
            alt="Slide 3"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/tcic-super-turbo.png" 
            alt="Slide 4"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/bb-bs6.png" 
            alt="Slide 5" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/mahindra-bs6.png" 
            alt="Slide 6" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/eicher-pro.png" 
            alt="Slide 7" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div style={{ width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-turbo-bs4.png" 
            alt="Slide 8"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          />
        </div>
      </SplideSlide>
      
    </Splide>
  );
};

export default SplideCarousel;
