import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Founder from "@/asserts/founder-img.png";

const FoundersVisionSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Founder's Vision
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            The driving force behind our commitment to educational excellence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-xl glassmorphism-card"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-6 md:mb-0 md:mr-8 ring-4 ring-accent ring-offset-4 ring-offset-background">
              <img
                className="h-full w-full object-cover"
                alt="Founder of CBS Group"
                src={Founder}
              />
              <AvatarFallback className="text-3xl">FV</AvatarFallback>
            </Avatar>
            <div>
              <Quote className="h-12 w-12 text-accent/50 mb-4 transform -scale-x-100" />
              <p className="text-xl md:text-2xl font-medium italic text-foreground/90 mb-6">
                "Our vision is to be the leading platform for student career
                development and institutional partnerships and to empower
                students to realize their aspirations through educational
                workshops, expert-led seminars, career expos, and networking
                events"
              </p>
              <p className="text-lg font-semibold text-primary">Bharat Jain</p>
              <p className="text-sm text-muted-foreground">
                Founder & CEO, CBS Group of Companies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersVisionSection;
