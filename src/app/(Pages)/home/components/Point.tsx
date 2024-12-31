"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/hooks";
import { setFilteringCity, setFilteringType } from "@/store/features/FilteringProperties/filtering";
import { city } from "@/interfaces";
import { useRouter } from "next/navigation";

interface Iprops {
  className: string;
  city: city;
}

const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});

const Point = ({ className, city }: Iprops) => {
  const dispatch = useAppDispatch();
  const Route = useRouter();

  // Handler Point
  const HandlerPoint = () => {
    dispatch(setFilteringCity(city as city));
    dispatch(setFilteringType("city"));
    Route.push("/property");
  };

  return (
    <div className={`absolute cursor-pointer duration-500 group ${className}`} onClick={HandlerPoint}>
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
