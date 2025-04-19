import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#5e6f46]">Get In Touch</h2>
          <div className="h-1 w-57 bg-[#ecc54f] mx-auto rounded-full mb-6 mt-1"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our projects or want to get involved? Reach out to us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f46]">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ecc54f] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f46]">Address</h4>
                  <p className="text-gray-600">Model House building, Saibaba Temple Rd, Dwarakapuri,
                  Punjagutta, Hyderabad, Telangana. 500082</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ecc54f] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f46]">Phone</h4>
                  <p className="text-gray-600">+91 6303637871</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ecc54f] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f46]">Email</h4>
                  <p className="text-gray-600">info@satorufoundation.org</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f46]">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-[#5e6f46] hover:bg-[#5e6f46] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
