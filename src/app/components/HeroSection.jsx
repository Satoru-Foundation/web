'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const backgroundImages = [
  "/hero/hero-slide-1.jpg",
  "/hero/hero-slide-2.jpg",
  "/hero/hero-slide-3.jpg",
  "/hero/hero-slide-4.jpg", 
  "/hero/hero-slide-5.jpg", 
  "/hero/hero-slide-6.jpg", 
];

export default function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // Trigger re-render after refs are attached
  }, []);

  return (
    <section className="relative bg-[#5e6f46]/10 overflow-hidden h-[90vh] min-h-[500px] max-h-[1000px]">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {swiperReady && (
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            speed={2000}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full h-full"
          >
            {backgroundImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="absolute inset-0 bg-black/30">
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={index === 0}
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                    style={{ objectPosition: "center center" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="z-20 absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>
      <button
        ref={nextRef}
        className="z-20 absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center relative z-10">
        <div className="max-w-6xl px-4 sm:px-0 p-6 rounded-lg text-center bg-white/10 backdrop-blur-sm border border-white/20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 text-[#5e6f46] text-outline leading-tight">
            We don't just add years to life, we add life to years.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-black text-outline2 leading-relaxed font-bold">
            The Satoru Foundation is dedicated to improving the quality of life for the elderly and disabled in our community. We provide essential services, support, and resources to help them live with dignity and respect.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-[#ecc54f] bg-black text-white hover:bg-[#ecc54f] hover:text-black text-base sm:text-lg font-bold py-4 sm:py-6 px-6 sm:px-8"
            >
              <Link href="/programs">Discover More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}
