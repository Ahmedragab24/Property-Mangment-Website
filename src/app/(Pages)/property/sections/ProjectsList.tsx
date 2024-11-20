"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  Bed,
  DoorClosed,
  House,
  MapPinHouse,
  OctagonAlert,
  Save,
  SlidersHorizontal,
} from "lucide-react";
import { SearchProperty } from "../../home/components/SearchProprtys";
import { DatePicker } from "../components/DatePicker";
import SelectGests from "../components/SelectGests";
import { useGetPropertiesQuery } from "@/store/apis/apis";
import { IError, IProperty } from "@/interfaces";
import Link from "next/link";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";

const ProjectsList = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetPropertiesQuery(
    "",
    { pollingInterval: 5000 }
  );

  // Rendering Data
  const RenderingData = () =>
    data?.data.map(
      ({
        documentId,
        title,
        locationName,
        image: { url },
        price,
        date,
        room,
        bathroom,
      }: IProperty) => (
        <div key={documentId} className="h-fit">
          <div className="h-auto md:h-[320px] lg:h-[430px] rounded-lg group duration-500 bg-secondary hover:text-foreground hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg">
              <Link href={`/property/${documentId}`}>
                <Image
                  width={750}
                  height={400}
                  className="lg:h-64 md:h-36 object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                  src={`http://localhost:1337/${url}`}
                  alt="blog"
                  loading="lazy"
                />
              </Link>

              <div className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500">
                <div className="bg-secondary py-2 px-4 rounded-br-3xl">
                  <span className="text-primary text-lg mr-2">${price}</span> /
                  night
                </div>
              </div>

              <div className="absolute top-0 right-0 py-2 px-4 z-10">
                <h3 className="text-white text-shadow">{date}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="tracking-widest !text-foreground text-md font-bold mb-1">
                    {title}
                  </h2>
                </div>

                <div>
                  <span className="text-textColor inline-flex items-center leading-none text-sm  cursor-pointer duration-500 hover:text-primary">
                    Save
                    <Save size={15} className="ms-1" />
                  </span>
                </div>
              </div>
              <p className="leading-relaxed text-sm mb-3 line-clamp-1">
                {locationName}
              </p>
              <div className="flex items-center flex-wrap">
                <Link href={`/property/${documentId}`}>
                  <Button variant={"link"} className="m-0 p-0">
                    Show more
                    <ArrowRight size={15} className="ms-1" />
                  </Button>
                </Link>

                <span className="text-textColor mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-textColor pointer">
                  <Bed size={20} className="me-1" /> {room}
                </span>
                <span className="text-textColor inline-flex items-center leading-none text-sm">
                  <Bath size={20} className="me-1" /> {bathroom}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    );

  // Refresh Data
  const HandlerRefreshData = () => {
    window.location.reload();
  };

  return (
    <section>
      {/* Group Filtering Buttons */}
      <div className="mb-14">
        <div className="flex justify-center lg:justify-between mb-2 lg:mb-0">
          <div className="flex gap-1 md:gap-2 mb-1">
            <Button variant={"ghost"}>
              <DoorClosed size={18} className="lg:me-2" />
              <span className="hidden md:block">Room</span>
            </Button>
            <Button variant={"ghost"}>
              <House size={18} className="lg:me-2" />
              <span className="hidden md:block">Entire Home</span>
            </Button>
            <Button variant={"ghost"}>
              <MapPinHouse size={18} className="lg:me-2" />
              <span className="hidden md:block">Any</span>
            </Button>
          </div>
          <div>
            <Button variant={"ghost"}>
              <SlidersHorizontal size={18} className="lg:me-2" />
              <span className="hidden md:block">Filter</span>
            </Button>
          </div>
        </div>

        <div className="w-full py-4 px-2 border border-primary flex flex-col lg:flex-row lg:flex-wrap gap-y-4 gap-x-2 justify-around items-center bg-secondary  rounded-lg">
          <SearchProperty className="w-fit px-6 lg:px-14" />
          <DatePicker placeHolder="Check in" className="w-fit px-6 lg:px-14" />
          <DatePicker placeHolder="Check Out" className="w-fit px-6 lg:px-14" />
          <SelectGests />
          <Button>Check now</Button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-textColor mb-14">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-11">
            {RenderingData()}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
