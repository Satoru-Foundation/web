import Image from "next/image"
import { TrendingUp, Leaf, Heart, FlaskRoundIcon as Flask, Users } from "lucide-react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function MeeNesthamContent() {
  return (
    
    <main className="bg-white">
      <Navbar />
      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mee Nestham</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Because Your Parents Deserve More Than Just Care - They Deserve Connection 
          </p>
        </div>
      </section>

      <div className="font-sans text-gray-800">
      {/* Did You Know Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-sm">
          {/* <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-4">
            <TrendingUp className="mr-2 h-5 w-5" /> Did You Know?
          </h2> */}
          <p className="mb-4 leading-relaxed">
            Over 40% of elderly individuals in India experience some form of social isolation. Mee Nestham bridges this
            gap through meaningful connections.
          </p>
          <p className="text-lg">
            <span className="font-bold text-[#5e6f47]">3X</span> increase in emotional well-being and{" "}
            <span className="font-bold text-[#5e6f47]">25%</span> improvement in mobility seen after 12 weeks with Mee
            Nestham.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Leaf className="mr-2 h-5 w-5" /> Our Core Services
        </h2>

        <ul className="list-disc pl-6 mb-8">
          <li className="mb-3 leading-relaxed">
            <strong>Physical Wellness:</strong> Light breathing and mobility exercises
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Cognitive Engagement:</strong> Memory games, puzzles, and cultural storytelling
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Assistance:</strong> Grocery runs, bank visits, hospital coordination
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Companionship:</strong> Regular warm, respectful interaction 2-3 times a week
          </li>
        </ul>

        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/elderly woman.jpg?height=200&width=200"
              alt="Elderly woman doing light yoga"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/chess.jpg?height=200&width=200"
              alt="Playing memory games with volunteers"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover mt-4 mb-5"
            />
            <Image
              src="/meenestham/chess2.jpg?height=200&width=200"
              alt="Playing memory games with volunteers"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-[200px] max-w-[250px] mb-4">
            <Image
              src="/meenestham/help.png?height=200&width=200"
              alt="Volunteers helping with errands"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Heart className="mr-2 h-5 w-5" /> Why Choose Mee Nestham?
        </h2>

        <ul className="list-disc pl-6">
          <li className="mb-3 leading-relaxed">Scientifically structured 12-week protocol with measurable outcomes</li>
          <li className="mb-3 leading-relaxed">
            Volunteers trained in elder psychology, mobility support, and empathy
          </li>
          <li className="mb-3 leading-relaxed">Tailored visits for each senior—because no two parents are the same</li>
          <li className="mb-3 leading-relaxed">
            Developed by the Satoru Foundation and based on WHO and Indian best practices
          </li>
        </ul>
      </section>

      {/* Evidence Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Flask className="mr-2 h-5 w-5" /> Backed by Evidence
        </h2>

        <ul className="list-disc pl-6">
          <li className="mb-3 leading-relaxed">
            <strong>Fall reduction by 23%</strong> with light exercise and home mobility support (WHO, 2022)
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Memory improvement</strong> with cultural games and storytelling (Lancet, 2020)
          </li>
          <li className="mb-3 leading-relaxed">
            <strong>Emotional uplift</strong> with weekly companionship (Agewell India, 2021)
          </li>
        </ul>
      </section>

            {/* Call To Action Section */}
            <section className="py-12 px-4 bg-[#5e6f47] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bring Mee Nestham to Your Parents' Doorstep</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let your loved ones age alone. Let them thrive with purpose and joy.
          </p>

          <button className="bg-[#ecc750] hover:bg-[#e6b836] text-gray-800 font-semibold py-3 px-6 rounded transition-colors">
            Sign Up for a Free Introductory Visit
          </button>
        </div>
      </section>


      {/* About Foundation Section */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e6f47] flex items-center mb-6">
          <Users className="mr-2 h-5 w-5" /> About the Satoru Foundation
        </h2>

        <div>
          <p className="mb-4 leading-relaxed">
            The Satoru Foundation is a research-driven NGO committed to advancing health, dignity, and connection for
            India's elderly. With deep roots in Hyderabad, our foundation integrates scientific methods with
            human-centered approaches. Our leadership includes trained gerontologists, public health researchers, and
            volunteers experienced in the psychology of aging.
          </p>

          <p className="mb-4 leading-relaxed">
            Satoru has conducted multiple research initiatives on cognitive health, digital inclusion, and
            community-based elder care. Our programs are built on insights from WHO, Indian Council of Medical Research,
            and global academic literature—ensuring that your loved ones receive care that is both heartfelt and
            evidence-informed.
          </p>
        </div>
      </section>

    </div>
    <Footer />
    </main>
  )
}
