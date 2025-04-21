'use client';

import Image from 'next/image';

export default function DirectorProfile() {
  return (
    <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Image Column - Add your image path */}
          <div className="md:w-1/3 p-6 flex justify-center">
            <div className="relative h-100 w-100 overflow-hidden border- border-[#5e6f46]">
              <Image
                src="/about/director.jpg" // Update with your image path
                alt="Kanagala Sai Charan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-[#5e6f46] mb-2">Kanagala Sai Charan</h1>
            <p className="text-xl font-semibold text-gray-600 mb-6">Director</p>
            
            <div className="space-y-4 text-gray-700">
              <p>
                He has extensive research experience and has worked in Europe and the Middle East. His expertise is in designing and running interventions (longitudinal and RCT trials) that address societal challenges.
              </p>
              
              <p>
                His educational background is in clinical psychology and law. He is also a research fellow in the interdisciplinary fields of technology and PsychoGeoratology (PhD).
              </p>
              
              <p>
                He is mainly interested in longevity and improving people's quality of life in India using advanced science and technology. His main goal in starting this organisation is to build an ecosystem of researchers and policymakers and provide a platform for them to address society's needs and challenges and offer solutions and interventions, directly benefiting people facing short and long-term challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}