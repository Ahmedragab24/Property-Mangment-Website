"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/modeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { CircleUserRound } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddListingModel from "../model/AddListingModel";
import RegistrationModel from "../model/RegistrationModel";
import UserDropdown from "../Auth/user";

const Navbar = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handlerOpenMenuMobile = () => {
    setOpenMenuMobile((prev) => (prev = !prev));
  };
  const { isBackgroundImg, value } = useAppSelector((state) => state.heroNav);
  const userData = useAppSelector((state) => state.UserData.user?.user);

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

  const navRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenMenuMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-50 duration-300 ${
        isBackgroundImg
          ? scrolling
            ? "bg-background shadow-lg"
            : "bg-transparent"
          : "bg-background shadow-lg"
      }`}
      suppressHydrationWarning
    >
      <div className="container  flex items-center justify-between h-16">
        {/* Navbar Start */}
        <div ref={navRef} className="flex items-center space-x-2">
          <div className="lg:hidden ">
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
                <div className="flex flex-col justify-center items-center py-2 px-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full flex justify-center"
                  >
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="flex justify-center gap-x-2">
                        About Us
                      </AccordionTrigger>
                      <AccordionContent className="p-4 flex flex-col justify-center items-center border border-primary rounded-lg">
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
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="flex justify-center gap-x-2">
                        Out Services
                      </AccordionTrigger>
                      <AccordionContent className="p-4 flex flex-col justify-center items-center border border-primary rounded-lg">
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

        {/* Navbar Center (For larger screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                {/* Item 1 */}
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/#about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About company
                    </NavigationMenuLink>
                  </Link>

                  <Link href="/#user" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      For Landlords
                    </NavigationMenuLink>
                  </Link>

                  <Link href="/#owner" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      For Property Owners
                    </NavigationMenuLink>
                  </Link>

                  <Link href="/#features" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Features
                    </NavigationMenuLink>
                  </Link>

                  <Link href="/#contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Item 2 */}
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <Link href="/property" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Rental properties
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/landlords" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Landlords
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Item 3 */}
              <NavigationMenuItem>
                <AddListingModel
                  placeHolder="Add your property"
                  variant="ghost"
                  className={`!text-shadow-smooth ${
                    isBackgroundImg && value ? "text-white" : "text-foreground"
                  }`}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-3">
          <ModeToggle
            className={`${
              isBackgroundImg && value ? "text-white" : "text-foreground"
            }`}
          />
          {userData ? (
            <UserDropdown />
          ) : (
            <RegistrationModel>
              <Button
                variant={`${scrolling ? "default" : "ghost"}`}
                className={`duration-500 ${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <CircleUserRound className="w-4 h-4 mr-1" />
                Sign in
              </Button>
            </RegistrationModel>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
