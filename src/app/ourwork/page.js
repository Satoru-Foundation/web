import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"

export default function OurWorkPage() {
  const activities = [
    {
      id: "Holistic",
      title: "Holistic Health & Well-being",
      description:
        "We are committed to enhancing the health and well-being of seniors through comprehensive initiatives.",
      image: "/activities/holistic-health.jpg",
    },
    {
      id: "Research",
      title: "Research & Innovation",
      description:
        "Evaluating socioeconomic barriers' impact on mental health and performance in academic and work environments among Indian Millennials and Gen-Z.",
      image: "/activities/scientific.jpg",
    },
    {
      id: "Skills",
      title: "Skills Training & Capacity Building",
      description:
        "The Satoru Foundation provides skill development and capacity building.",
      image: "/activities/skills.png",
    },
    {
        id: "Awareness",
        title: "Awareness & Advocacy",
        description:
          "The Satoru Foundation provides awareness to the old people.",
        image: "/activities/awareness.jpg",
      },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f46] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Here are the works that Satoru Foundation does.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-9xl mx-auto mb-6">
            At Satoru Foundation™, our activities are driven by a deep commitment to creating meaningful change in society—especially for older individuals and marginalized communities. Through our diverse activities, we address critical issues such as poor health, limited livelihood opportunities, and lack of awareness. From promoting holistic health and well-being to empowering individuals through skills training, research, advocacy, and innovation, each initiative is designed to improve the quality of life, foster sustainability, and build a more inclusive and equitable future for all.
            </p>
            <div className="h-1 w-full bg-[#ecc54f] mx-auto rounded-full mb-6 mt-1"></div>
          </div>

          <div className="space-y-20">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl font-bold mb-6 text-[#5e6f46]">{activity.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{activity.description}</p>
                  <p className="text-lg text-gray-600 mb-8">
                    Through our {activity.title.toLowerCase()} activity, we've been able to impact thousands of lives and
                    create lasting positive change for older adults across India.
                  </p>
                  <Button size="lg" className="bg-[#5e6f46] hover:bg-[#5e6f46]/90 text-white">
                    <Link href={`/ourwork/${activity.id}`}>Learn More</Link>
                  </Button>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
