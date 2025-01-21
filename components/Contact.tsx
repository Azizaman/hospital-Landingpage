'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you! Your message has been sent successfully. We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="Contact" className="py-20 bg-neutral-900 flex items-center justify-center">
  <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">Contact Us</h2>
      <p className="text-neutral-300 max-w-3xl mx-auto animate-fadeInUp animate-delay-1s">
        Get in touch with us for any inquiries or schedule a consultation at D5 Elements Unani Natural Care System.
      </p>
    </div>

    <div className="flex justify-center">
      {/* Contact Info Section */}
      <div className="space-y-8 animate-fadeInLeft w-full md:max-w-md lg:max-w-lg">
        <div className="bg-neutral-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
          <div className="space-y-4">
            <div className="flex items-start text-neutral-300">
              <svg className="w-6 h-6 text-emerald-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="font-medium text-white">Location</h4>
                <p>123 Healthcare Avenue, City Name, State, Country - PIN</p>
              </div>
            </div>

            <div className="flex items-start text-neutral-300">
              <svg className="w-6 h-6 text-emerald-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-white">Phone</h4>
                <p>+1 234 567 8900</p>
                <p>+1 234 567 8901</p>
              </div>
            </div>

            <div className="flex items-start text-neutral-300">
              <svg className="w-6 h-6 text-emerald-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p>info@d5elements.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
          <div className="space-y-2 text-neutral-300">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}