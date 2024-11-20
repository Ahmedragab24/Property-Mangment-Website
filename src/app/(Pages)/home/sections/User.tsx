"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

import ImageAbout1 from "@/assets/images/about1.png";
import ImageAbout2 from "@/assets/images/about2.png";
import ImageAbout3 from "@/assets/images/about3.png";

import dynamic from "next/dynamic";

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
        className="container">
        {/* HOME SLIDER 1 */}
        <SwiperSlide>
          <div className="w-full grid justify-center items-center gap-4 md:py-32 md:px-8 md:grid-cols-2 lg:pt-36 lg:gap-12 mb-14 md:mb-2">
            <MotionLeft className="flex flex-col items-center justify-center">
              <Image
                src={ImageAbout1}
                alt="Home Image 1"
                className="w-[75%] h-[300px] justify-self-center md:h-[450px] md:w-[500px] lg:translate-y-[-3rem] "
                width={500}
                height={500}
              />
              <div className="md:mt-[-5rem] text-shadow-smooth">
                <h4 className="text-sm text-center">The Labu “Reiza”</h4>
                <span className="text-sm text-center">The Living Pumpkin</span>
              </div>
            </MotionLeft>

            <MotionRight className="flex flex-col justify-center items-center text-center lg:text-left md:items-start gap-1">
              <h3 className="text-xl text-shadow-primary uppercase mb-4">
                # For Landlords
              </h3>
              <h1 className="text-2xl md:text-4xl max-w-[80%] font-black mb-4 lg:mb-6 leading-[109%]">
                Fed Up with Late-Night Calls?
              </h1>
              <p className="text-sm text-textColor max-w-[80%] mb-4 lg:mb-10 lg:pr-8">
                Managing a property can be overwhelming, especially when
                you&apos;re dealing with late-night calls, constant complaints,
                and endless reviews. Instead of letting these stressors take
                over your life, streamline your property management and regain
                peace of mind. Let professionals handle the hassle while you
                focus on what matters most.
              </p>
              <div className="flex flex-col  md:flex-row justify-start items-center gap-4">
                <Button className="lg:h-14" size={"lg"}>
                  Add Listing Now
                </Button>
                <Button variant={"link"} className="button--link button--flex ">
                  <Phone className="me-1" size={"16"} /> Speak Us Now
                  <i className="bx bx-right-arrow-alt button__icon"></i>
                </Button>
              </div>
            </MotionRight>
          </div>
        </SwiperSlide>

        {/* HOME SLIDER 2 */}
        <SwiperSlide>
          <div className="w-full grid justify-center items-center gap-4 md:py-32 md:px-8 md:grid-cols-2 lg:pt-36 lg:gap-12">
            <MotionLeft className="flex flex-col items-center justify-center">
              <Image
                src={ImageAbout2}
                alt="Home Image 1"
                className="w-[75%] h-[300px] justify-self-center md:h-[450px] md:w-[500px] lg:translate-y-[-3rem]"
                width={500}
                height={500}
              />
              <div className="md:mt-[-5rem] text-shadow-smooth">
                <h4 className="text-sm text-center">The Labu “Reiza”</h4>
                <span className="text-sm text-center">The Living Pumpkin</span>
              </div>
            </MotionLeft>

            <MotionRight className="flex flex-col justify-center items-center text-center lg:text-left md:items-start gap-1">
              <h3 className="text-xl text-shadow-primary uppercase mb-4">
                # For Landlords
              </h3>
              <h1 className="text-2xl md:text-4xl max-w-[80%] font-black mb-4 lg:mb-6 leading-[109%]">
                Unlock Income from Your Unsold Property
              </h1>
              <p className="text-sm text-textColor max-w-[80%] mb-4 lg:mb-10 lg:pr-8">
                Struggling to sell your property? Instead of letting it sit
                idle, transform it into a steady income source. Renting out your
                property can provide you with consistent cash flow while you
                wait for the right buyer. Don’t let your investment go to
                waste—turn a challenge into an opportunity today.
              </p>
              <div className="flex flex-col  md:flex-row justify-start items-center gap-4">
                <Button className="lg:h-14" size={"lg"}>
                  Add Listing Now
                </Button>
                <Button variant={"link"} className="button--link button--flex ">
                  <Phone className="me-1" size={"16"} /> Speak Us Now
                  <i className="bx bx-right-arrow-alt button__icon"></i>
                </Button>
              </div>
            </MotionRight>
          </div>
        </SwiperSlide>

        {/* HOME SLIDER 3 */}
        <SwiperSlide>
          <div className="w-full grid justify-center items-center gap-4 md:py-32 md:px-8 md:grid-cols-2 lg:pt-36 lg:gap-12">
            <MotionLeft className="flex flex-col items-center justify-center">
              <Image
                src={ImageAbout3}
                alt="Home Image 1"
                className="w-[75%] h-[300px] justify-self-center md:h-[450px] md:w-[500px] lg:translate-y-[-3rem]"
                width={500}
                height={500}
              />
              <div className="md:mt-[-5rem] text-shadow-smooth">
                <h4 className="text-sm text-center">The Labu “Reiza”</h4>
                <span className="text-sm text-center">The Living Pumpkin</span>
              </div>
            </MotionLeft>

            <MotionRight className="flex flex-col justify-center items-center text-center lg:text-left md:items-start gap-1">
              <h3 className="text-xl text-shadow-primary uppercase mb-4">
                # For Landlords
              </h3>
              <h1 className="text-2xl md:text-4xl max-w-[80%] font-black mb-4 lg:mb-6 leading-[109%]">
                Simplify Your Property Insurance
              </h1>
              <p className="text-sm text-textColor max-w-[80%] mb-4 lg:mb-10 lg:pr-8">
                Navigating property insurance can be confusing and
                time-consuming. From understanding complex policies to managing
                claims, the process can feel overwhelming. Streamline your
                insurance experience with Hububb—get clear, straightforward
                coverage that protects your investment without the hassle.
              </p>
              <div className="flex flex-col  md:flex-row justify-start items-center gap-4">
                <Button className="lg:h-14" size={"lg"}>
                  Add Listing Now
                </Button>
                <Button variant={"link"} className="button--link button--flex ">
                  <Phone className="me-1" size={"16"} /> Speak Us Now
                  <i className="bx bx-right-arrow-alt button__icon"></i>
                </Button>
              </div>
            </MotionRight>
          </div>
        </SwiperSlide>

        <div className="swiper-navigation container justify-end">
          <div className="swiper-button-next">
            <ChevronLeft className="text-foreground" />
          </div>
          <div className="swiper-button-prev">
            <ChevronRight className="text-foreground" />
          </div>
        </div>
      </Swiper>

      {/* <div className="swiper-pagination md:mt-8 xl:mt-10"></div> */}
    </section>
  );
};

export default User;
