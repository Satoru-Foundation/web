import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import DirectorProfile from "../components/Director"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f46] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Satoru Foundation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, and the impact we're making in the lives of older people across India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#5e6f46]">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                We are a passionate team committed to driving positive change in society through innovative research,
                collaborative partnerships, and providing impactful outcome-based education and skill training
                initiatives in India.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our primary focus is addressing the issues connected to ageing, longevity, and ageism among Indians. We
                believe that every older person deserves dignity, respect, and the opportunity to live a fulfilling
                life.
              </p>
              <p className="text-lg text-gray-600">
                Through our various programs and initiatives, we aim to empower older adults with the skills, knowledge,
                and support they need to thrive in an increasingly digital and complex world.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about/whoweare.jpg"
                alt="Satoru Foundation team members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW FULL-WIDTH MISSION SECTION */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-[#5e6f46] text-center">
            Our Mission and Purpose
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f46]">Our Mission</h3>
              <p className="text-gray-700">
                Health, justice, and dignity for all is our main mission. The Satoru Foundation's goals align with
                Sustainable Development Goals (SDG). We build alliances with diverse stakeholders, including educational institutions, companies, and government and non-government organisations, to achieve our goals. We are dedicated to enhancing quality of life, fostering sustainability, and championing underprivileged communities across India.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f46]">Our Purpose</h3>
              <p className="text-gray-700">
                To create a healthy environment for older adults, and provide them with the psychological skills and guidance to thrive. We work towards eradicating poverty by extending access to essential resources and livelihood opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#5e6f46]">The Story Behind Our Name</h3>
              <p className="text-gray-700">
                Satoru (悟る), a word derived from Zen Buddhism, means "to understand" or "to attain enlightenment" in Japanese. It implies deep wisdom or spiritual realisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ...rest unchanged */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Our Values */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-8 text-[#5e6f46] text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f46]">Compassion</h3>
                <p className="text-gray-600">
                  We approach our work with empathy and understanding, recognizing the unique challenges faced by older
                  people in India.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f46]">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek creative solutions to complex problems, utilizing science and technology to
                  develop effective interventions.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#5e6f46]">Evidence-Based</h3>
                <p className="text-gray-600">
                  We are committed to rigorous research and data-driven approaches to ensure our programs deliver
                  meaningful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-gray-50">   {/* Our Team */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#5e6f46] text-center">Our Team</h2>
            <DirectorProfile />
          </div>

        </section>

      {/* Join Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#5e6f46]">Join Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We're always looking for passionate individuals and organizations to join us in our mission to improve the
            lives of older people in India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#5e6f46] hover:bg-[#5e6f46]/90">
              <a href="/volunteer" className="text-[#5e6f46] hover:underline">Volunteer With Us</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#5e6f46] text-black hover:bg-[#5e6f46]/10"
            >
              <a href="/donate" className="text-[#5e6f46] hover:underline">Support Our Work</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

