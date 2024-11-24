"use client";

import React, { useEffect, useState } from "react";
import MyLightbox from "@/components/lightbox/LightBox";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";
import { IError, IProperty } from "@/interfaces";
import { useGetOnePropertyQuery } from "@/store/apis/apis";

import {
  Bath,
  Bed,
  CircleCheckBig,
  Loader,
  MapPinHouse,
  MoveLeft,
  MoveRight,
  OctagonAlert,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import SimilarProperties from "./components/SimilarProperties";
import FavoriteButton from "@/components/CustomBtn/FavoriteButton";

const Property = () => {
  const { id } = useParams();
  const { isLoading, isError, isSuccess, error, data } =
    useGetOnePropertyQuery(id);

  const [isBtnFixed, setIsBtnFixed] = useState(true);

  useEffect(() => {
    const BtnFixed = () => {
      if (window.scrollY >= 950) {
        setIsBtnFixed(false);
      } else {
        setIsBtnFixed(true);
      }
    };

    window.addEventListener("scroll", BtnFixed);

    return () => {
      window.removeEventListener("scroll", BtnFixed);
    };
  }, []);

  const property: IProperty = data?.data;
  if (!property) {
    return (
      <div className="container h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Loader className="w-9 h-9 md:w-14 md:h-14 animate-spin" />
            <h1 className="lg:text-3xl">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    description,
    locationName,
    price,
    city,
    bathroom,
    room,
    info,
    image: {
      formats: {
        medium: { width, height, url },
      },
    },
    imageGroup,
  } = property;

  // ========== Handling =========

  // Refresh Data
  const HandlerRefreshData = () => {
    window.location.reload();
  };

  return (
    <section className="py-28">
      <div className="container">
        {/* Loading */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-11">
            <ProjectsSkeleton />
            <ProjectsSkeleton />
            <ProjectsSkeleton />
          </div>
        )}

        {/* Error Handler */}
        {!isSuccess && isError && (
          <h1 className="flex justify-center items-center mx-auto text-foreground text-sm sm:text-xl lg:text-5xl my-20">
            {(error as IError)?.data?.error?.message || (
              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                  <OctagonAlert className="w-9 h-9 md:w-14 md:h-14" />
                  <h1>Not Found Please Try again</h1>
                </div>
                <Button className="w-fit" onClick={HandlerRefreshData}>
                  Refresh
                </Button>
              </div>
            )}
          </h1>
        )}

        {/* Success */}
        {isSuccess && !isLoading && (
          <div>
            <div className="flex flex-col xl:flex-row justify-between gap-4 mb-16">
              <div className="xl:flex-1">
                <div className="max-h-[500px] rounded-xl group overflow-hidden shadow-xl duration-500 relative">
                  <Image
                    src={`http://localhost:1337/${url}`}
                    alt={description}
                    width={width}
                    height={height}
                    loading="lazy"
                    className="w-full max-h-[500px] rounded-xl cursor-pointer duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 py-2 px-4 lg:py-4 lg:px-6 text-md lg:text-xl font-bold bg-secondary rounded-br-3xl">
                    <span className="text-primary">${price}</span> / Night
                  </div>
                </div>

                <FavoriteButton property={property} IsTitle />
              </div>

              {imageGroup && (
                <div className="max-h-[500px] grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-2 justify-center items-center gap-2">
                  <MyLightbox imageGroup={imageGroup} />
                </div>
              )}
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-8 mb-16 text-center xl:text-left">
              <div
                className={`flex flex-col xl:flex-row justify-between ${
                  info && "xl:w-[90%] xl:border-r xl:border-textColor"
                }`}
              >
                <div className="flex flex-col gap-y-4">
                  <h1 className="text-3xl text-shadow-primary">{title}</h1>
                  <div className="text-sm xl:text-md flex gap-x-2 mb-4 mx-auto xl:mx-0">
                    <div className="flex items-center gap-x-2">
                      <span className="text-md xl:text-xl text-shadow-smooth">
                        Location
                      </span>
                      <MoveRight /> {city} {locationName}
                    </div>
                    <MapPinHouse />
                  </div>
                  <div>
                    <h1 className="text-xl border-b border-textColor mb-4">
                      About
                    </h1>
                    <p className="text-textColor leading-normal">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex xl:flex-col gap-6 mx-auto">
                  <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1">
                    <Bed size={25} className="me-1" /> {room}
                  </span>
                  <span className="text-textColor inline-flex items-center leading-none text-md">
                    <Bath size={25} className="me-1" /> {bathroom}
                  </span>
                </div>
              </div>

              {info && (
                <div>
                  <h2 className="w-fit text-xl mx-auto mb-6 border-b border-textColor">
                    The amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-3 text-left justify-center items-center gap-4">
                    {info?.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1 xl:gap-2 text-[12px] font-light"
                      >
                        <CircleCheckBig className="text-primary w-6 h-6" />
                        <h3>{item}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col xl:flex-row justify-between gap-4 mb-16">
              <div className="xl:w-[66%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9927.741586541366!2d-0.06981626976895453!3d51.53274474727955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbcc62c36bd%3A0x9a79aa26640edeec!2zQXJkZW4gRXN0YXRlLCDZhNmG2K_ZhiBOMSA2UkfYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1730970072806!5m2!1sar!2seg"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[250px] lg:h-[500px] rounded-xl"
                ></iframe>
              </div>

              <div className="xl:w-[33%] flex flex-col justify-between gap-2 rounded-xl px-2 py-4 bg-secondary shadow-lg">
                <div className="flex justify-between items-center gap-x-10 gap-y-2 px-4 py-8 bg-background rounded-2xl shadow-md">
                  <div>
                    <h2>Savills Knightsbridge Estate Agents</h2>
                    <p className="text-sm text-textColor">
                      188 Brompton Road, London
                    </p>
                  </div>
                  <div>
                    <h2>0.5 miles</h2>
                    <p className="text-sm text-textColor">4 minutes</p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-x-10 gap-y-2 px-4 py-8 bg-background rounded-2xl shadow-md">
                  <div>
                    <h2>Savills Knightsbridge Estate Agents</h2>
                    <p className="text-sm text-textColor">
                      188 Brompton Road, London
                    </p>
                  </div>
                  <div>
                    <h2>0.5 miles</h2>
                    <p className="text-sm text-textColor">4 minutes</p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-x-10 gap-y-2 px-4 py-8 bg-background rounded-2xl shadow-md">
                  <div>
                    <h2>Savills Knightsbridge Estate Agents</h2>
                    <p className="text-sm text-textColor">
                      188 Brompton Road, London
                    </p>
                  </div>
                  <div>
                    <h2>0.5 miles</h2>
                    <p className="text-sm text-textColor">4 minutes</p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-x-10 gap-y-2 px-4 py-8 bg-background rounded-2xl shadow-md">
                  <div>
                    <h2>Savills Knightsbridge Estate Agents</h2>
                    <p className="text-sm text-textColor">
                      188 Brompton Road, London
                    </p>
                  </div>
                  <div>
                    <h2>0.5 miles</h2>
                    <p className="text-sm text-textColor">4 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 mb-16">
              {!isBtnFixed && (
                <div className="flex justify-center items-center gap-x-2">
                  <h2 className="lg:text-xl">Click here to book</h2>
                  <MoveRight />
                </div>
              )}

              <div className="relative">
                <div
                  className={`${
                    isBtnFixed
                      ? "fixed bottom-0 left-[50%] translate-x-[-50%] bg-secondary rounded-t-full z-10"
                      : "flex justify-center rounded-xl"
                  }`}
                >
                  <div className="bg-secondary lg:py-4 lg:px-8 rounded-full">
                    <Button className="rounded-full" variant={"outline"}>
                      Book now
                    </Button>
                  </div>
                </div>

                {isBtnFixed && (
                  <div className="fixed bottom-[-20px] w-[200px] left-[50%] translate-x-[-50%] h-10 overflow-hidden">
                    <div className="bg-secondary w-full h-full rounded-t-full"></div>
                  </div>
                )}
              </div>

              {!isBtnFixed && (
                <div className="flex justify-center items-center gap-x-2">
                  <MoveLeft />
                  <h2 className="lg:text-xl">Click here to inquire</h2>
                </div>
              )}
            </div>

            <SimilarProperties />
          </div>
        )}
      </div>
    </section>
  );
};

export default Property;
