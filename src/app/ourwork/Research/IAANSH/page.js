import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

export default function IAANSHPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IAANSH:Institute for applied research & advocacy in natural, social and health sciences</h1>
        </div>
      </section>

      <div className="bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title and Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#ecc750] text-3xl text-[#5e6f47] font-bold px-4 py-1 rounded-full mb-4">
              IAANSH
              </span>
              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
              Transforming scientific discovery into real-world impact. Our research and advocacy integrate natural, social, and health sciences to create sustainable, equitable solutions.
              </p>
              <ul className="list-none space-y-3 text-gray-700">
                <li> <strong>Interdisciplinary Research:</strong> Conducting research that integrates natural sciences, social sciences, and health sciences to address complex societal challenges, such as public health crises and environmental sustainability.</li>
                <li> <strong>Community Engagement:</strong> Collaborating with local communities to identify their needs and challenges, and implementing research-based solutions that enhance their quality of life.</li>
                <li> <strong>Policy Advocacy:</strong> Working with policymakers to develop and promote evidence-based policies that address health, environmental, and social issues, ensuring that research findings influence decision-making.</li>
                <li> <strong> Capacity Building:</strong> Offering training programs and workshops for researchers, community leaders, and healthcare professionals to strengthen skills in research methodologies, data analysis, and community health interventions.</li>
                <li> <strong>Public Health Initiatives:</strong> Implementing programs focused on preventive healthcare, nutrition, and wellness, especially in underserved areas, to improve health outcomes.</li>
                <li> <strong> Environmental Sustainability Projects:</strong> Researching and advocating for sustainable practices in agriculture, water management, and waste reduction, promoting ecological balance and resource conservation.</li>
                <li> <strong>Social Science Studies:</strong> Conducting studies on psychological aspects, both clinical and non-clinical individual and social behaviour, cultural practices, and economic factors to understand their impact on health and well-being, informing interventions.</li>
                <li> <strong> Collaborative Projects:</strong> Partnering with academic institutions, NGOs, and government agencies to undertake research projects that have a meaningful impact on society</li>
                <li> <strong>Awareness Campaigns:</strong> Running campaigns to educate the public on health issues, environmental conservation, and social justice, fostering informed communities.</li>
                <li> <strong>Publications and Dissemination:</strong> Produce research papers, policy briefs, and other publications to share findings with stakeholders, researchers, and the general public.</li>
              </ul>

              <p className="text-gray-900 mb-6 leading-relaxed text-[20px]">
              These activities reflect IAANSH's commitment to applying scientific research to real-world challenges, promoting advocacy, and improving health and social outcomes across India.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Images */}
          <div className="space-y-8">
            {/* First Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/IAANSH/first.jpg" // Update with your image path
                alt="Researchers studying longevity data"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ourwork/research/IAANSH/second.jpg" // Update with your image path
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