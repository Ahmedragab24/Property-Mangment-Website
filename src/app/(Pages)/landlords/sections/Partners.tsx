"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Partners as PartnersData } from "@/constants/index";

const Partners = () => {
  return (
    <section className="partners">
      <div className="container mt-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-shadow-primary">
            Partner Success Stories
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-textColor">
            Join the ranks of satisfied partners who have witnessed the
            transformation of their rental operations and guest satisfaction
            levels. Our partner stories highlight the memories and successes
            created through collaboration with Property.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="flex flex-wrap mySwiper"
        >
          {PartnersData.map(({ name, image, title, description}, index) => (
              <SwiperSlide key={index} className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={image}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center shadow-lg rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      {name}
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      {title}
                    </h1>
                    <p className="leading-relaxed text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
