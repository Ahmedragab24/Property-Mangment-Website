"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  House,
  Loader,
  MapPinHouse,
  OctagonAlert,
  SlidersHorizontal,
} from "lucide-react";
import {
  useFilterPropertiesByCityAndGuestsQuery,
  useFilterPropertiesByRoomQuery,
  useGetPropertiesQuery,
} from "@/store/apis/apis";
import { IError, IProperty } from "@/interfaces";
import Link from "next/link";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";
import FilteringRoom from "../components/FilteringRoom";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import { SearchProperty } from "../../home/components/SearchProprtys";
import { DatePicker } from "../components/DatePicker";
import SelectGests from "../components/SelectGests";
import FavoriteButton from "@/components/CustomBtn/FavoriteButton";

type Filtering = "initial" | "room" | "GroupFilter";

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const { isLoading, isSuccess, isError, error, data } = useGetPropertiesQuery({
    page: currentPage,
    pageSize,
  });
  const { room, city, guests } = useAppSelector(
    (state: RootState) => state.filteringProperties
  );
  const topRef = useRef<HTMLDivElement | null>(null);
  const { data: filteringDataByRoom } = useFilterPropertiesByRoomQuery(
    room as number
  );
  const { data: filteringDataByCityAndGuests } =
    useFilterPropertiesByCityAndGuestsQuery({
      city,
      guests,
    });
  const [filteringDataState, setFilteringDataState] =
    useState<Filtering>("initial");
  const [changeData, setChangeData] = useState<IProperty[]>([]);

  useEffect(() => {
    if (filteringDataState === "initial") {
      setChangeData(data?.documents || []);
    } else if (filteringDataState === "room") {
      setChangeData(filteringDataByRoom?.documents || []);
    } else if (filteringDataState === "GroupFilter") {
      setChangeData(filteringDataByCityAndGuests?.documents || []);
    }
  }, [
    data?.documents,
    filteringDataByRoom?.documents,
    filteringDataByCityAndGuests?.documents,
    filteringDataState,
    currentPage,
  ]);

  console.log(data);
  console.log(error);

  //////// Handling /////////

  // Filter Button Room
  const filterBtnRoom = () => {
    setFilteringDataState("room");
  };

  // Filter Group Button Check now
  const filterBtnCheckNow = () => {
    setFilteringDataState("GroupFilter");
  };

  //  Rendering Data
  const RenderingData = () =>
    changeData.map((property: IProperty) => {
      const {
        $id,
        title,
        locationName,
        image: url,
        price,
        date,
        room,
        bathroom,
      } = property;

      return (
        <div key={$id} className="h-fit">
          <div className="h-auto md:h-[320px] lg:h-[430px] rounded-lg group duration-500 bg-secondary hover:text-foreground hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg">
              <Link href={`/property/${$id}`}>
                <Image
                  width={750}
                  height={400}
                  className="lg:h-64 md:h-36 object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                  src={url || '/fallback-image.jpg'}
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
                <h3 className="text-white text-shadow">
                  {date instanceof Date ? date.toLocaleDateString() : date}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="tracking-widest !text-foreground text-md font-bold mb-1">
                    {title}
                  </h2>
                </div>

                <FavoriteButton property={property} IsTitle={false} />
              </div>
              <p className="leading-relaxed text-sm mb-3 line-clamp-1">
                {locationName}
              </p>
              <div className="flex items-center flex-wrap">
                <Link href={`/property/${$id}`}>
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
      );
    });

  // Refresh Data
  const HandlerRefreshData = () => {
    window.location.reload();
  };

  // Pagination Buttons
  const totalPages = Math.ceil((data?.total || 0) / pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mb-16">
      {/* Group Filtering Buttons */}
      <div className="mb-14">
        <div className="flex justify-center lg:justify-between mb-2 lg:mb-0">
          <div className="flex gap-1 md:gap-2 mb-1">
            <Button
              className={`${
                filteringDataState == "initial"
                  ? "bg-secondary"
                  : "bg-transparent"
              } text-foreground hover:bg-secondary`}
              onClick={() => setFilteringDataState("initial")}
            >
              <MapPinHouse size={18} className="lg:me-2" />
              <span className="hidden md:block">Any</span>
            </Button>

            <FilteringRoom
              filterBtn={filterBtnRoom}
              type={filteringDataState}
            />
            <Button variant={"ghost"}>
              <House size={18} className="lg:me-2" />
              <span className="hidden md:block">Entire Home</span>
            </Button>
          </div>
          <div>
            <div className="cursor-pointer bg-transparent hover:bg-transparent text-foreground flex">
              <SlidersHorizontal size={18} className="lg:me-2" />
              <span className="hidden md:block">Filter</span>
            </div>
          </div>
        </div>

        <div
          ref={topRef}
          className="w-full py-4 px-2 border border-primary flex flex-col lg:flex-row lg:flex-wrap gap-y-4 gap-x-2 justify-around items-center bg-secondary  rounded-lg"
        >
          <SearchProperty className="w-fit px-6 lg:px-14 !border-none shadow-none" />
          <DatePicker placeHolder="Check in" className="w-fit px-6 lg:px-14 !border-none shadow-none"/>
          <DatePicker placeHolder="Check Out" className="w-fit px-6 lg:px-14 !border-none shadow-none"/>
          <SelectGests className="!border-none shadow-none" />
          <Button onClick={filterBtnCheckNow}>
            {isLoading ? (
              <div className="flex items-center gap-x-2">
                <Loader className="animate-spin" />
                Loading...
              </div>
            ) : (
              "Check now"
            )}
          </Button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-textColor">
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
            {(error as IError)?.message || (
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
          <>
            {!changeData.length ? (
              <div className="flex justify-center items-center gap-x-2">
                <OctagonAlert />
                <h1 className="text-md lg:text-xl">Not Data Found</h1>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-11">
                  {RenderingData()}
                </div>
                <div className="flex justify-center items-center gap-x-4 mt-8">
                  <Button
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                    className="bg-secondary text-foreground"
                  >
                    <ChevronLeft />
                    Previous
                  </Button>
                  <p className="text-textColor">
                    Page {currentPage} of {totalPages}
                  </p>
                  <Button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    className="bg-secondary text-foreground"
                  >
                    Next
                    <ChevronRight />
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
