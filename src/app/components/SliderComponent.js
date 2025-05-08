'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SliderComponent = ({ testimonials }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
        <div key={idx} className="bg-[#f7f7f7] p-8 rounded-lg shadow-md">
          {/* Top: Photo + Info row */}
          <div className="flex items-center gap-4 mb-4">
            {t.image && (
              <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border-4 border-[#5e6f47]">
                <Image
                  src={t.image}
                  alt={t.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-bold text-[#5e6f47]">{t.name}</h4>
              <h4 className="font-semibold text-[#5e6f47]">{t.qualification}</h4>
            </div>
          </div>

          {/* Bottom: Testimonial text */}
          <p className="text-lg text-gray-900 italic">
            "{t.content}"
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
