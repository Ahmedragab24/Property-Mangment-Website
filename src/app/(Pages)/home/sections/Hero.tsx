"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  MessageCircleMore,
  MoveRight,
  Search,
} from "lucide-react";
import HomeImg1 from "/src/assets/images/home-1.jpg";
import HomeImg2 from "/src/assets/images/home-2.jpg";
import HomeImg3 from "/src/assets/images/home-3.jpg";
import HomeImg4 from "/src/assets/images/home-4.jpg";
import { SearchProperty } from "../components/SearchProprtys";
import { SearchProprty2 } from "../components/SearchProprtys2";
import { SearchProprty3 } from "../components/SearchProprtys3";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import dynamic from "next/dynamic";
import {
  setColorNavLink,
  setIsBackgroundImg,
} from "@/store/features/heroNav/heroNavSlice";

const MotionFade = dynamic(() => import("@/components/animations/MotionFade"), {
  ssr: false,
});
const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});
const MotionDown = dynamic(() => import("@/components/animations/MotionDown"), {
  ssr: false,
});

export default function Hero() {
  const [showProperty, setShowProperty] = useState(false);
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(true));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowProperty(true);
        dispatch(setColorNavLink(false));
      } else {
        setShowProperty(false);

        dispatch(setColorNavLink(true));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <section className={`hero ${showProperty ? "mb-0" : "mb-20"}`}>
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
        <SwiperSlide className="relative pt-[13rem] w-full h-screen z-50">
          <MotionLeft className="container text-center lg:text-left">
            <h3
              className="text-white text-xl lg:text-2xl mb-2 text-shadow-primary"
              data-swiper-parallax="500"
            >
              Architecture
            </h3>
            <h1
              className="text-white text-3xl lg:text-6xl mb-10 font-bold text-shadow"
              data-swiper-parallax="400"
            >
              Relaxing Steep <br /> Lake House
            </h1>

            <Link
              href={"#"}
              className="group duration-300"
              data-swiper-parallax="300"
            >
              <Button
                variant={"link"}
                className="text-white font-semibold text-shadow"
              >
                See Project
                <MoveRight
                  size={18}
                  className="duration-300 ml-2  group-hover:translate-x-2"
                />
              </Button>
            </Link>
          </MotionLeft>

          <Image
            src={HomeImg1}
            alt="Home"
            width={1400}
            height={650}
            className="absolute top-0 left-0 w-full h-full object-cover object-center lg:object-fill z-[-1]"
            data-swiper-parallax="-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-[-1]"></div>
        </SwiperSlide>

        <SwiperSlide className="relative pt-[13rem] w-full h-screen z-50">
          <MotionLeft className="container text-center lg:text-left">
            <h3
              className="text-white text-xl lg:text-2xl mb-2 text-shadow-primary"
              data-swiper-parallax="500"
            >
              Architecture
            </h3>
            <h1
              className="text-white text-3xl lg:text-6xl mb-10 font-bold text-shadow"
              data-swiper-parallax="400"
            >
              Luxury House <br /> In The Forest
            </h1>

            <Link
              href={"#"}
              className="group duration-300"
              data-swiper-parallax="300"
            >
              <Button
                variant={"link"}
                className="text-white font-semibold text-shadow"
              >
                See Project
                <MoveRight
                  size={18}
                  className="duration-300 ml-2  group-hover:translate-x-2"
                />
              </Button>
            </Link>
          </MotionLeft>

          <Image
            src={HomeImg2}
            alt="Home"
            width={1400}
            height={650}
            className="absolute top-0 left-0 w-full h-full object-cover object-center lg:object-fill z-[-1]"
            data-swiper-parallax="-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-[-1]"></div>
        </SwiperSlide>

        <SwiperSlide className="relative pt-[13rem] w-full h-screen z-50">
          <MotionLeft className="container text-center lg:text-left">
            <h3
              className="text-white text-xl lg:text-2xl mb-2 text-shadow-primary"
              data-swiper-parallax="500"
            >
              Architecture
            </h3>
            <h1
              className="text-white text-3xl lg:text-6xl mb-10 font-bold text-shadow"
              data-swiper-parallax="400"
            >
              Modern House <br /> On The Rock
            </h1>

            <Link
              href={"#"}
              className="group duration-300"
              data-swiper-parallax="300"
            >
              <Button
                variant={"link"}
                className="text-white font-semibold text-shadow"
              >
                See Project
                <MoveRight
                  size={18}
                  className="duration-300 ml-2  group-hover:translate-x-2"
                />
              </Button>
            </Link>
          </MotionLeft>

          <Image
            src={HomeImg3}
            alt="Home"
            width={1400}
            height={650}
            className="absolute top-0 left-0 w-full h-full object-cover object-center lg:object-fill z-[-1]"
            data-swiper-parallax="-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/5  z-[-1]"></div>
        </SwiperSlide>

        <SwiperSlide className="relative pt-[13rem] w-full h-screen z-50">
          <MotionLeft className="container text-center lg:text-left">
            <h3
              className="text-white text-xl lg:text-2xl mb-2 text-shadow-primary"
              data-swiper-parallax="500"
            >
              Architecture
            </h3>
            <h1
              className="text-white text-3xl lg:text-6xl mb-10 font-bold text-shadow"
              data-swiper-parallax="400"
            >
              Luxury <br /> Curved House
            </h1>

            <Link
              href={"#"}
              className="group duration-300"
              data-swiper-parallax="300"
            >
              <Button
                variant={"link"}
                className="text-white font-semibold text-shadow"
              >
                See Project
                <MoveRight
                  size={18}
                  className="duration-300 ml-2  group-hover:translate-x-2"
                />
              </Button>
            </Link>
          </MotionLeft>

          <Image
            src={HomeImg4}
            alt="Home"
            width={1400}
            height={650}
            className="absolute top-0 left-0 w-full h-full object-cover object-center lg:object-fill z-[-1]"
            data-swiper-parallax="-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-[-1]"></div>
        </SwiperSlide>

        <MotionDown className="container w-1/6 absolute z-10 left-6 bottom-16 grid  gap-y-6">
          <Link href={"#"} className="text-white text-2xl">
            <Facebook className="duration-300 hover:text-primary hover:scale-110" />
          </Link>
          <Link href={"#"} className="text-white text-2xl">
            <Instagram className="duration-300 hover:text-primary hover:scale-110" />
          </Link>
          <Link href={"#"} className="text-white text-2xl">
            <MessageCircleMore className="duration-300 hover:text-primary hover:scale-110" />
          </Link>
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
        className={`relative top-[-3rem] mx-auto w-fit py-4 px-4 lg:py-6 lg:px-8 rounded-xl bg-background shadow-primary/30 shadow-2xl  flex-col items-center gap-y-4  z-10 ${
          showProperty ? "flex" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold">Find Your Property</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <SearchProperty />
          <SearchProprty2 />
          <SearchProprty3 />
          <Button variant={"secondary"}>
            Search <Search size={18} className="ml-1" />
          </Button>
        </div>
      </MotionFade>
    </section>
  );
}

{
  /* <video
className="absolute top-0 w-full h-screen object-fill bg-contain brightness-50"
autoPlay
muted
loop
playsInline
>
<source
  src="https://res.cloudinary.com/dk4yvlwr0/video/upload/v1728012351/Red_and_Blue_Modern_YouTube_Intro_Video_p5ffgb.mp4"
  type="video/mp4"
/>
</video>

<div className="container relative h-screen flex justify-center">
<div className="w-1/2 lg:w-2/5 h-fit bg-background/50 absolute bottom-[3rem]  p-10 text-center rounded-2xl shadow-2xl">
  <div className="relative px-16 inline-block p-4 border-2 border-foreground font-bold text-4xl uppercase rounded-2xl">
    <span className="absolute top-3 left-3 w-1 h-1 bg-foreground rounded-full"></span>
    <span className="absolute top-3 right-3 w-1 h-1 bg-foreground rounded-full"></span>
    <span className="absolute bottom-3 left-3 w-1 h-1 bg-foreground rounded-full"></span>
    <span className="absolute bottom-3 right-3 w-1 h-1 bg-foreground rounded-full"></span>
    <div className="relative">Open Rent</div>
    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-l-2 border-foreground w-10"></span>
    <span className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 border-t-2 border-r-2 border-foreground w-10"></span>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-b-2 border-l-2 border-foreground w-10"></span>
    <span className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 border-b-2 border-r-2 border-foreground w-10"></span>
  </div>
  <p className="m-4 text-2xl">3rd floor luxury office tower</p>
  <div className="flex justify-center gap-3">
    <Button variant={"outline"}>Agent</Button>
    <Button variant={"outline"}>Agent</Button>
    <Button variant={"outline"}>Agent</Button>
  </div>
</div>
</div> */
}
