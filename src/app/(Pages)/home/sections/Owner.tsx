"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import ImageOwner from "@/assets/images/home-1.jpg";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Owner = () => {
  // Image
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress: image1 } = useScroll({ target: ref1 });
  const { scrollYProgress: image2 } = useScroll({ target: ref2 });
  const { scrollYProgress: image3 } = useScroll({ target: ref3 });
  const { scrollY } = useScroll();
  const y1 = useParallax(image1, 300);
  const y2 = useParallax(image2, 300);
  const y3 = useParallax(image3, 300);

  // line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  // line position state
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 2650 && scrollY.get() < 4600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const unsubscribeScroll = scrollY.onChange(handleScroll);
    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <section className="relative py-16 bg-secondary overflow-hidden">
      <div className="container">
        <div className="mb-20">
          <h1 className="text-xl text-center uppercase text-shadow-primary">
            For Property Owners
          </h1>
          <motion.div
            className={`hidden lg:block w-full h-[4px] bg-primary mx-auto ${
              isFixed
                ? "fixed top-16 left-0 right-0 z-10"
                : "absolute top-0 left-0 right-0"
            }`}
            style={{ scaleX }}
          />
        </div>

        <article className="mb-20">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref1}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-1/2 h-[450px] shadow-md group overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={ImageOwner}
                alt="A London skyscraper"
                className="w-full h-[450px] duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-medium mb-4"
              >
                Get Your Earnings Estimate
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, x: 100 }}
                className="leading-8"
              >
                Discover Your Potential Receive a
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-2">
                  <span className="relative">personalized</span>
                </span>
                earnings estimate with detailed market comparisons and
                competitor insights.
              </motion.div>
            </div>
          </div>
          <motion.h2
            className="text-center text-4xl font-black text-primary text-shadow"
            style={{ y: y1 }}
          >
            {`#001`}
          </motion.h2>
        </article>

        <article className="mb-20">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref2}
          >
            <div className="w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-medium mb-4"
              >
                Get Your Earnings Estimate
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, x: 100 }}
                className="leading-8"
              >
                Discover Your Potential Receive a
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-2">
                  <span className="relative">personalized</span>
                </span>
                earnings estimate with detailed market comparisons and
                competitor insights.
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-1/2 h-[450px] shadow-md group overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={ImageOwner}
                alt="A London skyscraper"
                className="w-full h-[450px] duration-500 group-hover:scale-110"
              />
            </motion.div>
          </div>
          <motion.h2
            className="text-center text-4xl font-black text-primary text-shadow"
            style={{ y: y2 }}
          >
            {`#002`}
          </motion.h2>
        </article>

        <article className="mb-20">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref3}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-1/2 h-[450px] shadow-md group overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={ImageOwner}
                alt="A London skyscraper"
                className="w-full h-[450px] duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-medium mb-4"
              >
                Get Your Earnings Estimate
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, x: 100 }}
                className="leading-8"
              >
                Discover Your Potential Receive a
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block mx-2">
                  <span className="relative">personalized</span>
                </span>
                earnings estimate with detailed market comparisons and
                competitor insights.
              </motion.div>
            </div>
          </div>
          <motion.h2
            className="text-center text-4xl font-black text-primary text-shadow"
            style={{ y: y3 }}
          >
            {`#003`}
          </motion.h2>
        </article>
      </div>
    </section>
  );
};

export default Owner;
