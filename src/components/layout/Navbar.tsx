"use client";

import { useEffect, useState } from "react";
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

const Navbar = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handlerOpenMenuMobile = () => {
    setOpenMenuMobile((prev) => (prev = !prev));
  };
  const { isBackgroundImg, value } = useAppSelector((state) => state.heroNav);

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
        <div className="flex items-center space-x-2">
          <div className="lg:hidden ">
            <a
              className="p-2 rounded cursor-pointer"
              onClick={handlerOpenMenuMobile}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <div className="absolute mt-2 bg-background w-max rounded-md shadow-lg z-10">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col px-6 py-4 ">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} `}
                          >
                            Documentation
                          </NavigationMenuLink>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()}`}
                          >
                            adadsa
                          </NavigationMenuLink>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()}`}
                          >
                            adadadsaddad
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item Tow</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Documentation
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Documentation
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/property" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      property
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/landlords" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Landlords
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <NavigationMenuTrigger>Item Tow</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    Item One
                  </NavigationMenuLink>
                </Link>
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
          <Link href={"/login"}>
            <Button
              variant={`${scrolling ? "default" : "ghost"}`}
              className={`duration-500 ${
                isBackgroundImg && value ? "text-white" : "text-foreground"
              }`}
            >
              <CircleUserRound className="w-4 h-4 mr-1" />
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
