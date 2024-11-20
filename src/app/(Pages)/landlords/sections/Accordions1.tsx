import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import imgLandlords1 from "@/assets/images/landlords1.jpg";
import { ManagementAccordion } from "@/constants";

const Accordions1 = () => {
  return (
    <section className="mt-28">
      <div className="bg-secondary flex justify-center gap-x-4 shadow-lg rounded-t-lg pb-4 overflow-hidden">
        <div className="w-1/2 p-8 flex flex-col">
          <div className="flex flex-col text-left gap-4 mb-14">
            <h1 className="text-4xl text-shadow-primary">Management</h1>
            <h3 className="text-2xl">
              Rental Property Management Software: Rent Your London & Dubai
              Properties
            </h3>
            <p className="text-sm text-textColor">
              Join us at property and tap into the future of property rentals.
              As a global leader in subleasing and property management, we offer
              landlords a unique opportunity to become part of an innovative
              accommodation network.
            </p>
          </div>

          <div className="grid gap-6">
            {ManagementAccordion.map(({ id , title, icon, list}) => {
               const Icon = LucideIcons[icon] as React.ElementType;
              return (
            
                <Accordion key={id} type="single" collapsible>
                <AccordionItem
                  value={id}
                  className="duration-500 border-primary hover:bg-background"
                >
                  <AccordionTrigger className="text-md ">
                    <div className="flex gap-x-3">
                    {Icon && <Icon size={24} />}
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc text-sm py-2 px-6 text-textColor space-y-2">
                      {list.map(({description}, index) => (
                        <li key={index}>{description}</li>))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              )
            } )}
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
  );
};

export default Accordions1;
