import React from "react";
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
  CheckCircle,
} from "lucide-react";

const Features = () => {
  return (
    <div>
      <section className="py-32 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-shiny text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience healthcare excellence with our state-of-the-art facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Doctors",
                description: "World-class medical professionals at your service",
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description: "Tailored treatment plans for your specific needs",
              },
              {
                icon: Award,
                title: "Latest Technology",
                description: "Cutting-edge medical equipment and procedures",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className=" p-8 rounded-2xl gradient-border bg-black group"
              >
                <div className="relative z-10">
                  <feature.icon className="h-12 w-12 text-white/80 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
