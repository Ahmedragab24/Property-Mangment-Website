import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Layers,
  LogIn,
  MessageCircleMore,
  TabletSmartphone,
  UsersRound,
} from "lucide-react";
import React from "react";
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
const MotionDown = dynamic(() => import("@/components/animations/MotionDown"), {
  ssr: false,
});
const MotionUp = dynamic(() => import("@/components/animations/MotionUp"), {
  ssr: false,
});

const Features = () => {
  return (
    <section className="overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <MotionUp className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-textColor">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </MotionUp>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center ">
          <MotionLeft className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <TabletSmartphone
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Multi-Platform Listing
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                Simultaneously lists properties on multiple booking sites ,
                <span className="mr-1 text-primary font-medium duration-500 group-hover:text-secondary">
                  Exposure to 100m+ potential guests at the click of a button.
                </span>
              </p>
            </div>
          </MotionLeft>

          <MotionDown className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <DollarSign
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Smart Pricing Tools
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                <span className="inline text-primary font-medium mr-1 duration-500 group-hover:text-secondary">
                  Maximize rental income with our dynamic pricing tools,
                </span>
                adjusting rates based on real-time market data for optimal
                earnings.
              </p>
            </div>
          </MotionDown>

          <MotionRight className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <Layers
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Property Management
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                <span className="text-primary mr-1 font-medium duration-500 group-hover:text-secondary">
                  Ensures properties are well-maintained,
                </span>
                managing bookings, earnings, maintenance, and updates across
                multiple properties and locations.
              </p>
            </div>
          </MotionRight>

          <MotionLeft className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <LogIn
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Effortless Check-in Integration
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                Simplify guest check-ins with our advanced digital solutions,
                offering keyless entry and remote property management.
              </p>
            </div>
          </MotionLeft>

          <MotionDown className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <UsersRound
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Community Engagement
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                Access to experienced property managers and hosts, sharing
                insights to enhance guest satisfaction and operational
                efficiency.
              </p>
            </div>
          </MotionDown>

          <MotionRight className="py-4 px-3 ">
            <div className="bg-secondary border border-primary p-6 rounded-lg duration-300 group hover:bg-primary/70">
              <div className="flex items-center gap-3">
                <div className="w-fit h-fit p-2 inline-flex items-center justify-center rounded-full bg-card duration-500 group-hover:bg-secondary border border-primary text-primary mb-4">
                  <MessageCircleMore
                    className="duration-500 group-hover:rotate-[360deg]"
                    size={35}
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  Automated Guest Communication
                </h2>
              </div>
              <p className="leading-relaxed text-sm">
                Automate guest interactions with built-in tools for
                confirmatuins and instructions, freeing up time to scale your
                rental business.
              </p>
            </div>
          </MotionRight>
        </div>

        <MotionUp className="flex justify-center mt-5">
          <Button variant={"outline"}>Add a Listing</Button>
        </MotionUp>
      </div>
    </section>
  );
};

export default Features;
