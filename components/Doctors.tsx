import Link from "next/link";
import Image from "next/image";
import rehman from "@/public/images/dr.rehman 2.jpg";

export default function DoctorsTeam() {
  return (
    <section id="DoctorsTeam" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Our Expert Doctors
          </h2>
          <p className="text-white max-w-3xl mx-auto animate-fadeInUp animate-delay-1s">
            Meet our team of experienced Unani practitioners dedicated to providing you with the best natural healthcare solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Doctor 1 */}
          <div className="bg-black rounded-xl shadow-lg overflow-hidden animate-fadeInUp border border-white">
            <div className="h-64 bg-slate-900 flex items-center justify-center">
              <Image
                src={rehman}
                alt="Dr. Rehman"
                className="h-full w-auto object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Dr. Abdul Rehman Durvesh
              </h3>
              <p className="text-white mb-3">Senior Unani Practitioner</p>
              <p className="text-white mb-4">
                Specializing in herbal medicine and traditional treatments with 15+ years of experience.
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center text-neutral-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white ">Mon - Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>


          {/* Doctor 2 */}
          <div className="bg-black rounded-xl shadow-lg overflow-hidden animate-fadeInUp border border-white">
            <div className="h-64 bg-slate-900 flex items-center justify-center">
              <Image
                src={rehman}
                alt="Dr. Rehman"
                className="h-full w-auto object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Dr. Abdul Rehman Durvesh
              </h3>
              <p className="text-white mb-3">Senior Unani Practitioner</p>
              <p className="text-white mb-4">
                Specializing in herbal medicine and traditional treatments with 15+ years of experience.
              </p>
              <div className="border-t pt-4">
                <div className="flex items-center text-neutral-600">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white ">Mon - Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>





          {/* Repeat similar blocks for Doctor 2 and Doctor 3 */}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#Appointment"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors animate-pulse"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
