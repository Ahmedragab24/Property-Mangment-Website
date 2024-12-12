"use client";

import { IimageGroup } from "@/interfaces";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MyLightbox = ({ imageGroup }: { imageGroup: IimageGroup[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = imageGroup.map((img) => ({
    src: `${process.env.NEXT_PUBLIC_BASE_URL_API}${img.formats?.large?.url}`,
    alt: img.name,
    width: img.formats?.large?.width,
    height: img.formats?.large?.height,
  }));

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {imageGroup.slice(0, 6).map((item, index) => {
        const image = `${process.env.NEXT_PUBLIC_BASE_URL_API}${item.formats?.large?.url}`;
        return (
          <div key={item.id} onClick={() => handleOpen(index)}>
            <div className="relative rounded-xl group overflow-hidden duration-500 hover:shadow-xl">
              <Image
                src={image}
                alt={item.name || "Group Image"}
                width={item.formats?.large?.width}
                height={item.formats?.large?.height}
                loading="lazy"
                className={`max-w-56 h-28 xl:h-36 rounded-xl cursor-pointer duration-500 group-hover:scale-110 ${
                  index === 5 && "brightness-50"
                }`}
              />
              {index == 5 && (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center text-sm lg:text-md">
                  See All Photos ({imageGroup.length})
                </div>
              )}
            </div>
          </div>
        );
      })}

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={currentIndex}
          className="!bg-background"
        />
      )}
    </>
  );
};

export default MyLightbox;
