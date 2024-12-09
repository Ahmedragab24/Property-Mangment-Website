import React from "react";
import ProjectsList from "./sections/ProjectsList";
import Accordions from "./sections/Accordions";
import HandlerNavColor from "@/components/layout/HandlerNavColor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Whether you&apos;re in London for a short business trip, a leisurely holiday, or need a temporary residence, our diverse range of properties ensures you&apos;ll find the perfect fit. Choose from modern flats, luxurious apartments, and everything in between. Our rentals are available for various durations, including weekly, monthly, or even on a month-to-month basis, giving you the flexibility you need.",
};

const Page = () => {
  return (
    <section>
      <HandlerNavColor BackgroundImg={false} />
      <div className="container py-28">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-14">
          <h1 className="text-4xl text-shadow-primary">Find Your Hub</h1>
          <h3 className="text-xl">
            Find Short Term Holiday Lets & Vacation Rentals in London & Dubai
          </h3>
          <p className="lg:w-[85%] text-textColor text-[12px] md:text-sm">
            Whether you&apos;re in London for a short business trip, a leisurely
            holiday, or need a temporary residence, our diverse range of
            properties ensures you&apos;ll find the perfect fit. Choose from
            modern flats, luxurious apartments, and everything in between. Our
            rentals are available for various durations, including weekly,
            monthly, or even on a month-to-month basis, giving you the
            flexibility you need.
          </p>
        </div>

        <ProjectsList />
        <Accordions />
      </div>
    </section>
  );
};

export default Page;
