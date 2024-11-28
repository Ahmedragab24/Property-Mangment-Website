"use client";

import { StatusCompany } from "@/constants";
import { MoveDown, MoveDownLeft, MoveDownRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [value, setValue] = useState<number>(from);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: to,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [inView, controls, to]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: from }}
      animate={controls}
      onUpdate={(latest: { y: number }) => setValue(Math.floor(latest?.y || 0))}
    >
      {value}
    </motion.span>
  );
};

const Status = () => {
  return (
    <section>
      <div className="mx-auto">
        <h1 className="text-xl lg:text-3xl text-center text-shadow-primary mb-2">
          States Company
        </h1>
        <div className="flex justify-center items-center mb-8 text-primary">
          <MoveDownLeft size={30} />
          <MoveDown size={30} />
          <MoveDownRight size={30} />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 text-center">
          {StatusCompany.map(({ num, title }, index) => (
            <div
              key={index}
              className="w-[180px] lg:w-[220px] xl:w-[300px] flex flex-col justify-center items-center p-4 lg:px-20 lg:py-8 bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group"
            >
              <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                <Counter from={0} to={num} />+
              </h2>
              <p className="leading-relaxed">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
