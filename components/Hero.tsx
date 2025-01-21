import React from 'react'
import { Button } from './ui/button'
import { useEffect, useRef } from "react";
const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {



        const setInitialSpotlightPosition = () => {
            if (!heroRef.current) return;
      
            const rect = heroRef.current.getBoundingClientRect();
            const x = rect.width / 2; // Center X
            const y = rect.height / 2; // Center Y
      
            heroRef.current.style.setProperty("--mouse-x", `${x}px`);
            heroRef.current.style.setProperty("--mouse-y", `${y}px`);
          };







        const handleMouseMove = (e: MouseEvent) => {
          if (!heroRef.current) return;
          
          const rect = heroRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          heroRef.current.style.setProperty('--mouse-x', `${x}px`);
          heroRef.current.style.setProperty('--mouse-y', `${y}px`);
        };


        setInitialSpotlightPosition();
    
        const element = heroRef.current;
        if (element) {
          element.addEventListener('mousemove', handleMouseMove);
          return () => element.removeEventListener('mousemove', handleMouseMove);
        }
      }, []);




  return (
    <div>
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
              <Button className="gradient-border  bg-white/5 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full group transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" className="border-white/10  text-white hover:bg-white/5 text-lg px-8 py-6 rounded-full group transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero