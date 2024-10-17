"use client";

import { setIsBackgroundImg } from "@/store/features/heroNav/heroNavSlice";
import React, { useRef, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { SearchProperty } from "../home/components/SearchProprtys";
import { DatePicker } from "./components/DatePicker";
import SelectGests from "./components/SelectGests";
import Image from "next/image";
import ImageItem from "@/assets/images/home-2.jpg";
import {
  ArrowRight,
  Bath,
  Bed,
  DoorClosed,
  House,
  MapPinHouse,
  Save,
  SlidersHorizontal,
} from "lucide-react";

const Page = () => {
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(false));
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => () => {
    setExpanded(expanded === panel ? false : panel);
  };

  const contentRefs = {
    panel1: useRef<HTMLDivElement>(null),
    panel2: useRef<HTMLDivElement>(null),
    panel3: useRef<HTMLDivElement>(null),
    panel4: useRef<HTMLDivElement>(null),
    panel5: useRef<HTMLDivElement>(null),
    panel6: useRef<HTMLDivElement>(null),
    panel7: useRef<HTMLDivElement>(null),
  };

  const getContentHeight = (panel: keyof typeof contentRefs) => {
    const ref = contentRefs[panel].current;
    return ref ? ref.scrollHeight : "0px";
  };

  return (
    <section>
      <div className="container py-28">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-14">
          <h1 className="text-4xl text-shadow-primary">Find Your Hub</h1>
          <h3 className="text-xl">
            Find Short Term Holiday Lets & Vacation Rentals in London & Dubai
          </h3>
          <p className="lg:w-[85%] text-sm">
            Whether you&apos;re in London for a short business trip, a leisurely
            holiday, or need a temporary residence, our diverse range of
            properties ensures you&apos;ll find the perfect fit. Choose from
            modern flats, luxurious apartments, and everything in between. Our
            rentals are available for various durations, including weekly,
            monthly, or even on a month-to-month basis, giving you the
            flexibility you need.
          </p>
        </div>

        <div className="mb-14">
          <div className="flex justify-between">
            <div className="flex gap-2 mb-1">
              <Button variant={"ghost"}>
                <DoorClosed size={18} className="me-2" /> Room
              </Button>
              <Button variant={"ghost"}>
                <House size={18} className="me-2" /> Entire Home
              </Button>
              <Button variant={"ghost"}>
                <MapPinHouse size={18} className="me-2" /> Any
              </Button>
            </div>
            <div className="">
              <Button variant={"ghost"}>
                <SlidersHorizontal size={18} className="me-2" /> Filter
              </Button>
            </div>
          </div>

          <div className="w-full h-16 border border-primary flex justify-around items-center bg-secondary  rounded-lg">
            <SearchProperty className="w-fit px-14" />
            <DatePicker placeHolder="Check in" className="w-fit px-14" />
            <DatePicker placeHolder="Check Out" className="w-fit px-14" />
            <SelectGests />
            <Button>Check now</Button>
          </div>
        </div>

        <div className="text-textColor mb-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-11">
            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 w-full object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 w-full object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 w-full object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 w-full object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-fit">
              <div className="h-full border border-textColor border-opacity-60 rounded-lg group duration-500 hover:bg-secondary hover:border-primary hover:text-foreground">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    width={750}
                    height={400}
                    className="lg:h-64 md:h-36 w-full object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                    src={ImageItem}
                    alt="blog"
                  />

                  <Button
                    variant={"secondary"}
                    className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500"
                  >
                    $250 / night
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="tracking-widest text-md font-bold mb-1">
                        CATEGORY
                      </h2>
                    </div>

                    <div>
                      <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                        Save
                        <Save size={15} className="ms-1" />
                      </span>
                    </div>
                  </div>
                  <p className="leading-relaxed text-sm mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Button variant={"link"} className="m-0 p-0">
                      Learn More
                      <ArrowRight size={15} className="ms-1" />
                    </Button>

                    <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                      <Bed size={20} className="me-1" />4
                    </span>
                    <span className="text-textColor inline-flex items-center leading-none text-sm">
                      <Bath size={20} className="me-1" />2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center text-center gap-4 mb-14">
            <h1 className="text-4xl text-shadow-primary">FAQ</h1>
            <h3 className="text-xl">
              Your Questions, Answered: Updated FAQ Section
            </h3>
            <p className="lg:w-[85%] text-sm">
              We&apos;ve listened to your feedback and revamped our FAQ section
              to address all your queries about short-term rentals in London and
              Dubai. From understanding rental agreements to finding the perfect
              property for your stay, our FAQs provide comprehensive guidance to
              assist you in planning your Dubai adventure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel1" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel1")}
              >
                <span className="w-1/3 text-xl">General settings</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel1" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel1}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel1" ? getContentHeight("panel1") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel2" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel2")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel2" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel2}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel2" ? getContentHeight("panel2") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel3" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel3")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel3" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel3}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel3" ? getContentHeight("panel3") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel4" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel4")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel4" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel4}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel4" ? getContentHeight("panel4") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel5" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel5")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel5" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel5}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel5" ? getContentHeight("panel5") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel6" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel6")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel6" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel6}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel6" ? getContentHeight("panel6") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                expanded === "panel7" ? "bg-secondary" : "bg-transparent"
              }`}
            >
              <div
                className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                onClick={handleChange("panel7")}
              >
                <span className="w-1/3 text-xl">Users</span>
                <span
                  className={`transform transition-transform ${
                    expanded === "panel7" ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              <div
                ref={contentRefs.panel7}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{
                  maxHeight:
                    expanded === "panel7" ? getContentHeight("panel7") : "0px",
                }}
              >
                <div className="p-4">
                  <p>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
