"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  setColorNavLink,
  setIsBackgroundImg,
} from "@/store/features/heroNav/heroNavSlice";

interface NavColor {
  BackgroundImg: boolean;
}

const HandlerNavColor = ({ BackgroundImg }: NavColor) => {
  const dispatch = useAppDispatch();

  dispatch(setIsBackgroundImg(BackgroundImg));

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
  }, [dispatch]);


  return null;
};

export default HandlerNavColor;
