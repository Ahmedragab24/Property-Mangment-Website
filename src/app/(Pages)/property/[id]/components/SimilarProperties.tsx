import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useGetPropertiesQuery } from "@/store/apis/apis";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  OctagonAlert,
} from "lucide-react";
import { IError, IProperty } from "@/interfaces";
import ProjectsSkeleton from "@/components/skeleton/ProjectsSkeleton";
import FavoriteButton from "@/components/CustomBtn/FavoriteButton";

const SimilarProperties = () => {
  const { isLoading, isSuccess, isError, error, data } = useGetPropertiesQuery({
    page: 1,
    pageSize: 10,
  });

  return (
    <div className="SimilarProperties">
      <div className="flex items-center gap-x-4 mb-6">
        <h2 className="text-xl">Similar Properties</h2>
        <hr className="w-[85%]" />
      </div>
      {isLoading && <ProjectsSkeleton />}

      {isSuccess && !isLoading && (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="flex flex-wrap mySwiper"
        >
          {data?.data.map((property: IProperty) => {
            const {
              documentId,
              title,
              locationName,
              image: { url },
              price,
              date,
              room,
              bathroom,
            } = property;

            return (
              <SwiperSlide key={documentId} className="lg:w-1/4 sm:w-1/2 p-2">
                <div className="h-fit">
                  <div className="h-auto md:h-[320px] lg:h-[430px] rounded-lg group duration-500 bg-secondary hover:text-foreground hover:shadow-xl">
                    <div className="relative overflow-hidden rounded-lg">
                      <Link href={`/property/${documentId}`}>
                        <Image
                          width={750}
                          height={400}
                          className="lg:h-64 md:h-36 object-cover object-center cursor-pointer duration-500 group-hover:scale-110"
                          src={`${process.env.NEXT_PUBLIC_BASE_URL_API}${url}`}
                          alt="blog"
                          loading="lazy"
                        />
                      </Link>

                      <div className="absolute top-0 left-0 z-10 text-foreground text-md font-bold duration-500">
                        <div className="bg-secondary py-2 px-4 rounded-br-3xl">
                          <span className="text-primary text-lg mr-2">
                            ${price}
                          </span>{" "}
                          / night
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

                        <FavoriteButton property={property} IsTitle={false} />
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
              </SwiperSlide>
            );
          })}

          <div className="swiper-navigation container justify-end">
            <div className="swiper-button-next">
              <ChevronLeft />
            </div>
            <div className="swiper-button-prev">
              <ChevronRight />
            </div>
          </div>
        </Swiper>
      )}

      {!isSuccess && isError && (
        <h1 className="flex justify-center items-center mx-auto text-foreground text-sm sm:text-xl lg:text-5xl my-20">
          {(error as IError)?.data?.error?.message || (
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <OctagonAlert className="w-9 h-9 md:w-14 md:h-14" />
                <h1>Not Found Please Try again</h1>
              </div>
            </div>
          )}
        </h1>
      )}
    </div>
  );
};

export default SimilarProperties;
