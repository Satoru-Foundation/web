'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MediaCentre() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        // 1. List files from storage bucket
        const { data: files, error: listError } = await supabase
          .storage
          .from('media-centre') // Your bucket name
          .list('Media', {
            limit: 100,
            sortBy: { column: 'created_at', order: 'desc' },
          });

        if (listError) throw listError;

        // 2. Process only image files and get URLs
        const imageFiles = files.filter(file => 
          /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file.name)
        );

        const mediaItems = await Promise.all(
          imageFiles.map(async (file) => {
            const { data: { publicUrl } } = supabase
              .storage
              .from('media-centre')
              .getPublicUrl(file.name);

            return {
              id: file.id,
              name: file.name,
              url: publicUrl,
              createdAt: file.created_at,
              // Add transformed URLs for different sizes
              thumbnail: `${publicUrl}?width=300&quality=80`,
              large: `${publicUrl}?width=1200&quality=90`
            };
          })
        );

        setMedia(mediaItems);
      } catch (err) {
        setError(err.message);
        console.error('Media fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-xl">Loading media...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      Error loading media: {error}
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Media Gallery</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our collection of images and media
        </p>

        {/* Main Slideshow */}
        {media.length > 0 && (
          <div className="mb-16">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
              navigation
              loop
              className="rounded-xl shadow-lg overflow-hidden"
            >
              {media.slice(0, 5).map((item) => (
                <SwiperSlide key={`slide-${item.id}`}>
                  <div className="relative aspect-video w-full">
                    <Image
                      src={item.large}
                      alt={item.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium">{item.name.split('.')[0]}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {media.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No media items found
          </div>
        )}
      </section>
    </main>
  );
}