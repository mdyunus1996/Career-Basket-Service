import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FoundersVisionSection from "@/components/sections/FoundersVisionSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ClientPartnershipsSection from "@/components/sections/ClientPartnershipsSection";
import ContactSection from "@/components/sections/ContactSection"; // Added a contact section
import AboutUsSection from "../components/sections/AboutUsSection";
import OurVerticalsSection from "../components/sections/OurVerticalsSection";
import PhotoGallerySection from "../components/sections/PhotoGallerySection";
import CBSFoundationSection from "../components/sections/CBSFoundationSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <SuccessStoriesSection />
      <OurVerticalsSection />
      <CBSFoundationSection />
      <ClientPartnershipsSection />
      <ServicesSection />
      <PhotoGallerySection />
      <ContactSection />
    </>
  );
};

export default HomePage;
