import React from "react";
import dynamic from "next/dynamic";

interface Iprops {
  className: string;
  city: string;
}

const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});

const Point = ({ className, city }: Iprops) => {
  return (
    <div className={`absolute cursor-pointer duration-500 group ${className}`}>
      <MotionLeft>
        <div className="loader w-8 h-8 rotate-45">
          <div
            className="before:content-[''] before:absolute before:inset-0 before:rounded-[50%_50%_0_50%] before:bg-transparent before:bg-[radial-gradient(circle_11.2px_at_center,transparent_94%,#3b82f6)]
        group-hover:before:bg-[radial-gradient(circle_11.2px_at_center,transparent_94%,#1d4ed8)]"
          ></div>
          <div className="after:content-[''] after:absolute after:inset-0 after:rounded-[50%_50%_0_50%] after:bg-transparent after:bg-[radial-gradient(circle_11.2px_at_center,transparent_94%,#3b82f6)] after:animate-pulse-custom group-hover:after:bg-[radial-gradient(circle_11.2px_at_center,transparent_94%,#1d4ed8)]"></div>
        </div>
        <div className="hidden absolute top-8 left-[-3px] duration-500 group-hover:block">
          <h6 className="text-shadow font-medium underline decoration-4 decoration-primary duration-500">
            {city}
          </h6>
        </div>
      </MotionLeft>
    </div>
  );
};

export default Point;
