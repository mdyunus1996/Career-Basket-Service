
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Laptop, Layers, Users2, Brain } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: 'E-Learning Platforms',
    description: 'Customizable and scalable learning management systems.',
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Digital Content Creation',
    description: 'Engaging and interactive educational materials for all levels.',
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: 'Teacher Training Programs',
    description: 'Empowering educators with modern pedagogical techniques.',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Tutoring',
    description: 'Personalized learning paths and adaptive assessments.',
  },
];

const ServicesSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate the educational experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.custom
              key={service.title}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              component={Card}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader className="bg-primary/5">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-3">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
