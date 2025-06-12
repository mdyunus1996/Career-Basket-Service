import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "@/asserts/hero-background.png";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-radial-hero min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-primary opacity-5 -z-10"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent -z-10"></div>

      <div className="absolute inset-0 z-0">
        <img
          src={HeroBackground}
          alt="Success Story Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 deep-maroon drop-shadow-xl">
            Career Basket Services
            <br />
            <span
              className="text-1xl md:text-2xl lg:text-3xl font-bold mb-6 deep-maroon drop-shadow-md"
              // style={{ color: "#9B0000" }}
            >
              Empowering Students. Engaging Educators. Enabling Institutions.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 text-white drop-shadow-md font-medium">
            Your trusted partner in career discovery, student outreach, and
            educator engagement since 2017.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity neumorphism-button !shadow-none !text-white font-bold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Services
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 transition-colors shadow-md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button> */}
          </div>
        </motion.div>
        {/* <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </motion.div> */}
      </div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-md lg:max-w-xl"
      >
        <img
          src={HeroBackground}
          alt="Hero Illustration"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </motion.div> */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
    </section>
  );
};

export default HeroSection;
