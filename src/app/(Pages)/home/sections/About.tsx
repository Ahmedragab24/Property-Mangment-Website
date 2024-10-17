"use client";

import Image from "next/image";
import ImageAboutBaner from "@/assets/images/منشور instagram أخضر وبني أنيق اليوم الوطني السعودي.jpg";
import ImageAboutAbs from "@/assets/images/about-abs-image.jpg";
import ImageBadge from "@/assets/images/badge-2.png";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Redo } from "lucide-react";

const MotionLeft = dynamic(() => import("@/components/animations/MotionLeft"), {
  ssr: false,
});

const AboutSection = () => {
  useEffect(() => {
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    let x, y;

    window.addEventListener("mousemove", function (event) {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      // reverse the number eg. 20 -> -20, -5 -> 5
      x = x - x * 2;
      y = y - y * 2;

      for (let i = 0, len = parallaxItems.length; i < len; i++) {
        const item = parallaxItems[i] as HTMLElement;
        x = x * Number(item.dataset.parallaxSpeed);
        y = y * Number(item.dataset.parallaxSpeed);
        item.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }
    });
  }, []);

  return (
    <section
      className="text-center mt-20 pt-20 mx-auto bg-secondary"
      id="about"
    >
      <div className="container w-full flex flex-col md:flex-row justify-center md:justify-between  items-center md:items-start xl:items-center  gap-20">
        <MotionLeft className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-y-4">
            <p className="text-xl uppercase text-shadow-primary">About Us</p>
            <h2 className="text-xl lg:text-4xl font-bold">
              Real Estate CONT. L.L.C
            </h2>

            <p className="mx-auto text-sm lg:text-lg">
              HAMBOOS CONT. L.L.C is a leading U.A.E based contractor since
              1984, we introduce high level engineering solutions specializing
              in Concrete structures as well as Cold Formed Steel Structures,
              M.E.P Services and residential and commercial construction.
              HAMBOOS CONT.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-x-1">
              <h3 className="text-lg">Call Us Now</h3>
              <Redo size={20} className="rotate-90 mt-3 text-primary" />
            </div>
            <Link href="tel:+971508577859">
              <Button variant={"link"}>+971508577859</Button>
            </Link>
          </div>
          <Button className="block mx-auto">Send Massage</Button>
        </MotionLeft>

        <figure className="relative mb-32 mx-auto">
          <Image
            src={ImageAboutBaner}
            width={570}
            height={570}
            alt="about banner"
            loading="lazy"
            className="w-[280px]  lg:w-[350px] 2xl:w-[500px] shadow-xl"
            data-parallax-item
            data-parallax-speed="1"
          />

          <div className="absolute bottom-[-4rem] left-[-4rem]">
            <Image
              src={ImageAboutAbs}
              width={385}
              height={385}
              alt="about"
              loading="lazy"
              className="w-[180px] lg:w-fit  border-[.55rem] border-secondary"
              data-parallax-item
              data-parallax-speed="1.75"
            />
          </div>

          <div className="absolute top-[-3rem] right-[-3rem] w-32">
            <Image src={ImageBadge} width={163} height={174} alt="" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
