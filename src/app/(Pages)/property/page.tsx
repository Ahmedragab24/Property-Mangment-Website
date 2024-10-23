"use client";

import { setIsBackgroundImg } from "@/store/features/heroNav/heroNavSlice";
import React from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(false));

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
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">Tailored Searches</div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    Our advanced search functionality allows guests to filter
                    properties based on their specific needs and preferences.
                    Whether you're looking for short-term holiday lets or
                    luxurious short-term apartment rentals, our platform makes
                    it easy to find your ideal home away from home. Customize
                    your search by location, amenities, property type, and more,
                    ensuring every stay meets your expectations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-2"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">Seamless Travel Experience</div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm  text-textColor space-y-2">
                    From the moment you book to the time you check out, every
                    step is streamlined for your convenience. Our
                    easy-to-navigate interface ensures that booking your stay is
                    just as relaxing as the vacation itself. Plus, with our
                    effortless check-in integration, including options like
                    keyless entry and digital registration, you can start your
                    vacation smoothly without any delays.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-3"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">
                    Exclusive Offers and Insights
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    As a Hububb subscriber, you'll receive first-hand access to
                    exclusive deals, promotions, and insights that enhance your
                    travel experience. Take advantage of special rates on
                    short-term house rentals in prime locations and get tips on
                    how to make the most of your stay, from finding hidden gems
                    in the city to understanding local customs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-4"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">Personalized Guest Support</div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    Our dedicated support team is always ready to assist you
                    during your stay. Whether you need help with your booking,
                    have questions about a property, or require local
                    recommendations, we're here to ensure your trip goes
                    smoothly. Our personalized service makes all the difference
                    in creating a memorable travel experience.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-5"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">
                    Interactive Travel Guides and Resources
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    Hububb provides more than just rentals; we offer an
                    immersive travel experience. Access interactive travel
                    guides, blogs, and resources that help you explore like a
                    local. Discover the best eateries, must-visit attractions,
                    and insider tips for navigating cities like London and
                    Dubai.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-6"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">Community-Driven Insights</div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    Join the vibrant Hububb community on platforms like Discord
                    to connect with fellow travellers. Share experiences,
                    exchange travel tips, and get inspired by the adventures of
                    others. Our community is a great resource for new travellers
                    and seasoned adventurers alike, enhancing the social aspect
                    of travel.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-7"
                className="bg-secondary px-8 duration-500 hover:border-primary"
              >
                <AccordionTrigger className="text-md ">
                  <div className="flex gap-x-3">
                    Mobile App for On-the-Go Access
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-textColor space-y-2">
                    With the Hububb mobile app, manage your trips effortlessly
                    from anywhere in the world. Book properties, modify
                    reservations, and communicate with property owners directly
                    from your mobile device. The app also notifies you of
                    upcoming stays, special offers, and updates on your travel
                    itinerary.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
