import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactSection from "../components/ContactSection"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="bg-[#5e6f46] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to learn more about our work.
          </p>
        </div>
      </section>

      <ContactSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto text-left space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">How can I donate to the Satoru Foundation?</h3>
              <p className="text-gray-600">
                You can donate online through our website, by mail, or by phone. Visit our Donate page for more
                information on how to contribute.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">How is my donation used?</h3>
              <p className="text-gray-600">
              Your contribution supports our research-driven initiatives, grassroots community development, and humanitarian outreach. We ensure that your support creates direct and lasting impact where it's needed most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Can I volunteer with the Satoru Foundation?</h3>
              <p className="text-gray-600">
                Yes! We welcome volunteers who are passionate about our mission. Visit our Volunteer page to learn about
                current opportunities and how to get involved.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Does the Satoru Foundation accept in-kind donations?
              </h3>
              <p className="text-gray-600">
                Yes, we accept in-kind donations that align with our mission and program needs. Please contact us to
                discuss your potential donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
