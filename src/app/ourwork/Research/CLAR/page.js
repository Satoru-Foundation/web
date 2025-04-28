import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

export default function CLARPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CLAR: Centre for Longevity and Ageing Research</h1>
        </div>
      </section>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
                CLAR
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                The Centre for Longevity and Ageing Research in India engages in various activities aimed at promoting healthy ageing and advancing research in longevity. Here are detailed list of activities we undertake:
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li> <strong>Research Initiatives:</strong> Conducting studies on aging-related health issues, exploring genetic, environmental, and lifestyle factors that influence longevity.</li>
                <li> <strong>Public Awareness Campaigns:</strong> Organizing workshops and seminars to educate the public about healthy aging practices, nutrition, and preventive healthcare.</li>
                <li> <strong>Policy Advocacy:</strong> Collaborating with government bodies to influence policies that support elder care, healthcare access, and age-friendly environments.</li>
                <li> <strong>Community Outreach:</strong> Implementing programs in local communities to promote active aging, including fitness classes, social activities, and mental health support.</li>
                <li> <strong>Training Programs:</strong> Offering training for healthcare professionals on geriatric care, emphasizing holistic approaches to aging and the needs of elderly populations.</li>
                <li> <strong>Collaboration with NGOs:</strong> Partnering with non-governmental organisations to enhance services and support for older adults in various regions</li>
                <li> <strong>Technological Innovations:</strong> Promoting the use of technology in elder care, such as telemedicine services and apps designed to assist seniors in managing their health.</li>
                <li> <strong>Research Publications:</strong> Publishing findings in scientific journals and presenting at national and international conferences to disseminate knowledge about aging and longevity.</li>
                <li> <strong>Support Groups:</strong> Facilitating peer support groups for elderly individuals to share experiences, reduce isolation, and enhance mental well-being.</li>
                <li> <strong>Nutrition Programs:</strong> Dissemination of knowledge about dietary guidelines and meal programs tailored to the needs of older adults to promote optimal health and nutrition.</li>
              </ul>

              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
                These activities collectively aim to enhance the quality of life for older adults in India and foster a society that values and supports its ageing population
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Images */}
          <div className="space-y-8">
            {/* First Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/CLAR/first.png" // Update with your image path
                alt="Researchers studying longevity data"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/CLAR/second.jpg" // Update with your image path
                alt="Elderly community program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}