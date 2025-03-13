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
    perPage: 3, // Default (Desktop) - Show 3 slides per row
    gap: '1rem', 
    autoScroll: { speed: 1 },

    breakpoints: {
      1024: { perPage: 2, gap: '1rem' }, // Tablets: 2 cards per row
      640: { perPage: 1, gap: '0.5rem' }, // Mobile: 1 card per row
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
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/tc-24-valves.png"  
      alt="Slide 3"
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
      TATA CUMMINS
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
      6, Single Element, 12, <br />
      24 Valves, BS4, BS5, AMW
    </div>
  </div>
</SplideSlide>


<SplideSlide>
  <div style={{ 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative' // Ensures text overlays correctly
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/tcic-super-turbo.png" 
      alt="Tata TCIC"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Name at Top Left */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontWeight: 'bold'
    }}>
      Tata TCIC
    </div>

    {/* Types at Bottom Right */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontSize: '12px'
    }}>
      6, Single Element, Super Turbo, 407, 709, 1109, ULTRA 3.5, 5
    </div>
  </div>
</SplideSlide>


<SplideSlide>
  <div style={{ 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative' // Ensures text overlays correctly
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/bb-bs6.png" 
      alt="BharatBenz"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Name at Top Left */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontWeight: 'bold'
    }}>
      BharatBenz
    </div>

    {/* Types at Bottom Right */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontSize: '12px'
    }}>
      BS3, BS4, BS6
    </div>
  </div>
</SplideSlide>

<SplideSlide>
  <div style={{ 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative' // Ensures text overlays correctly
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/mahindra-bs6.png" 
      alt="Mahindra"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Name at Top Left */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontWeight: 'bold'
    }}>
      Mahindra
    </div>

    {/* Types at Bottom Right */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontSize: '12px'
    }}>
      BS3, BS4, BS6
    </div>
  </div>
</SplideSlide>


<SplideSlide>
  <div style={{ 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative' // Ensures text overlays correctly
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/eicher-pro.png" 
      alt="Eicher"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Name at Top Left */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontWeight: 'bold'
    }}>
      Eicher
    </div>

    {/* Types at Bottom Right */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontSize: '12px',
      textAlign: 'right'
    }}>
      BS3, BS4, 4 & 6 Cylinder,<br />
      Eicher Pro, BS4 6 Cylinder,<br />
      BS4 4 Cylinder Non Turbo,<br />
      BS4 4 Cylinder
    </div>
  </div>
</SplideSlide>


<SplideSlide>
  <div style={{ 
    width: '100%', 
    height: '350px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative' // Allows text overlay
  }}>
    {/* Image */}
    <img 
      src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/al-turbo-bs4.png" 
      alt="MAN"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
    />

    {/* Name at Top Left */}
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontWeight: 'bold'
    }}>
      MAN
    </div>

    {/* Types at Bottom Right */}
    <div style={{ 
      position: 'absolute', 
      bottom: '10px', 
      right: '10px', 
      background: 'rgba(0, 0, 0, 0.6)', 
      color: 'white', 
      padding: '5px 10px', 
      borderRadius: '5px',
      fontSize: '12px',
      textAlign: 'right'
    }}>
      BS2, BS4, BS6
    </div>
  </div>
</SplideSlide>

      
    </Splide>
  );
};

export default SplideCarousel;
