'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';

const aboutImages = [
  "/about/about-image-1.jpg",
  "/about/about-image-2.jpg",
  "/about/about-image-3.jpg",
  "/about/about-image-4.jpg",
];

export default function AboutSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-8 text-[#5e6f47]">
              About Satoru Foundation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6 leading-relaxed">
            The generation that once built our nation now faces isolation, neglect, and systematic indifference. At Satoru Foundation, we are driven by the belief that aging is not a burden but a profound journey - one that deserves dignity, care and purpose.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-10 leading-relaxed">
            We drive meaningful change, through locally tailored interventions that adapt to evolving needs. By utilizing cutting-edge gerontological research with grassroots activism, we bridge the gap between policy and practice, ensuring that every voice - from Nobel laureates to street vendors - contributes to redefining aging in India.
            </p>
            <Button
              size="lg"
              className="bg-[#5e6f47] hover:bg-[#ecc750] text-white hover:text-black text-lg font-bold py-4 sm:py-6 px-6 sm:px-8"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Right Image Carousel Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
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

            {/* Circular Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 sm:-bottom-6 -left-8 sm:left-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full z-10 border-4 border-white bg-white p-1 overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/about/circle-image-.png"
                  alt="Our mission"
                  width={104}
                  height={104}
                  className="object-scale-down"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
