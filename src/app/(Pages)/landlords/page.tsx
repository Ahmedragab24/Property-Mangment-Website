import React from "react";
import Hero from "./sections/Hero";
import Status from "./sections/Status";
import Accordions1 from "./sections/Accordions1";
import Accordions2 from "./sections/Accordions2";
import Video from "./sections/Video";
import Partners from "./sections/Partners";
import HandlerNavColor from "@/components/layout/HandlerNavColor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landlords",
  description:
    "Curious about what your property could earn? With just a few clicks, find out the potential revenue your rental could generate with Property.",
};

const Landlords = () => {
  return (
    <main className="relative py-16">
      <HandlerNavColor BackgroundImg={true} />
      <div className="container">
        <Hero />
        <Status />
        <Accordions1 />
        <Accordions2 />
        <Video />
        <Partners />
      </div>
    </main>
  );
};

export default Landlords;
