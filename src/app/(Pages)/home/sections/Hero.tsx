"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  setColorNavLink,
  setIsBackgroundImg,
} from "@/store/features/heroNav/heroNavSlice";
import { HeroSlider, HeroSocialLinks } from "@/constants";
import FilteringButtons from "../components/FilteringButtons";
import MotionLeft from "@/components/animations/MotionLeft"
import MotionDown from "@/components/animations/MotionDown"
import MotionFade from "@/components/animations/MotionFade"

const Hero = () => {
  const [showProperty, setShowProperty] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsBackgroundImg(true));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 50;
      setShowProperty(isScrolled);
      dispatch(setColorNavLink(!isScrolled));
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  

  return (
    <section className={`hero relative ${showProperty ? "mb-0" : "mb-20"}`}>
      <Swiper
        className="relative z-10 h-screen"
        modules={[EffectFade, Parallax, Navigation, Pagination]}
        speed={800}
        parallax
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, type: "fraction" }}
      >
        {HeroSlider.map(({ subTitle, title, link, image }, index) => (
          <SwiperSlide
            key={index}
            className="relative pt-[13rem] w-full h-screen z-50"
          >
            <MotionLeft className="container text-center lg:text-left">
              <h3
                className="text-white text-xl lg:text-2xl mb-2 text-shadow-primary"
                data-swiper-parallax="500"
              >
                {subTitle}
              </h3>
              <h1
                className="xl:max-w-[450px] text-white text-3xl lg:text-6xl mb-10 font-bold text-shadow"
                data-swiper-parallax="400"
              >
                {title}
              </h1>

              <Link
                href={"/property"}
                className="group duration-300"
                data-swiper-parallax="300"
              >
                <Button
                  variant={"link"}
                  className="text-white font-semibold text-shadow"
                >
                  {link}
                  <MoveRight
                    size={18}
                    className="duration-300 ml-2  group-hover:translate-x-2"
                  />
                </Button>
              </Link>
            </MotionLeft>

            <Image
              src={image}
              alt="Home"
              width={1400}
              height={650}
              priority
              className="absolute top-0 left-0 w-full h-full object-cover object-center lg:object-fill z-[-1]"
              data-swiper-parallax="-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-[-1]"></div>
          </SwiperSlide>
        ))}

        <MotionDown className="container w-14 lg:w-1/6 absolute z-10 lg:left-8 bottom-16 grid  gap-y-6">
          {HeroSocialLinks.map(({ icon, link }, index) => {
            const Icon = LucideIcons[icon] as React.ElementType;
            return (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="text-white text-2xl"
              >
                {Icon && (
                  <Icon className="duration-300 hover:text-primary hover:scale-110" />
                )}
              </Link>
            );
          })}
        </MotionDown>

        <div className="swiper-navigation container justify-end">
          <div className="swiper-button-next">
            <ChevronLeft />
          </div>
          <div className="swiper-button-prev">
            <ChevronRight />
          </div>
        </div>
      </Swiper>

      <MotionFade
        className={`relative top-[-3rem] mx-auto w-[80%] lg:w-fit py-4 px-4 lg:py-6 lg:px-14 rounded-xl bg-background shadow-primary/30 shadow-2xl  flex-col items-center gap-y-4  z-10 ${
          showProperty ? "flex" : "hidden"
        }`}
      >
        <h2 className="text-xl lg:text-xl text-center font-bold mb-2">
          Find apartments for rent with ease
        </h2>
        <FilteringButtons />
      </MotionFade>
    </section>
  );
};

export default Hero;
