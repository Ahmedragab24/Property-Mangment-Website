"use client";

import { useEffect } from "react";
import Image from "next/image";
import ImageAboutBaner from "/src/public/images/منشور instagram أخضر وبني أنيق اليوم الوطني السعودي.jpg";
import ImageAboutAbs from "/src/public/images/about-abs-image.jpg";
import ImageBadge from "/src/public/images/badge-2.png";

const ImagesAbout = () => {
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
    <figure className="relative mb-32 mx-auto">
      <Image
        src={ImageAboutBaner}
        width={570}
        height={570}
        alt="about banner"
        loading="lazy"
        className="w-[280px] lg:w-[350px] 2xl:w-[500px] shadow-xl"
        data-parallax-item
        data-parallax-speed="1"
      />

      <div className="absolute bottom-[-4rem] left-[-2rem] lg:left-[-4rem]">
        <Image
          src={ImageAboutAbs}
          width={385}
          height={385}
          alt="about"
          loading="lazy"
          className="w-[220px] lg:w-[280px] border-[.55rem] border-secondary"
          data-parallax-item
          data-parallax-speed="1.75"
        />
      </div>

      <div className="absolute top-[-2rem] right-[-2rem] lg:top-[-3rem] lg:right-[-3rem] w-24 lg:w-32">
        <Image src={ImageBadge} width={163} height={174} alt="" />
      </div>
    </figure>
  );
};

export default ImagesAbout;
