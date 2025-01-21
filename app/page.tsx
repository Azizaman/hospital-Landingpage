"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import { CardDemo } from "@/components/CardAnimation";
import DoctorsTeam from "@/components/Doctors";

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
      <Hero/>

      {/* Features Section */}
      <Features/>

      {/* Services Grid */}
      <Services/>

      <DoctorsTeam/>

      {/* Stats Section */}
      <Stats/>
    </main>
  );
}