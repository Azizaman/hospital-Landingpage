import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setInitialSpotlightPosition = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;

      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    setInitialSpotlightPosition();

    const element = heroRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div>
      <section
  ref={heroRef}
  className="relative min-h-screen overflow-hidden spotlight-green animated-spotlight"
>
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
  <div className="absolute inset-0 bg-leaf-pattern opacity-10"></div>

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4 py-32 min-h-screen flex items-center">
    <div className="max-w-5xl mx-auto text-center">
      {/* Heading */}
      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-green-400">
          Embrace Healing By <br />
          <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-green-400">
            D5 Elements
          </span>
        </h1>
        <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-transparent via-green-400/10 to-transparent blur-xl"></div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
        Experience the art of healing through the wisdom of Unani medicine and
        modern technology. At{" "}
        <span className="text-green-400 font-semibold underline decoration-green-400 decoration-2 underline-offset-4 hover:decoration-green-500 transition duration-300">
          D5 Elements
        </span>
        , we combine natural remedies and science to provide holistic care.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button className="gradient-border bg-green-900/20 text-green-300 hover:bg-green-900/30 text-lg px-8 py-6 rounded-full group transition-all duration-300">
          <span className="relative z-10 group-hover:text-green-100 transition-colors">
            Book Appointment
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-400/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
        </Button>
        <Button
          variant="outline"
          className="border-green-500 text-green-300 hover:bg-green-900/20 text-lg px-8 py-6 rounded-full group transition-all duration-300"
        >
          <span className="relative z-10 group-hover:text-green-100 transition-colors">
            Learn More
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
