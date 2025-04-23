import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function AwarenessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f46] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rights and advocacy</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-20">

          {/* Card 1 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f46]">Empowering Marginalized Communities</h2>
              <p className="text-lg text-gray-600 mb-4">
              At our organization, we are dedicated to uplifting marginalized communities facing unfair treatment and limited access to essential services like healthcare, education, and employment. Our mission is to ensure that every individual, regardless of background, is treated with equality and respect.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/awareness/marginalized.jpg"
                alt="Empowering Marginalized Communities"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Text Right, Image Left */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f46]">Supporting Older Adults</h2>
              <p className="text-lg text-gray-600 mb-4">
              Older adults deserve to live with dignity, care, and support. Unfortunately, many seniors face challenges such as loneliness, poor health, and financial insecurity. We work tirelessly to ensure they remain healthy, active, and connected to their communities by providing access to vital services.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
              <Image
                src="/ourwork/awareness/older.jpg" // Replace with your real image path
                alt="Supporting Older Adults"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f46]">Advocating for Equal Rights</h2>
              <p className="text-lg text-gray-600 mb-4">
              Every person deserves equal rights, and we are committed to addressing ageism and all forms of prejudice. Our advocacy focuses on protecting everyone’s rights through laws and policies that promote fairness in education, healthcare, and employment opportunities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ourwork/awareness/equal.jpg"
                alt="Advocating for Equal Rights"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-[#5e6f46]">A Vision for the Future</h2>
              <p className="text-lg text-gray-600 mb-4">
              We envision a future where marginalized communities and older individuals have the same chances as everyone else. By raising awareness and providing support, we strive to build a more just world where everyone’s rights are respected. Join us in this vital mission!
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1">
              <Image
                src="/ourwork/awareness/vision.jpg" // Replace with your real image path
                alt="A Vision for the Future"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#5e6f46]">Assistance to Vulnerable Populations</h2>
                        <ul className="list-none space-y-3 text-gray-700">
                          <li> <strong>Social and cultural exclusion: Putting in place initiatives to help those who are subjected to discrimination because of social norms and cultural practices, such as community integration initiatives, awareness campaigns, and legal assistance.</strong></li>
                          <li> <strong>Promoting older adults' rights and offering them the tools and assistance they need to overcome age-related prejudices in the workplace and society is known as age discrimination /Ageism. Ageism awareness involves educating people and organisations about ageism, its effects, and strategies to counteract it through training programs.</strong></li>
                          <li> <strong>Community Involvement and Support Groups: Creating support groups where people can connect, exchange stories, and get emotional support.</strong> </li>
                          <li> <strong>Funding and Grants: Providing financial help to projects and groups that support the foundation's goal of advancing justice and equality.</strong></li>
                          <li> <strong>Public Awareness Campaigns: Organizing initiatives to increase understanding of the problems underprivileged people experience and to advance social inclusion.</strong></li>
                          <li> <strong>Research and Advocacy: Performing studies to support policy modifications and promote improved opportunities and safeguards for marginalised communities.</strong></li>
                        </ul>
                      </div>
                      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/ourwork/awareness/assistance.jpg"
                          alt="Assistance to Vulnerable Populations"
                          fill
                          className="object-cover"
                        />
                      </div>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
