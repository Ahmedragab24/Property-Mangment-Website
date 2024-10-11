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
            className="w-full lg:w-[75%] h-[400px] mx-auto"
          />
        </MotionDown>

        <Point className="top-10 left-1/2" city="Egypt" />
        <Point className="top-[28%] left-[47%]" city="Egypt" />
        <Point className="top-[24%] left-[51%]" city="Riyadh" />
        <Point className="top-[29%] left-[65%]" city="Egypt" />
        <Point className="top-[35%] left-[59%]" city="Egypt" />
        <Point className="top-[18%] left-[23%]" city="USA" />
        <Point className="top-[55%] left-[28%]" city="Janeiro" />
      </div>
    </section>
  );
};

export default Map;
