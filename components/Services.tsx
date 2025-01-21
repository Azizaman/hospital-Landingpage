"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Import static images
import mudtherapy from "@/public/images/mud-theroapy.jpg";
import swedishmassage from '@/public/images/swedish-massage.jpg';
import oldagetherapy from '@/public/images/oldage-therapy.jpg';
import familytherapy from '@/public/images/family-therapy.jpg';
import diettherapy from '@/public/images/diet-therapy.jpg';
import detoxtherapy from '@/public/images/detox-therapy.jpg';


const Services = () => {
  const services = [
    {
      title: "Mud therapy",
      description: "Comprehensive health checkups and treatments",
      image: mudtherapy,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
    {
      title: "Diet Therapy",
      description: "Expert heart care and cardiac procedures",
      image: diettherapy,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
    {
      title: "Theraputic Swedish Massage",
      description: "Advanced diagnostic testing facilities",
      image: swedishmassage,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
    {
      title: "Detox Therapy",
      description: "24/7 medicine availability",
      image: detoxtherapy,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
    {
      title: "Advance Care Senior For Citizens",
      description: "Round-the-clock emergency services",
      image: oldagetherapy,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
    {
      title: "Family Care",
      description: "Complete healthcare for your family",
      image: familytherapy,
      hoverGif: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
    },
  ];

  return (
    <section className="py-32 bg-black items-center">
      <div className="container mx-auto px-4 lg:px-32">
        <h2 className="text-shiny text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ml-12 md:mr-4">
          {services.map((service, index) => (
            <div key={index} className="max-w-xs w-full">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10 border border-transparent dark:border-neutral-800",
                  "hover:bg-black hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
                style={{
                  backgroundImage: `url(${service.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text relative z-50">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-50 relative">{service.title}</h3>
                  <p className="font-normal text-base text-gray-50 relative my-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
