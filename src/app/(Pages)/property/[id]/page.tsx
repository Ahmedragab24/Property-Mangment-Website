"use client";

import MyLightbox from "@/components/lightbox/LightBox";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";
import { IError, IProperty } from "@/interfaces";
import { useGetOnePropertyQuery } from "@/store/apis/apis";
import {
  CircleCheckBig,
  MapPinHouse,
  MoveRight,
  OctagonAlert,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { Button } from "react-day-picker";

const Property = () => {
  const { id } = useParams();
  const { isLoading, isError, isSuccess, error, data } =
    useGetOnePropertyQuery(id);

  const property: IProperty = data?.data;

  if (!property) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    locationName,
    price,
    info,
    image: {
      formats: {
        medium: { width, height, url },
      },
    },
    imageGroup,
  } = property;

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
            <div className="xl:h-[500px] flex flex-col xl:flex-row justify-between items-stretch gap-4 mb-6 overflow-hidden">
              <div className="xl:flex-1 rounded-xl group overflow-hidden shadow-xl duration-500 relative">
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

              <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-2 justify-center items-center gap-2">
                <MyLightbox imageGroup={imageGroup} />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 mb-6">
              <div className="w-[65%] flex flex-col gap-y-4">
                <h1 className="text-3xl text-shadow-primary">{title}</h1>
                <div className="text-xl text-textColor flex gap-x-2">
                  <div className="flex items-center gap-x-2">
                    <span className="text-2xl text-shadow-smooth">
                      Location
                    </span>
                    <MoveRight /> {locationName}
                  </div>
                  <MapPinHouse />
                </div>
                <p className="text-textColor leading-normal">{description}</p>
              </div>

              <div className="w-[35%] border border-foreground rounded-xl p-4">
                <h2 className="text-2xl text-center mb-6">The amenities</h2>
                <div className="grid grid-cols-3 justify-center items-end gap-y-4">
                  {info?.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-x-2 text-sm ">
                      <CircleCheckBig className="text-primary" />
                      <h3>{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 mb-6">
              <div className="w-[65%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9927.741586541366!2d-0.06981626976895453!3d51.53274474727955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbcc62c36bd%3A0x9a79aa26640edeec!2zQXJkZW4gRXN0YXRlLCDZhNmG2K_ZhiBOMSA2UkfYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1730970072806!5m2!1sar!2seg"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[500px] rounded-xl"></iframe>
              </div>

              <div className="w-[35%]  rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center gap-x-10 gap-y-2">
                  <div>
                    <h2>sdffrefqe </h2>
                    <p> ewfef efqefqefqef</p>
                  </div>
                  <div>
                    <h2> ewfef</h2>
                    <p> efqef</p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-x-10 gap-y-2">
                  <div>
                    <h2>sdffrefqe </h2>
                    <p> ewfef efqefqefqef</p>
                  </div>
                  <div>
                    <h2> ewfef</h2>
                    <p> efqef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Property;
