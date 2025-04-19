'use client'

import Image from "next/image"

const activities = [
  {
    id: 1,
    title: "Scientific Research",
    image: "/ouractivities-home/scientific.jpg",
  },
  {
    id: 2,
    title: "Skills and Capacity Building",
    image: "/ouractivities-home/skills.jpg",
  },
  {
    id: 3,
    title: "Awareness and Advocacy",
    image: "/ouractivities-home/awareness.jpg",
  },
]

export default function OurActivitiesHome() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#5e6f46]">Our Activities</h2>
          <div className="h-1 w-57 bg-[#ecc54f] mx-auto rounded-full mb-6 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={300}
                className="w-full object-cover h-60"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
