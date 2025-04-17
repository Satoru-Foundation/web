'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const backgroundImages = [
  "/hero/hero-slide-1.jpg",
  "/hero/hero-slide-2.jpg",
  "/hero/hero-slide-3.jpg",
  "/hero/hero-slide-4.jpg", 
  "/hero/hero-slide-5.jpg", 
  "/hero/hero-slide-6.jpg", 
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#5e6f46]/10 overflow-hidden h-[90vh] min-h-[500px] max-h-[1000px]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          speed={2000}
          loop={true}
          className="w-full h-full"
        >
          {backgroundImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0 bg-black/20">
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}
                  quality={90}
                  className="object-cover"
                  sizes="100vw"
                  style={{
                    objectPosition: "center center"
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 blur-bg-sm h-full flex items-center relative z-10">
        <div className="max-w-3xl px-4 sm:px-0 p-6 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 text-[#5e6f46] text-outline leading-tight">
            We don't just add years to life, we add life to years.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-black text-outline2 leading-relaxed font-bold">
            The Satoru Foundation is dedicated to improving the quality of life for the elderly and disabled in our community. We provide essential services, support, and resources to help them live with dignity and respect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-[#ecc54f] bg-black text-white hover:bg-[#ecc54f] text-base sm:text-lg font-bold py-4 sm:py-6 px-6 sm:px-8"
            >
              <Link href="/programs">Our Programs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
            className="border-[#5e6f46] text-white hover:bg-[#5e6f46] text-base sm:text-lg font-bold py-4 sm:py-6 px-6 sm:px-8"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}