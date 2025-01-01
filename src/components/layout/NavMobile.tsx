"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { Button } from "../ui/button";
import AddListingModel from "../model/AddListingModle/AddListingModel";
import { MapPinHouse } from "lucide-react";

const NavMobile = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isBackgroundImg, value } = useAppSelector((state) => state.heroNav);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Handler
  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenMenuMobile(false);
    }
  };

  const handlerOpenMenuMobile = () => {
    setOpenMenuMobile((prev) => (prev = !prev));
  };

  return (
    <div ref={navRef} className="flex items-center space-x-2">
      <div className="lg:hidden ">
        {/* Menu Icon */}
        <a
          className="p-2 rounded cursor-pointer"
          onClick={handlerOpenMenuMobile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 duration-500 ${
              isBackgroundImg
                ? scrolling
                  ? "text-foreground"
                  : "text-white"
                : "text-foreground"
            } ${openMenuMobile && "!text-primary"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </a>

        {/* Dropdown Menu */}
        {openMenuMobile && (
          <div className="w-[200px] absolute top-12 mt-2 bg-background rounded-md shadow-lg z-10">
            <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
              <Accordion
                type="single"
                collapsible
                className="flex justify-center w-full"
              >
                <AccordionItem
                  value="item-1"
                  className="border-none hover:shadow-none"
                >
                  <AccordionTrigger className="flex justify-center gap-x-2">
                    About Us
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-secondary">
                    <Link href={"/#about"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        About Company
                      </Button>
                    </Link>

                    <Link href={"/#user"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        For Landlords
                      </Button>
                    </Link>

                    <Link href={"/#owner"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        For Property Owners
                      </Button>
                    </Link>

                    <Link href={"/#features"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Features
                      </Button>
                    </Link>

                    <Link href={"/#contact"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion
                type="single"
                collapsible
                className="flex justify-center w-full"
              >
                <AccordionItem
                  value="item-2"
                  className="border-none hover:shadow-none"
                >
                  <AccordionTrigger className="flex justify-center gap-x-2">
                    Out Services
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-secondary">
                    <Link href={"/property"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Rental Properties
                      </Button>
                    </Link>
                    <Link href={"/landlords"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() => setOpenMenuMobile(false)}
                      >
                        Landlords
                      </Button>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <AddListingModel
                placeHolder="Add your property"
                className={`!text-shadow-smooth ${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              />
            </div>
          </div>
        )}
      </div>

      <Link
        href="/"
        className={`text-xl font-bold text-foreground duration-500 text-shadow-primary flex items-center gap-2 ${
          isBackgroundImg && value ? "text-white" : "text-foreground"
        }`}
      >
        PropEase
        <MapPinHouse size={20} />
      </Link>
    </div>
  );
};

export default NavMobile;
