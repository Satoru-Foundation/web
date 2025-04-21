// components/SliderComponent.js
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the react-slick slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SliderComponent = ({ testimonials }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component is rendered only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing until we're on the client side
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...sliderSettings}>
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-[#f7f7f7] p-8 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-900 italic mb-4">"{t.content}"</p>
          <h4 className="font-bold text-[#5e6f46]">{t.name}</h4>
          <h4 className="font-semibold text-[#5e6f46]">{t.qualification}</h4>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
