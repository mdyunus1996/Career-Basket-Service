import React from "react";
import { motion } from "framer-motion";
import Image1 from "@/asserts/events/image-1.jpg";
import Image2 from "@/asserts/events/image-2.jpg";
import Image3 from "@/asserts/events/image-3.jpg";
import Image4 from "@/asserts/events/image-4.jpg";
import Image5 from "@/asserts/events/image-5.jpg";
import Image6 from "@/asserts/events/image-6.jpg";
import Image7 from "@/asserts/events/image-7.jpg";
import Image8 from "@/asserts/events/image-8.jpg";
import Image9 from "@/asserts/events/image-9.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const PhotoGallerySection = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.25,
        duration: 0.25,
        type: "spring",
        stiffness: 100,
      },
    }),
  };
  return (
    <section className="py-16 bg-background" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A glimpse into our events and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative transition-all duration-300"
            >
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-sm group"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
