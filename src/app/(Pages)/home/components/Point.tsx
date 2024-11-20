"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Iprops {
  className: string;
  city: string;
}

const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});

const Point = ({ className, city }: Iprops) => {
  return (
    <div className={`absolute cursor-pointer duration-500 group ${className}`}>
      <MotionLeft className="flex justify-center items-center">
        <MapPin className="text-primary text-shadow" size={30} />
        <motion.div
          className="absolute bottom-0 w-2 h-2 bg-foreground border border-primary rounded-full shadow-md"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="hidden absolute top-6 duration-500 group-hover:block">
          <h6 className="text-shadow-smooth font-medium underline decoration-4 decoration-primary duration-500">
            {city}
          </h6>
        </div>
      </MotionLeft>
    </div>
  );
};

export default Point;
