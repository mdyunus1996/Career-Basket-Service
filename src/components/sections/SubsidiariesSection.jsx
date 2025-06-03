import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, MonitorPlay } from "lucide-react";

const subsidiaries = [
  {
    name: "Career Basket Services Pvt Limited",
    year: 2017,
    description:
      "Your turn around Partner. Empowering highereducation institutions tostrategically grow, adaptto new changes, launchinnovative programs.",
  },
  {
    name: "Career Basket Services Proprietorship",
    year: 2020,
    description: "One stop destination for your entire study in India Journey.",
  },
  {
    name: "Educators Arena",
    year: 2023,
    description:
      "Linking HEI, Test Prep Organisations and aspirants through pathbreaking Mega Career Events.",
  },
  {
    name: "I Promote Education Global",
    year: 2024,
    description:
      "Latest Edition Will make your international education journey easy.",
  },
];

const SubsidiariesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="platforms" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Subsidiaries
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Brief overview of the 4 subsidiary companies under Career Basket
            Service
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subsidiaries.map((sub, index) => (
            <motion.div
              key={sub.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <CardHeader className="items-center text-center">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-lg font-extrabold shadow-md">
                    {sub.year}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-full mb-4 ${
                    sub.logo ? "bg-accent/10" : "bg-primary/10"
                  }`}
                >
                  {sub.logo}
                </div>
                <CardTitle className="text-primary text-lg md:text-xl font-semibold">
                  {sub.name}nnn
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">
                  {sub.description}
                </CardDescription>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
