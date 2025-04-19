'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Add your image paths here
const aboutImages = [
  "/about/about-image-1.jpg",
  "/about/about-image-2.jpg",
  "/about/about-image-3.jpg",
  "/about/about-image-4.jpg",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#5e6f46]">About Satoru Foundation</h2>
            <p className="text-xl text-black mb-6 leading-relaxed">
              The generation that once built our nation now faces isolation, neglect, and systematic indifference. At Satoru Foundation, we are driven by the belief that aging is not a burden but a profound journey - one that deserves dignity, care and purpose.
            </p>
            <p className="text-xl text-black mb-10 leading-relaxed">
              We drive meaningful change, through locally tailored interventions that adapt to evolving needs. By utilizing cutting-edge gerontological research with grassroots activism, we bridge the gap between policy and practice, ensuring that every voice - from Nobel laureates to street vendors - contributes to redefining aging in India.
            </p>
            <Button
              size="lg"
              className="bg-[#5e6f46] hover:bg-[#ecc54f] text-white hover:text-black text-lg font-bold py-6 px-8"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            {/* Slideshow Container */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="h-full w-full"
              >
                {aboutImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={`About Satoru Foundation ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full z-10 border-4 border-white bg-white p-1 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/about/circle-image-.png"
                alt="Our mission"
                width={104}
                height={104}
                className="object-scale-down" // Ensures full image visibility
                quality={100}
              />
            </div>
            </div>
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#5e6f46] rounded-full z-10"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}