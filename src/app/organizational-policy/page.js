'use client';

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

export default function OrganizationPolicyPage() {
  return (
    <>
      <Head>
        <title>Organizational Policies | Satoru Foundation</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-800">
        <Navbar />

        <section className="bg-[#5e6f47] text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Organizational Policies</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Upholding dignity, equity, and professionalism in all that we do.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">Equal Opportunity and Non-Discrimination Policy</h2>
            <p className="mb-4">
              Satoru Foundation is committed to providing equal opportunities to all individuals irrespective of sex, gender, gender identity or expression, age, caste, religion, colour, race, national origin, ancestry, ethnicity, disability, marital status, sexual orientation, or any other characteristic protected by applicable law.
            </p>
            <p className="mb-4">
              This applies to all aspects of employment including recruitment, hiring, placement, promotion, compensation, training, and termination. Retaliation against individuals who report discrimination or participate in investigations is strictly prohibited.
            </p>
            <p>
              Violations of this policy will result in disciplinary action. The Foundation regularly reviews its policies to ensure equity and inclusion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">Dignity at Work Policy</h2>
            <p className="mb-4">
              All employees and associates have the right to be treated with dignity. Harassment—including verbal, physical, or visual conduct based on protected status—is not tolerated.
            </p>
            <p className="mb-4">
              Report any misconduct to:
              <ul className="list-disc pl-6">
                <li>Direct supervisor (unless involved)</li>
                <li>HR department</li>
                <li>Dignity at Work focal person</li>
                <li>Confidential reporting mechanism</li>
              </ul>
            </p>
            <p>
              Investigations are conducted within 30 days, and appropriate actions are taken. Retaliation is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">Internship Policy</h2>
            <p className="mb-2 font-semibold">Duration and Schedule</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Internships: 3–6 months (minimum 3 months)</li>
              <li>25–40 hours/week, Monday–Saturday</li>
              <li>Flexibility based on projects and academics</li>
            </ul>

            <p className="mb-2 font-semibold">Compensation and Benefits</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Monthly stipend based on skills, time, and role</li>
              <li>No administrative or placement fee</li>
            </ul>

            <p className="mb-2 font-semibold">Professional Development</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dedicated supervisor and mentor</li>
              <li>Orientation, feedback, and evaluations</li>
              <li>Projects aligned with intern goals</li>
            </ul>

            <p className="mb-2 font-semibold">Selection and Completion</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Transparent recruitment</li>
              <li>Diversity-focused selection</li>
              <li>Certificate and recommendation letter upon successful completion</li>
              <li>Completion report required</li>
            </ul>

            <p className="mb-2 font-semibold">Early Exit Policy</p>
            <p>
              Interns leaving early without valid reasons won't receive documentation. Exceptions for emergencies require valid proof and management approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">General Termination Policy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Termination with 2 weeks' notice for policy violations, misconduct, or poor performance</li>
              <li>Interns/employees may resign with 4 weeks' notice and proper handover</li>
            </ul>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-600">
              For further information on organizational policies, email:{" "}
              <a href="mailto:jobs@satorufoundation.org" className="text-[#5e6f47] font-medium hover:underline">
                jobs@satorufoundation.org
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
