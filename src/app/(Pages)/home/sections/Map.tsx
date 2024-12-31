import React from "react";
import Image from "next/image";
import Point from "../components/Point";
import map from "/src/public/images/map.png";
import dynamic from "next/dynamic";

const MotionDown = dynamic(() => import("@/components/animations/MotionDown"), {
  ssr: true,
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

        <Point className="absolute top-[33%] left-[48%]" city={["cairo"]} />
        <Point className="absolute top-[18%] left-[44%]" city={["london"]} />
        <Point className="absolute top-[35%] left-[56%]" city={["dubai"]} />
        <Point className="absolute top-[19%] left-[50%]" city={["paris"]} />
        <Point className="absolute top-[25%] left-[28%]" city={["new york"]} />
        <Point className="absolute top-[30%] left-[60%]" city={["tokyo"]} />
      </div>
    </section>
  );
};

export default Map;
