"use client";

import Image from "next/image";
import React, { useEffect } from "react";
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
import { MoveRight } from "lucide-react";

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
                    Discover Your Property's Earning Potential
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
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="px-16 py-10 w-[250px] bg-secondary border border-primary rounded-full duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-16 py-10 w-[250px] bg-secondary border border-primary rounded-full duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-16 py-10 w-[250px] bg-secondary border border-primary rounded-full duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>

              <div className="px-16 py-10 w-[250px] bg-secondary border border-primary rounded-full duration-500 hover:bg-primary group">
                <h2 className="font-medium sm:text-4xl text-3xl text-primary duration-500 group-hover:text-secondary">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Landlords;
