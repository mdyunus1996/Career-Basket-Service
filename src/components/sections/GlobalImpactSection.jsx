
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <MapPin className="h-10 w-10 text-accent" />, value: '50+', label: 'Countries Reached' },
  { icon: <Users className="h-10 w-10 text-accent" />, value: '1M+', label: 'Students Impacted' },
  { icon: <TrendingUp className="h-10 w-10 text-accent" />, value: '200+', label: 'Educational Institutions Partnered' },
];

const GlobalImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Making a difference in education worldwide through technology and innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              {stat.icon}
              <p className="text-4xl font-bold mt-2">{stat.value}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            alt="World map showing CBS Group's global reach"
           src="https://images.unsplash.com/photo-1676186318068-df5df0b35130" />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;
