"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Users, 
  Clock, 
  Award,
  Heart,
  Microscope,
  Pill,
  Stethoscope,
  Star,
  CheckCircle
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 spotlight-golden"></div>
        <div className="absolute inset-0 spotlight-1"></div>
        <div className="absolute inset-0 spotlight-2"></div>
        <div className="absolute inset-0 spotlight-3"></div>
        <div className="hero-glow"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        
        <div className="container relative z-10 mx-auto px-4 py-32 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <h1 className="text-shiny text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-float">
                Advanced Healthcare
                <br />
                For Your Future
              </h1>
              <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl"></div>
            </div>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Experience world-class medical care with cutting-edge technology
              and compassionate healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="gradient-border bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full group transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 text-lg px-8 py-6 rounded-full group transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-shiny text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience healthcare excellence with our state-of-the-art facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Doctors",
                description: "World-class medical professionals at your service"
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description: "Tailored treatment plans for your specific needs"
              },
              {
                icon: Award,
                title: "Latest Technology",
                description: "Cutting-edge medical equipment and procedures"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="fancy-card p-8 rounded-2xl gradient-border group"
              >
                <div className="relative z-10">
                  <feature.icon className="h-12 w-12 text-white/80 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-white text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-shiny text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "General Medicine",
                description: "Comprehensive health checkups and treatments"
              },
              {
                icon: Heart,
                title: "Cardiology",
                description: "Expert heart care and cardiac procedures"
              },
              {
                icon: Microscope,
                title: "Laboratory",
                description: "Advanced diagnostic testing facilities"
              },
              {
                icon: Pill,
                title: "Pharmacy",
                description: "24/7 medicine availability"
              },
              {
                icon: Activity,
                title: "Emergency Care",
                description: "Round-the-clock emergency services"
              },
              {
                icon: Users,
                title: "Family Care",
                description: "Complete healthcare for your family"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="fancy-card p-8 rounded-2xl border-0 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-white/80 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <Button className="mt-6 gradient-border bg-white/5 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10,000+", label: "Patients Served" },
              { icon: Award, value: "25+", label: "Years Experience" },
              { icon: Clock, value: "24/7", label: "Emergency Care" },
              { icon: CheckCircle, value: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <stat.icon className="h-10 w-10 mx-auto text-white/80 mb-4 group-hover:text-white transition-colors" />
                <div className="text-4xl font-bold text-shiny mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}