import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { prisma } from 'lib/prisma';

// Add revalidation time (e.g., 1 hour)
export const revalidate = 3600;

async function getTeam() {
  const team = await prisma.team.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return team;
}

export default async function Team() {
  const team = await getTeam();

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the passionate individuals behind Satoru Foundation, dedicated to creating positive change in our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#5e6f47] mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5e6f47] hover:text-[#5e6f47]/80"
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5e6f47] hover:text-[#5e6f47]/80"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 