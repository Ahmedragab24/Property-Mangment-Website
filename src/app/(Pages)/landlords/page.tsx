"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import imgLandlords from "@/assets/images/landlords.jpg";
import imgLandlords1 from "@/assets/images/landlords1.jpg";
import imgLandlords2 from "@/assets/images/landlords2.jpg";
import imgPartners1 from "@/assets/images/partners1.jpg";
import imgPartners2 from "@/assets/images/partners2.jpg";
import imgPartners3 from "@/assets/images/partners3.jpg";
import imgPartners4 from "@/assets/images/partners4.jpg";
import imgPartners5 from "@/assets/images/partners5.jpg";
import imgPartners6 from "@/assets/images/partners6.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Award,
  ChartColumnIncreasing,
  CircleDollarSign,
  Cpu,
  HousePlus,
  List,
  LockKeyhole,
  Maximize,
  MoveRight,
  PillBottle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AddListingModel from "@/components/model/AddListingModel";

const Landlords = () => {
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(true));

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
  }, [dispatch]);

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
              priority
              className="absolute top-0 left-0 w-full h-screen "
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
                    generate with Property.
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
              <div className="px-28 py-8 w-fit bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  10+
                </h2>
                <p className="leading-relaxed">Partners</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  500+
                </h2>
                <p className="leading-relaxed">Properties</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  10+
                </h2>
                <p className="leading-relaxed">Locations</p>
              </div>

              <div className="px-28 py-8 w-fit bg-secondary border border-primary shadow-lg rounded-xl duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  150+
                </h2>
                <p className="leading-relaxed">Happy faces</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="bg-secondary flex justify-center gap-x-4 shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex flex-col text-left gap-4 mb-14">
                <h1 className="text-4xl text-shadow-primary">Management</h1>
                <h3 className="text-2xl">
                  Rental Property Management Software: Rent Your London & Dubai
                  Properties
                </h3>
                <p className="text-sm text-textColor">
                  Join us at property and tap into the future of property
                  rentals. As a global leader in subleasing and property
                  management, we offer landlords a unique opportunity to become
                  part of an innovative accommodation network.
                </p>
              </div>

              <div className="grid gap-6">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-1"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <HousePlus />
                        Efficient Guest Management
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Simplify guest interactions from booking to check-out
                          with our intuitive platform.
                        </li>
                        <li>
                          Ensure a seamless experience for guests while
                          effortlessly managing income and reservations.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-2"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <PillBottle />
                        Property Care
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-3"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <List />
                        Optimize Your Listing
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Increase your property&apos;s visibility and bookings
                          through smart listing optimization.
                        </li>
                        <li>
                          Access our extensive member base and expand your reach
                          with integrations on top platforms such as Airbnb,
                          Booking.com, Vrbo, and more.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-4"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <Cpu />
                        Innovative Property Technology
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-5"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <LockKeyhole />
                        Safety and Security
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="w-1/2">
              <Image
                src={imgLandlords1}
                alt=""
                width={1400}
                height={700}
                className="w-full h-full object-fill object-center"
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="bg-secondary flex justify-center gap-x-4 shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2">
              <Image
                src={imgLandlords2}
                alt=""
                width={1400}
                height={700}
                className="w-full h-full object-fill object-center"
              />
            </div>

            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex flex-col text-left gap-4 mb-14">
                <h1 className="text-4xl text-shadow-primary">Rent Guarantee</h1>
                <h3 className="text-2xl">Stress-Free Rent Guarantee</h3>
                <p className="text-sm text-textColor">
                  Experience peace of mind with Flex Living's dedicated
                  guaranteed rent service, providing up to 2 years of assured
                  income without any hidden charges.
                </p>
              </div>

              <div className="grid gap-6">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-1"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <CircleDollarSign />
                        Steady Income Assurance
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Guarantee consistent and reliable rental income
                          through our dedicated assurance program.
                        </li>
                        <li>
                          Ensure your property generates predictable returns,
                          providing financial peace of mind.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-2"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <HousePlus />
                        Always Occupied
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Maintain year-round occupancy of your property,
                          minimizing income fluctuations typically influenced by
                          seasonal periods.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-3"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <Award />
                        Premium Returns
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Maximize your property investments with
                          higher-than-market-value returns due to high demand
                          and our strategic pricing model at Hububb.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-4"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <ChartColumnIncreasing />
                        Market Adaptability
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Stay competitive with Hububb's adaptable strategies
                          and market insights, ensuring your property remains
                          attractive and profitable amidst dynamic market
                          trends.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-5"
                    className="duration-500 hover:border-primary"
                  >
                    <AccordionTrigger className="text-md ">
                      <div className="flex gap-x-3">
                        <Maximize />
                        Maximized Space
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        <li>
                          Keep your property bustling with activity. Hububb
                          ensures occupancy, safeguarding your space against
                          vulnerabilities while you're away.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <AddListingModel className="flex mx-auto mt-8 px-20 h-16" />
        </section>

        <section className="mt-16">
          <div className="bg-secondary shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-evenly gap-x-4">
              <div className="px-10">
                <h3 className="text-primary text-4xl mb-4">
                  We Transfrom Your <br /> Property
                </h3>
                <p className="text-sm text-textColor leading-6">
                  Experience a free premium makeover with Hububb Our interior
                  designers will enhance your property with stylish decor and
                  modern amenities, averaging a £5,000 investment. Enjoy a
                  unique, personalized space for tenants and guaranteed rent
                  while we handle everything.
                </p>
              </div>

              <video
                className="w-1/2 h-[450px] object-fill bg-contain brightness-75"
                controls
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
            </div>
          </div>
        </section>

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
              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners1}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center shadow-lg rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners2}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners3}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners4}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners5}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="flex relative shadow-lg">
                  <Image
                    src={imgPartners6}
                    alt="partners"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-primary bg-secondary duration-500 opacity-0 rounded-lg hover:opacity-100">
                    <h2 className="tracking-widest text-xl title-font font-medium text-primary mb-1">
                      Rachel Miller
                    </h2>
                    <h1 className="title-font text-md font-medium text-textColor mb-3">
                      Property Owner
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Hububb has completely transformed the way I handle my
                      rental properties. With its comprehensive suite of
                      features, I can efficiently manage all aspects of my
                      rental business from one platform. The corporate landlord
                      tools make it easy to oversee multiple properties, while
                      the ID verification and keyless entry ensure a secure and
                      convenient experience for my tenants. Hububb is a
                      must-have for any property owner looking to streamline
                      their operations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Landlords;
