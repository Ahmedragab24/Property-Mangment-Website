import React from "react";
import Hero from "./sections/Hero";
import WorldMap from "./sections/Map";
import AboutSection from "./sections/About";
import User from "./sections/User";
import Owner from "./sections/Owner";
import Features from "./sections/Features";
import Contact from "./sections/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <WorldMap />
      <AboutSection />
      <User />
      <Owner />
      <Features />
      <Contact />
    </div>
  );
};

export default page;
