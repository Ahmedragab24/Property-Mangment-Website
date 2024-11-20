"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ILightboxProps {
  imageGroup: {
    id: string;
    name: string;
    formats: {
      large: {
        width: number;
        height: number;
        url: string;
      };
    };
  }[];
}

const MyLightbox: React.FC<ILightboxProps> = ({ imageGroup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = imageGroup.map((img) => ({
    src: `http://localhost:1337/${img.formats.large.url}`,
    alt: img.name,
    width: img.formats.large.width,
    height: img.formats.large.height,
  }));

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {imageGroup.slice(0, 6).map((item, index) => (
        <div key={item.id} onClick={() => handleOpen(index)}>
          <div
            className="rounded-xl group overflow-hidden duration-500 hover:shadow-xl"
            key={item.id}
          >
            <Image
              src={`http://localhost:1337/${item.formats.large.url}`}
              alt={item.name}
              width={item.formats.large.width}
              height={item.formats.large.height}
              loading="lazy"
              className="max-w-56 h-28 xl:h-36 rounded-xl cursor-pointer duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      ))}

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
