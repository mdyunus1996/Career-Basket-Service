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

const CoreValuesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Career Basket Services (CBS) is a pioneering education services
            company dedicated to building meaningful connections across the
            learning ecosystem. Since 2017, we’ve worked with students,
            educators, and institutions to co-create opportunities that shape
            careers and future-ready communities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.custom
              key={value.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              component={Card}
              className="text-center glassmorphism-card bg-background/70 p-2"
            >
              <CardHeader>
                {/* <div className="flex justify-center">{value.icon}</div> */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-md font-extrabold shadow-md">
                    {value.title}
                  </div>
                </div>
                {/* <CardTitle className="text-xl">{value.title}</CardTitle> */}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mt-10">
                  {value.description}
                </CardDescription>
              </CardContent>
            </motion.custom>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We believe every student deserves informed choices, every educator
            deserves a platform, and every institution deserves visibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
