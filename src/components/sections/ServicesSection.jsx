import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Users2,
  Globe,
  BookOpenCheck,
  Award,
  Layers,
  Globe2,
  GraduationCap,
  Landmark,
  Video,
  MessageCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Student Counselling Events",
    description: "UG, PG, and Study Abroad counseling and engagement programs.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "CLAT, MBA & STEM Masterclasses",
    description: "Focused academic masterclasses for competitive preparation.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Educator Meetups & Awards",
    description:
      "Networking events, panel discussions, and educator recognition.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "College Brand Collaborations",
    description: "Partnerships with institutions to amplify student outreach.",
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Content & Webinar Co-hosting",
    description: "Collaborative webinars and co-branded digital content.",
  },
];

const ServicesSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
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
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="items-center text-center px-0">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-primary text-lg md:text-lg font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-0">
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
