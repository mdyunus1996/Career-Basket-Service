
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Zap, Users, Lightbulb, Globe } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-accent mb-4" />,
    title: 'Innovation',
    description: 'Pioneering new technologies and approaches to enhance learning experiences.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent mb-4" />,
    title: 'Empowerment',
    description: 'Equipping students and educators with tools and knowledge for success.',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent mb-4" />,
    title: 'Dynamism',
    description: 'Adapting and evolving to meet the ever-changing needs of the education sector.',
  },
  {
    icon: <Globe className="h-10 w-10 text-accent mb-4" />,
    title: 'Connectivity',
    description: 'Building a global network of learners, educators, and institutions.',
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
        ease: "easeOut"
      }
    })
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            The principles that guide our mission to revolutionize education.
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
                <div className="flex justify-center">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{value.description}</CardDescription>
              </CardContent>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
