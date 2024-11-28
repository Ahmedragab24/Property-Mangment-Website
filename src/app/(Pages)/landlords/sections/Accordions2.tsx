"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import imgLandlords2 from "/src/public/images/landlords2.jpg";
import AddListingModel from "@/components/model/AddListingModel";
import { RentGuaranteeAccordion } from "@/constants";

const Accordions2 = () => {
  return (
    <section className="">
      <div className="bg-secondary flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-4 shadow-lg rounded-b-lg overflow-hidden">
        <div className="h-[450px] lg:h-auto lg:w-1/2">
          <Image
            src={imgLandlords2}
            alt=""
            width={1400}
            height={700}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col">
          <div className="flex flex-col text-left gap-4 mb-14">
            <h1 className="text-xl lg:text-4xl text-shadow-primary">
              Rent Guarantee
            </h1>
            <h3 className="text-md lg:text-2xl">Stress-Free Rent Guarantee</h3>
            <p className="text-sm text-textColor">
              Experience peace of mind with Flex Living's dedicated guaranteed
              rent service, providing up to 2 years of assured income without
              any hidden charges.
            </p>
          </div>

          <div className="grid gap-6">
            {RentGuaranteeAccordion.map(({ id, title, icon, list }) => {
              const Icon = LucideIcons[icon] as React.ElementType;
              return (
                <Accordion key={id} type="single" collapsible>
                  <AccordionItem
                    value={id}
                    className={`duration-500 border-primary hover:bg-background`}
                  >
                    <AccordionTrigger className="w-full text-left text-sm lg:text-md ">
                      <div className="flex gap-x-3">
                        {Icon && <Icon size={24} />}
                        {title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                        {list.map(({ description }, index) => (
                          <li key={index}>{description}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 items-center mt-8">
        <p className="w-full lg:w-2/3 text-sm text-center text-textColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio
          in cumque voluptate temporibus, sapiente molestiae nam qui at,
          officiis sunt alias quod! Dignissimos voluptatibus, est labore odit
          voluptates ullam.
        </p>
        <AddListingModel className="flex px-10 lg:px-20 h-16" />
      </div>
    </section>
  );
};

export default Accordions2;
