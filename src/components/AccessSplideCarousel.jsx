import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import default styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const AccessSplideCarousel = () => {
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
                src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/connecting-rod.jpeg"  
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
                        Connecting Rod
                </div>
            </div>
        </SplideSlide>
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
                src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/crank.jpg"  
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
                        Crank
                </div>
            </div>
        </SplideSlide>
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
                src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/Dynamo.webp"  
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
                        Dynamo
                </div>
            </div>
        </SplideSlide>
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
                src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/Head.webp"  
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
                        Head
                </div>
            </div>
        </SplideSlide>
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
                src="https://res.cloudinary.com/dv8h7yjv2/image/upload/public-v1/self-motor.jpeg"  
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
                        Self-motor
                </div>
            </div>
        </SplideSlide>







      
    </Splide>
  );
};

export default AccessSplideCarousel;
