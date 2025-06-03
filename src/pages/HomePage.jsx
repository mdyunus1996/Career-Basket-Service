import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FoundersVisionSection from "@/components/sections/FoundersVisionSection";
import SubsidiariesSection from "@/components/sections/SubsidiariesSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ClientPartnershipsSection from "@/components/sections/ClientPartnershipsSection";
import ContactSection from "@/components/sections/ContactSection"; // Added a contact section

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoreValuesSection />
      {/* <ServicesSection /> */}
      <SubsidiariesSection />
      <SuccessStoriesSection />
      <ClientPartnershipsSection />
      <FoundersVisionSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
