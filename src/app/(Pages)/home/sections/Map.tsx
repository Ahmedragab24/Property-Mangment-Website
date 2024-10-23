import React from "react";
import Image from "next/image";
import Point from "../components/Point";
import map from "@/assets/images/map.png";
import dynamic from "next/dynamic";

const MotionDown = dynamic(() => import("@/components/animations/MotionDown"), {
  ssr: false,
});

const Map = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <MotionDown>
          <Image
            src={map}
            alt="map"
            width={1500}
            height={700}
            className="w-full lg:w-[75%] h-auto md:h-[400px] mx-auto object-contain"
          />
        </MotionDown>

        <Point className="top-32 sm:top-20 md:top-10 left-1/2" city="Egypt" />
        <Point
          className="top-[39%] left-[45%] sm:top-[35%] sm:left-[49%] md:top-[32%] md:left-[47%]"
          city="Egypt"
        />
        <Point
          className="top-[38%] left-[50%] sm:left-[52%] md:top-[30%] md:left-[51%]"
          city="Riyadh"
        />
        <Point className="top-[29%] left-[60%]" city="Egypt" />
        {/* <Point className="top-[30%] left-[60%]" city="Egypt" /> */}
        {/* <Point className="top-[18%] left-[30%]" city="USA" /> */}
        {/* <Point className="top-[55%] left-[32%]" city="Janeiro" /> */}
      </div>
    </section>
  );
};

export default Map;
