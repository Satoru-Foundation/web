'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

// Send from contact@satorufoundation.org and to info@satorufoundation.org and also the user's email which has been entered in the form
// 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: 'info@satorufoundation.org', // Change this to your desired recipient
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setError(result.error || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 animate-fade-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-[#5e6f47]">Get In Touch</h2>
          <div className="h-1 w-57 bg-[#ecc750] mx-auto rounded-full mb-6 mt-1"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our projects or want to get involved? Reach out to us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in delay-[0.2s]">
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f47]">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ecc750] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Address</h4>
                  <p className="text-gray-600">
                    Model House building, Saibaba Temple Rd, Dwarakapuri, Punjagutta, Hyderabad, Telangana. 500082
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ecc750] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Phone</h4>
                  <p className="text-gray-600">+91 6303637871</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ecc750] mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#5e6f47]">Email</h4>
                  <p className="text-gray-600">info@satorufoundation.org</p>
                  <p className="text-gray-600">satorufoundation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-[0.4s]">
            <h3 className="text-2xl font-bold mb-6 text-[#5e6f47]">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-[#5e6f47] hover:bg-[#5e6f47] text-white transition-all duration-300 hover:scale-[1.02]"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {success && <p className="mt-4 text-green-500">Message sent successfully!</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-\\[0\\.2s\\] {
          animation-delay: 0.2s;
        }
        .delay-\\[0\\.4s\\] {
          animation-delay: 0.4s;
        }
        .animate-fade-slide-up {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
