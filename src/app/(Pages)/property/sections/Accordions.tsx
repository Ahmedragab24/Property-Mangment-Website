import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-14">
        <h1 className="text-4xl text-shadow-primary">FAQ</h1>
        <h3 className="text-xl">
          Your Questions, Answered: Updated FAQ Section
        </h3>
        <p className="lg:w-[85%] text-sm">
          We&apos;ve listened to your feedback and revamped our FAQ section to
          address all your queries about short-term rentals in London and Dubai.
          From understanding rental agreements to finding the perfect property
          for your stay, our FAQs provide comprehensive guidance to assist you
          in planning your Dubai adventure.
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
                Whether you're looking for short-term holiday lets or luxurious
                short-term apartment rentals, our platform makes it easy to find
                your ideal home away from home. Customize your search by
                location, amenities, property type, and more, ensuring every
                stay meets your expectations.
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
                From the moment you book to the time you check out, every step
                is streamlined for your convenience. Our easy-to-navigate
                interface ensures that booking your stay is just as relaxing as
                the vacation itself. Plus, with our effortless check-in
                integration, including options like keyless entry and digital
                registration, you can start your vacation smoothly without any
                delays.
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
              <div className="flex gap-x-3">Exclusive Offers and Insights</div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-textColor space-y-2">
                As a Hububb subscriber, you'll receive first-hand access to
                exclusive deals, promotions, and insights that enhance your
                travel experience. Take advantage of special rates on short-term
                house rentals in prime locations and get tips on how to make the
                most of your stay, from finding hidden gems in the city to
                understanding local customs.
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
                Our dedicated support team is always ready to assist you during
                your stay. Whether you need help with your booking, have
                questions about a property, or require local recommendations,
                we're here to ensure your trip goes smoothly. Our personalized
                service makes all the difference in creating a memorable travel
                experience.
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
                Hububb provides more than just rentals; we offer an immersive
                travel experience. Access interactive travel guides, blogs, and
                resources that help you explore like a local. Discover the best
                eateries, must-visit attractions, and insider tips for
                navigating cities like London and Dubai.
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
                Join the vibrant Hububb community on platforms like Discord to
                connect with fellow travellers. Share experiences, exchange
                travel tips, and get inspired by the adventures of others. Our
                community is a great resource for new travellers and seasoned
                adventurers alike, enhancing the social aspect of travel.
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
                With the Hububb mobile app, manage your trips effortlessly from
                anywhere in the world. Book properties, modify reservations, and
                communicate with property owners directly from your mobile
                device. The app also notifies you of upcoming stays, special
                offers, and updates on your travel itinerary.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordions;
