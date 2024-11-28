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
import ImageOwner1 from "/src/public/images/proprety owner1.jpg";
import ImageOwner2 from "/src/public/images/proprety owner2.jpg";
import ImageOwner3 from "/src/public/images/proprety owner3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      if (scrollY.get() > 2650 && scrollY.get() < 4850) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const unsubscribeScroll = scrollY.on("change", handleScroll);
    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <section className="relative py-16 bg-secondary overflow-hidden" id="owner">
      <div className="container">
        <div className="mb-20">
          <div className="flex flex-col items-center text-center gap-y-4">
            <h1 className="text-3xl uppercase text-shadow-primary">
              For Property Owners
            </h1>
            <h2 className="lg:w-[70%] text-sm text-textColor">
              From synchronized pricing across multiple marketing platforms,
              smart rates to ensure you maximize earnings to even booking
              repairs and maintenance, Hububb ensures your time is spent
              building your property business, not working within it.
            </h2>
            <Button>Add a Listing</Button>
          </div>

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
            className="relative flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref1}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-full lg:w-1/2 h-[250px] lg:h-[450px] rounded-2xl shadow-2xl group overflow-hidden"
            >
              <Image
                width={1400}
                height={1000}
                src={ImageOwner1}
                loading="lazy"
                alt="A London skyscraper"
                className="w-full h-[250px] lg:h-[450px]  duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="w-full lg:w-[45%]">
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
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-primary relative inline-block mx-2">
                  <span className="relative text-xl">
                    Discover Your Potential
                  </span>
                </span>
                Receive a personalized earnings estimate with detailed market
                comparisons and competitor insights.
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
            className="relative flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref2}
          >
            <div className="w-full lg:w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-medium mb-4"
              >
                Prepare Your Property
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, x: 100 }}
                className="leading-8"
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-primary relative inline-block mx-2">
                  <span className="relative text-xl">We Handle Everything</span>
                </span>
                From interior design to security setup, we handle everything to
                make your property guest-ready.
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-full lg:w-1/2 h-[250px] lg:h-[450px] rounded-2xl shadow-2xl group overflow-hidden"
            >
              <Image
                width={1400}
                height={1000}
                src={ImageOwner2}
                loading="lazy"
                alt="A London skyscraper"
                className="w-full h-[250px] lg:h-[450px] duration-500 group-hover:scale-110"
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
            className="relative flex flex-col md:flex-row justify-between items-center gap-4"
            ref={ref3}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0, x: 100 }}
              className="w-full lg:w-1/2 h-[250px] lg:h-[450px] rounded-2xl shadow-2xl group overflow-hidden"
            >
              <Image
                width={1400}
                height={1000}
                src={ImageOwner3}
                loading="lazy"
                alt="A London skyscraper"
                className="w-full h-[250px] lg:h-[450px] duration-500 group-hover:scale-110"
              />
            </motion.div>

            <div className="w-full lg:w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-medium mb-4"
              >
                Go Live and Earn
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, x: 100 }}
                className="leading-8"
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-primary relative inline-block mx-2">
                  <span className="relative text-xl">
                    Relax and Reap the Rewards
                  </span>
                </span>
                Your property goes live, and we take care of the rest,
                maximizing your returns effortlessly.
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

        <div>
          <div className="flex flex-col items-center text-center gap-y-4">
            <h1 className="text-3xl uppercase">List your Property</h1>
            <h2 className="lg:w-[50%] text-sm text-textColor">
              Make passive income. Share your beautiful space with thousands of
              guests who are looking for a lovely space to temporarily call
              home.
            </h2>
            <Link href="/landlords">
              <Button>Add a Listing</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
