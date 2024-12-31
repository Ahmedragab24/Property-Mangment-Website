"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { UserSection } from "@/constants";
import Link from "next/link";

const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});
const MotionRight = dynamic(
  () => import("@/components/animations/MotionRight"),
  {
    ssr: false,
  }
);

const User = () => {
  return (
    <section className="user" id="user">
      <Swiper
        modules={[Navigation, Pagination]}
        speed={800}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, type: "fraction" }}
        className="container relative"
      >
        {UserSection.map(
          ({ title, supTitle1, supTitle2, description, image }, indx) => (
            <SwiperSlide key={indx}>
              <div className="w-full grid justify-center items-center gap-4 md:py-32 md:px-8 md:grid-cols-2 lg:pt-36 lg:gap-12 mb-14 md:mb-2">
                <MotionLeft className="flex flex-col items-center justify-center">
                  <Image
                    src={image}
                    alt={title}
                    className="w-[75%] h-[300px] justify-self-center md:h-[450px] md:w-[500px] lg:translate-y-[-3rem] "
                    width={500}
                    height={500}
                  />
                  <div className="md:mt-[-5rem] text-shadow-smooth">
                    <h4 className="text-sm text-center">{supTitle1}</h4>
                    <span className="text-sm text-center">{supTitle2}</span>
                  </div>
                </MotionLeft>

                <MotionRight className="flex flex-col justify-center items-center text-center lg:text-left md:items-start gap-4">
                  <h3 className="section-title !text-left !mx-0 ">
                    For Landlords
                  </h3>
                  <h1 className="text-2xl md:text-2xl max-w-[80%] font-black  leading-[109%]">
                    {title}
                  </h1>
                  <p className="text-sm text-textColor max-w-[80%] lg:pr-8">
                    {description}
                  </p>
                  <div className="flex flex-col  md:flex-row justify-start items-center gap-4">
                    <Button className="lg:h-14" size={"lg"}>
                      <Link href={"/landlords"}>Add Listing Now</Link>
                    </Button>
                    <Button
                      variant={"link"}
                      className="button--link button--flex "
                    >
                      <Phone className="me-1" size={"16"} /> Speak Us Now
                      <i className="bx bx-right-arrow-alt button__icon"></i>
                    </Button>
                  </div>
                </MotionRight>
              </div>
            </SwiperSlide>
          )
        )}

        <div className="swiper-navigation container justify-end">
          <div className="swiper-button-next">
            <ChevronLeft className="text-foreground" />
          </div>
          <div className="swiper-button-prev">
            <ChevronRight className="text-foreground" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default User;
