"use client";

import { Button } from "@/components/ui/button";
import { OctagonAlert } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/store/hooks";
import { setIsBackgroundImg } from "@/store/features/heroNav/heroNavSlice";

const MotionUp = dynamic(() => import("@/components/animations/MotionUp"), {
  ssr: false,
});

export default function NotFound() {
  const dispatch = useAppDispatch();
  dispatch(setIsBackgroundImg(false));

  return (
    <main className="">
      <MotionUp className="container h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex items-center pt-20 gap-x-4">
          <h2 className="text-3xl md:text-6xl font-bold text-shadow">
            Not Found
          </h2>
          <OctagonAlert className="w-9 h-9 md:w-14 md:h-14" />
        </div>
        <p className="text-lg">Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </MotionUp>
    </main>
  );
}
