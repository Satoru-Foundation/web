// src/app/getinvolved/page.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import Link from "next/link";
import SliderComponent from "../components/SliderComponent"; // Import the SliderComponent
// In your main layout or page where you use the slider:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    name: "Sreeja Dasugari",
    role: "Intern",
    qualification:"MSc Biomedical Genetics, VIT, Vellore",
    content:
      "As a Research Intern, I had the opportunity to contribute to a significant psychology project under the guidance of Sai Charan sir. I learned about various psychological scales and their applications, as well as essential data analysis techniques. This internship provided me with a unique opportunity to contribute to meaningful research and develop crucial skills that will undoubtedly be beneficial in my future academic and professional pursuits. I am grateful for the valuable mentorship and support provided by Satoru Foundation throughout my internship.",
  },
  {
    name: "Prathyusha Pulugurtha",
    role: "Intern",
    qualification:"M.Sc, Clinical Psychology, Christ University",
    content:
      "I had the distinct pleasure of working with Mr. Sai Charan at Satoru Foundation on a research project focused on the aged population. This collaboration provided me with valuable professional insights and significant personal enrichment. Working with elderly populations presents unique challenges and experiences, all of which were navigated seamlessly under Mr. Sai Charan's guidance. As a mentor and guide, he made the entire research experience both knowledgeable and meaningful",
  },
  {
    name: "Khushbu Yadav",
    role: "Intern",
    qualification:"M.Sc, Health Psychology, University of Hyderabad",
    content:
      "As an intern, I had the privilege of working under the guidance of Sai Charan Sir at Satoru Foundation. The experience was transformative, both personally and professionally. The foundation fosters a collaborative, supportive, and intellectually stimulating environment, emphasizing ethics and empathy in all research endeavors. Under Sir’s mentorship, I gained invaluable hands-on experience in research, enhancing my skills and understanding of the field. His guidance and encouragement played a pivotal role in my growth. I highly recommend Satoru Foundation to anyone seeking to advance their research experience in a professional and nurturing setting dedicated to meaningful psychological insights!",
  },
  {
    name: "Purvi Agarwal",
    role: "Intern",
    qualification:"PGD, Psychological Counseling, St Francis College for Women, Hyderabad",
    content:
      "I had a wonderful time interning with the Satoru Foundation under Charan sir. Being part of the research project with him was an incredible experience the kind of exposure one gains is truly remarkable. This research work not only enhanced my skills in analytical thinking and collaboration but also brought me closer to working with an inspiring age group, allowing me to learn so much from older generations. Charan sir’s guidance made the process seamless; his support and vast knowledge were invaluable. I am deeply grateful for this opportunity, which has given me new perspectives and confidence in my abilities.",
  },
  {
    name: "Akhil Kumar Pandula",
    role: "Intern",
    qualification:"Hyderabad Public School, M.A Social Work - University of Madras",
    content:
      "Working with the Satoru foundation is a great experience under the guidance of the founder Mr. Sai Charan who is very helpful and resourceful throughout the journey. While working closely with older people I understood how to deal with them on a day to day basis. It helped me to gain knowledge on how to handle research projects. It was also great working with an understanding team who are quick learners without which these learnings are impossible. Altogether it was really a wonderful experience being able to intern at Satoru foundation. I would like to thank the founder once again for this wonderful opportunity.",
  },
  {
    name: "Tulasi Kuchibhotla",
    role: "Intern",
    qualification:"M.A Applied Psychology, GITAM University",
    content:
      "Working with Charan Sir at Satoru Foundation has been an amazing learning experience. The work environment was positive and healthy, thanks to his hospitality, respect for interns, and understanding nature. He created a space where we felt valued and motivated to learn and contribute. I’m genuinely grateful for the guidance and encouragement I received during this journey. Looking forward to work in many more projects.",
  },
];

const jobOpenings = [
  {
    title: "Visual Media Intern",
    description:
      "Visual Media Intern",
    location:"Hyderabad,Telangana",
    deadline:"30th April 2025",
    viewLink: "/getinvolved/visualmedia_internship.pdf",
    applyLink: "https://forms.gle/Fssmm6hkyRVCE63GA",
  },
];

const GetInvolved = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f46] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you’re looking to work with us, volunteer your time, or intern to learn and contribute — we welcome you!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#5e6f46] mb-12">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {jobOpenings.map((job, index) => (
              <div key={index} className="p-6 border rounded-xl shadow-md">
                <h3 className="text-xl text-black font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-700 mb-4">{job.description}</p>

                  {/* Display Location and Deadline */}
                  <p className="text-gray-500 mb-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-500">
                    <strong>Application Deadline:</strong> {job.deadline}
                  </p>
                  <br />
                <div className="flex gap-4">
                  <Link href={job.viewLink}>
                    <Button className="bg-[#ecc54f] hover:bg-[#eab308] text-black">View Description</Button>
                  </Link>
                  <Link href={job.applyLink}>
                    <Button className="bg-[#5e6f46] hover:bg-[#5e6f46]/90 text-white">Apply Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#fef9ef]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#5e6f46] mb-8">Become a Volunteer or Intern</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Join our mission to create a better world. Whether you're looking to give back or gain experience, we have a place for you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="https://forms.gle/JXMZWr6euHobNas9A">
              <Button className="bg-[#ecc54f] text-black hover:bg-[#eab308]">Apply to be a Volunteer</Button>
            </Link>
            <Link href="https://forms.gle/5Ua6qiVWdZVWDZoz8">
              <Button className="bg-[#5e6f46] text-white hover:bg-[#5e6f46]/90">Apply to be an Intern</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#5e6f46] font-bold text-center mb-12">What Our Interns Say</h2>
          <div className="max-w-4xl mx-auto">
            {/* Use the SliderComponent here */}
            <SliderComponent testimonials={testimonials} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GetInvolved;
