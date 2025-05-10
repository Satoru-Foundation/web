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
              The Foundation implements this policy in all aspects of employment including recruitment, hiring, placement, promotion, transfer, compensation, training, and termination. All employees are expected to uphold these principles in all interactions within and on behalf of the Organization.
            </p>
            <p className="mb-4">
              Satoru Foundation prohibits retaliation against any individual who reports discrimination or participates in an investigation of such reports. Violations of this policy will be subject to disciplinary action, up to and including termination of employment. The Foundation will regularly monitor, assess, and report on its equal opportunity performance and make necessary adjustments to policies and practices to promote equity and inclusion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">Dignity at Work Policy</h2>
            <p className="mb-4">
             All employees and associates of Satoru Foundation have the right to be treated with dignity and respect. The Foundation is committed to maintaining a work environment free from all forms of harassment, bullying, and discrimination.
            </p>
            <p className="mb-4">
              Harassment includes unwelcome conduct, whether verbal, physical, or visual, that is based on a person's protected status. Examples include offensive jokes, slurs, physical assaults, threats, intimidation, ridicule, insults, offensive pictures, and interference with work performance.
            </p>
            <p className="mb-4">
              Employees who experience or witness inappropriate behaviour are encouraged to report it immediately through one of the following channels:
              <ul className="list-disc pl-6">
                <li>Direct supervisor (unless they are the subject of the complaint)</li>
                <li>Human Resources department</li>
                <li>Designated Dignity at Work focal person</li>
                <li>Confidential reporting mechanism</li>
              </ul>
            </p>
            <p className="mb-4">
              All complaints will be promptly investigated within 30 days while maintaining confidentiality to the extent possible. Appropriate disciplinary action, up to and including termination, will be taken against individuals found to have violated this policy
            </p>
            <p>
              Satoru Foundation strictly prohibits retaliation against anyone who reports harassment or participates in an investigation. The Foundation will provide regular training to all employees on preventing and addressing harassment and discrimination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">Internship Policy</h2>
            <p>
Satoru Foundation offers structured internship opportunities designed to provide meaningful professional experience and skill development.
</p>
            <p className="mb-2 font-semibold">Duration and Work Schedule</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Internships range from 3 to 6 months, with a mandatory commitment of 3 months</li>
              <li>Standard work week of 25-40 hours depending on the position and educational requirements</li>
              <li>Work schedule Monday through Saturday, with occasional weekend activities as needed</li>
              <li>Flexible working arrangements may be considered based on project requirements and intern's educational commitments</li>
            </ul>

            <p className="mb-2 font-semibold">Compensation and Benefits</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All interns will receive a monthly stipend (depending on availability of resources) based on hours worked and position requirements, skill, and experience</li>
              <li>Stipend rates will be clearly communicated during the application process</li>
              <li>No fees are charged for internship placement or administration</li>
            </ul>

            <p className="mb-2 font-semibold">Professional Development</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Each intern will be assigned a dedicated supervisor and mentor</li>
              <li>Structured orientation and onboarding program</li>
              <li>Regular feedback sessions and formal mid-term and final evaluations</li>
              <li>Opportunities to participate in organizational events and professional development activities</li>
              <li>Projects aligned with intern's educational background and career goals</li>
            </ul>

            <p className="mb-2 font-semibold">Selection Process</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Clear job descriptions with specific qualifications and responsibilities</li>
              <li>Transparent application and interview process</li>
              <li>Selection based on qualifications, skills, and alignment with organizational needs</li>
              <li>Commitment to diversity and inclusion in intern recruitment</li>
            </ul>

            <p className="mb-2 font-semibold">Completion and Recognition</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Internship certificate provided upon successful completion</li>
              <li>Letter of recommendation for interns meeting or exceeding performance standards</li>
              <li>Exit interview to gather feedback and improve the internship program</li>
              <li>Consideration for future employment opportunities when available</li>
            </ul>

            <p className="mb-2 font-semibold">Completion and Recognition</p>
            <p>
              To be eligible for an internship certificate and/or a letter of recommendation, interns (part-time or full-time) must complete the full internship duration as specified in their offer letter. Candidate has to Submit a completion report detailing their learning outcomes at the end of the internship. Interns who leave the organization before the completion of specified period will not receive these documents (internship certificate and/or a letter of recommendation), except in rare cases of extenuating circumstances for medical/family emergencies Such exceptions will be considered only upon submission of valid documentation and are subject to management’s written approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5e6f47] mb-4">General Termination Policy</h2>
            <p>The organization “Satoru Foundation” reserves the right to terminate an internship or an employee full-time or part-time with 2 weeks prior notice under the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violation of organizational policies, code of conduct, or confidentiality agreements.</li>
              <li>Consistent underperformance despite feedback and support.</li>
              <li>Unethical behavior, particularly in interactions with senior citizen beneficiaries.</li>
              <li>Extended unauthorized absence.</li>
              <li>Misrepresentation of qualifications or information.</li>
            </ul>
            <p>Similarly, interns or employees (full time or part-time) may request early termination of their internship or employment position with reasonable notice, mandatory 4 weeks /1 month in advance, and proper handover of assigned responsibilities.</p>
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
