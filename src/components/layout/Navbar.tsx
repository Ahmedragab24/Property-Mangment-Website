"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ModeToggle } from "../ui/modeToggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const [DropdownMenu, setDropdownMenu] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handlerDropdownMenu = () => {
    setDropdownMenu((prev) => (prev = !prev));
  };
  const handlerOpenMenuMobile = () => {
    setOpenMenuMobile((prev) => (prev = !prev));
    if (window.onclick) {
      setDropdownMenu(false);
    }
  };

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
        scrolling ? "bg-background shadow-lg" : "bg-transparent"
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
                            className={navigationMenuTriggerStyle()}
                          >
                            Documentation
                          </NavigationMenuLink>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            adadsa
                          </NavigationMenuLink>
                        </Link>
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
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

          <a href="#" className="text-xl font-bold text-foreground">
            Real Estate
          </a>
        </div>

        {/* Navbar Center (For larger screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
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
          <ModeToggle />
          <Button variant={`${scrolling ? "default" : "ghost"}`}>
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
