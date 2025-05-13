import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function LegalCompliancePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="bg-[#5e6f47] text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Compliance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Official Registration & Legal Information of SATORU FOUNDATION™
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-2">Organisation Name</h2>
            <p>SATORU FOUNDATION™</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-2">Legal Status</h2>
            <p>
              Non-Profit Organisation, Registered under Section 8 of the Companies Act, 2013.
              Recognized by the Ministry of Corporate Affairs, Government of India, and NITI Aayog.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-2">Registered Office</h2>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-2">Registration Numbers</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>CIN:</strong> U72200TS2024NPL189603</li>
              <li><strong>Darpan:</strong> TS/2024/0454519</li>
              <li><strong>PAN:</strong> ABOCS3612C</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-2">Income Tax Approvals</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>12A:</strong> ABOCS3612CE20241</li>
              <li><strong>80G:</strong> ABOCS3612CF20241</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
