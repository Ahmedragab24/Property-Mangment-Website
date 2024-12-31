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

import RegistrationModel from "../model/RegistrationModel";
import UserDropdown from "../Auth/user";
import NavMobile from "./NavMobile";
import AddListingModel from "../model/AddListingModle/AddListingModel";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isBackgroundImg, value } = useAppSelector((state) => state.heroNav);
  const userData = useAppSelector((state) => state.UserData?.user?.$id);
  const [isUserLogin, setIsUserLogin] = useState(false);

  useEffect(() => {
    if (userData) {
      setIsUserLogin(true);
    } else {
      setIsUserLogin(false);
    }

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
  }, [userData]);

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
        {/* Navbar Mobile */}
        <NavMobile />

        {/* Navbar Center (For larger screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Item 1 */}
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
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

              {/* Item 3 */}
              <NavigationMenuItem
                className={`${
                  isBackgroundImg && value ? "text-white" : "text-foreground"
                }`}
              >
                <Link href="/landlords" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Landlords
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Item 4 */}
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
          {isUserLogin ? (
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
