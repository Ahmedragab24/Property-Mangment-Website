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
          <div className="w-[250px] absolute top-12 mt-2 bg-background rounded-md shadow-lg z-10">
            <div className="flex flex-col justify-center items-center py-2 px-4">
              <Accordion
                type="single"
                collapsible
                className="w-full flex justify-center"
              >
                <AccordionItem
                  value="item-1"
                  className="border-none hover:shadow-none"
                >
                  <AccordionTrigger className="flex justify-center gap-x-2">
                    About Us
                  </AccordionTrigger>
                  <AccordionContent className="p-4 flex flex-col justify-center items-center bg-secondary shadow-lg rounded-lg">
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
                className="w-full flex justify-center"
              >
                <AccordionItem
                  value="item-2"
                  className="border-none hover:shadow-none"
                >
                  <AccordionTrigger className="flex justify-center gap-x-2">
                    Out Services
                  </AccordionTrigger>
                  <AccordionContent className="p-4 flex flex-col justify-center items-center bg-secondary shadow-lg rounded-lg">
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
            </div>
          </div>
        )}
      </div>

      <Link
        href="/"
        className={`text-xl font-bold text-foreground duration-500 ${
          isBackgroundImg && value ? "text-white" : "text-foreground"
        }`}
      >
        Real Estate
      </Link>
    </div>
  );
};

export default NavMobile;
