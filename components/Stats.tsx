import React from 'react'
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

const Stats = () => {
  return (
    <div>
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
    </div>
  )
}

export default Stats