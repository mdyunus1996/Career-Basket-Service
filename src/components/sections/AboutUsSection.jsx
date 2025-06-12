import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Zap, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-accent mb-4" />,
    title: "400,000+",
    description: "Students engaged through school and college outreach",
  },
  {
    icon: <Users className="h-10 w-10 text-accent mb-4" />,
    title: "900+",
    description: "Educators mobilized through workshops and panels",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent mb-4" />,
    title: "200+",
    description: "Successful student-centric events",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent mb-4" />,
    title: "100+",
    description: "University and institutional collaborations",
  },
];

const AboutUsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-12 md:py-18  bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-foreground/80 max-w-3xl md:max-w-5xl mx-auto">
            Career Basket Services (CBS) is a pioneering education services
            company dedicated to building meaningful connections across the
            learning ecosystem. Since 2017, we’ve worked with students,
            educators, and institutions to co-create opportunities that shape
            careers and future-ready communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-foreground/80 max-w-3xl md:max-w-5xl mx-auto">
            We believe every student deserves informed choices, every educator
            deserves a platform, and every institution deserves visibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
