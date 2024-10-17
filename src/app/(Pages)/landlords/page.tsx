"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import imgLandlords from "@/assets/images/landlords.jpg";
import { useAppDispatch } from "@/store/hooks";
import {
  setColorNavLink,
  setIsBackgroundImg,
} from "@/store/features/heroNav/heroNavSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectGests from "./components/SelectGests";
import { SelectLocation } from "./components/SelectLocation";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  HousePlus,
  List,
  LockKeyhole,
  MoveRight,
  PillBottle,
} from "lucide-react";

const Landlords = () => {
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(true));
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        dispatch(setColorNavLink(false));
      } else {
        dispatch(setColorNavLink(true));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative py-16">
      <div className="container">
        <section>
          <div className="absolute top-0 w-1/2 h-screen bg-slate-600/90 blur-3xl z-10"></div>
          <div className="w-full h-screen">
            <Image
              src={imgLandlords}
              alt="Landlords"
              width={1400}
              height={700}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-screen brightness-50"
            />
            <div className="relative mt-14 lg:ms-28 w-[40%] h-fit bg-slate-700/90 rounded-md shadow-md z-10">
              <div className="flex flex-col gap-y-4 p-8">
                <div>
                  <h1 className="text-4xl font-bold text-shadow-smooth mb-2">
                    Discover Your Property&apos;s Earning Potential
                  </h1>
                  <p className="text-sm text-gray-400">
                    Curious about what your property could earn? With just a few
                    clicks, find out the potential revenue your rental could
                    generate with Hububb.
                  </p>
                </div>

                <form className="flex flex-col gap-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <SelectLocation />
                  </div>

                  <div className="flex gap-x-4">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <SelectGests />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="bg-secondary hover:bg-primary/40 placeholder:text-foreground"
                      />
                    </div>
                  </div>
                </form>

                <div className="flex flex-col gap-y-4">
                  <div className="flex justify-between items-center gap-x-4">
                    <h3 className="text-2xl font-bold text-shadow-smooth">
                      Your property <br />
                      could be earning
                    </h3>
                    <MoveRight className="w-8 h-8" />
                    <h3 className="text-3xl font-bold text-shadow-smooth">
                      £7,000
                    </h3>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <h5>earning on average</h5>
                    <h5>monthly</h5>
                  </div>
                </div>

                <Button className="h-12">Calculate</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="px-28 py-8 w-fit bg-secondary border border-primary rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="bg-secondary flex justify-center gap-x-4">
            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex flex-col text-left gap-4 mb-14">
                <h1 className="text-4xl text-shadow-primary">Management</h1>
                <h3 className="text-2xl">
                  Rental Property Management Software: Rent Your London & Dubai
                  Properties
                </h3>
                <p className="lg:w-[85%] text-sm text-textColor">
                  Join us at property and tap into the future of property
                  rentals. As a global leader in subleasing and property
                  management, we offer landlords a unique opportunity to become
                  part of an innovative accommodation network.
                </p>
              </div>

              <div className="grid gap-6">
                <div
                  className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                    expanded === "panel1" ? "bg-secondary" : "bg-transparent"
                  }`}
                >
                  <div
                    className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                    onClick={handleChange("panel1")}
                  >
                    <div className="flex gap-x-3">
                      <HousePlus />
                      <span className="w-full text-xl">
                        Efficient Guest Management
                      </span>
                    </div>
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
                        expanded === "panel1"
                          ? getContentHeight("panel1")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Simplify guest interactions from booking to check-out
                          with our intuitive platform.
                        </li>
                        <li>
                          Ensure a seamless experience for guests while
                          effortlessly managing income and reservations.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <PillBottle />
                      <span className="w-full text-xl">Property Care</span>
                    </div>
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
                        expanded === "panel2"
                          ? getContentHeight("panel2")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Professional cleaning services for cleanliness and
                          hygiene.
                        </li>
                        <li>Upkeep and maintenance for guest satisfaction</li>
                        <li>Reliable property insurance coverage</li>
                        <li>
                          Landlord-oriented dashboard for efficient property
                          management
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <List />
                      <span className="w-full text-xl">
                        Optimize Your Listing
                      </span>
                    </div>

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
                        expanded === "panel3"
                          ? getContentHeight("panel3")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Increase your property's visibility and bookings
                          through smart listing optimization.
                        </li>
                        <li>
                          Access our extensive member base and expand your reach
                          with integrations on top platforms such as Airbnb,
                          Booking.com, Vrbo, and more.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <Cpu />
                      <span className="w-full text-xl">
                        Innovative Property Technology
                      </span>
                    </div>
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
                        expanded === "panel4"
                          ? getContentHeight("panel4")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Stay ahead in property management with cutting-edge
                          technology.
                        </li>
                        <li>
                          Utilize advanced tools for monitoring, automation, and
                          maintenance.
                        </li>
                        <li>
                          Enhance efficiency and ease in property management
                          with comprehensive features.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <LockKeyhole />
                      <span className="w-full text-xl">
                        Safety and Security
                      </span>
                    </div>

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
                        expanded === "panel5"
                          ? getContentHeight("panel5")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Ensure the safety and security of your property and
                          guests with our comprehensive solutions.
                        </li>
                        <li>
                          Implement secure access, real-time monitoring, and
                          reliable safety protocols.
                        </li>
                        <li>
                          Utilize ID verification and a KYC process for enhanced
                          peace of mind and trust.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 overflow-hidden">
              <Image
                src={imgLandlords}
                alt=""
                width={1400}
                height={700}
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="bg-secondary flex justify-center gap-x-4">
            <div className="w-1/2 overflow-hidden">
              <Image
                src={imgLandlords}
                alt=""
                width={1400}
                height={700}
                className="w-full h-full object-cover object-right"
              />
            </div>

            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex flex-col text-left gap-4 mb-14">
                <h1 className="text-4xl text-shadow-primary">Management</h1>
                <h3 className="text-2xl">
                  Rental Property Management Software: Rent Your London & Dubai
                  Properties
                </h3>
                <p className="lg:w-[85%] text-sm text-textColor">
                  Join us at property and tap into the future of property
                  rentals. As a global leader in subleasing and property
                  management, we offer landlords a unique opportunity to become
                  part of an innovative accommodation network.
                </p>
              </div>

              <div className="grid gap-6">
                <div
                  className={`border border-textColor rounded-md h-fit duration-500 hover:border-primary hover:bg-secondary ${
                    expanded === "panel1" ? "bg-secondary" : "bg-transparent"
                  }`}
                >
                  <div
                    className="flex justify-between items-center p-4 text-xl font-medium cursor-pointer"
                    onClick={handleChange("panel1")}
                  >
                    <div className="flex gap-x-3">
                      <HousePlus />
                      <span className="w-full text-xl">
                        Efficient Guest Management
                      </span>
                    </div>
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
                        expanded === "panel1"
                          ? getContentHeight("panel1")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Simplify guest interactions from booking to check-out
                          with our intuitive platform.
                        </li>
                        <li>
                          Ensure a seamless experience for guests while
                          effortlessly managing income and reservations.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <PillBottle />
                      <span className="w-full text-xl">Property Care</span>
                    </div>
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
                        expanded === "panel2"
                          ? getContentHeight("panel2")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Professional cleaning services for cleanliness and
                          hygiene.
                        </li>
                        <li>Upkeep and maintenance for guest satisfaction</li>
                        <li>Reliable property insurance coverage</li>
                        <li>
                          Landlord-oriented dashboard for efficient property
                          management
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <List />
                      <span className="w-full text-xl">
                        Optimize Your Listing
                      </span>
                    </div>

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
                        expanded === "panel3"
                          ? getContentHeight("panel3")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Increase your property's visibility and bookings
                          through smart listing optimization.
                        </li>
                        <li>
                          Access our extensive member base and expand your reach
                          with integrations on top platforms such as Airbnb,
                          Booking.com, Vrbo, and more.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <Cpu />
                      <span className="w-full text-xl">
                        Innovative Property Technology
                      </span>
                    </div>
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
                        expanded === "panel4"
                          ? getContentHeight("panel4")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Stay ahead in property management with cutting-edge
                          technology.
                        </li>
                        <li>
                          Utilize advanced tools for monitoring, automation, and
                          maintenance.
                        </li>
                        <li>
                          Enhance efficiency and ease in property management
                          with comprehensive features.
                        </li>
                      </ul>
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
                    <div className="flex gap-x-3">
                      <LockKeyhole />
                      <span className="w-full text-xl">
                        Safety and Security
                      </span>
                    </div>

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
                        expanded === "panel5"
                          ? getContentHeight("panel5")
                          : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-disc text-sm p-8">
                        <li>
                          Ensure the safety and security of your property and
                          guests with our comprehensive solutions.
                        </li>
                        <li>
                          Implement secure access, real-time monitoring, and
                          reliable safety protocols.
                        </li>
                        <li>
                          Utilize ID verification and a KYC process for enhanced
                          peace of mind and trust.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Landlords;
