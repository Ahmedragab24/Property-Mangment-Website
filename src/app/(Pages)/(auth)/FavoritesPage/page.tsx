"use client";

import HandlerNavColor from "@/components/layout/HandlerNavColor";
import RegistrationModel from "@/components/model/RegistrationModel";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { IProperty } from "@/interfaces";
import { removeFromFavorites } from "@/store/features/FavoritesProperties/favoritesProperties";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ArrowRight, Bath, Bed, ShieldBan, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FavoritePage = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const userData = useAppSelector((state) => state.UserData.user?.user);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userData) {
      setIsUserLogin(true);
    }
  }, [userData]);

  // Remove Property
  const removeProperty = (property: IProperty) => {
    const isFavoriteSome = favorites.some(
      (item: IProperty) => item.documentId === property.documentId
    );
    if (isFavoriteSome) {
      dispatch(removeFromFavorites(property));
      toast({
        variant: "destructive",
        title: "success",
        description: "item removed from favorites",
      });
    }
  };

  return (
    <section className="py-36">
      <HandlerNavColor BackgroundImg={false} />
      <div className="container">
        <h1 className="w-fit mx-auto px-2 text-3xl text-shadow-primary border-b border-textColor mb-16">
          Favorites Page
        </h1>
        {isUserLogin ? (
          favorites.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-11">
              {favorites.map((property: IProperty) => {
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
                  <div key={documentId} className="h-fit">
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
                            </span>
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

                          <div
                            className="cursor-pointer"
                            onClick={() => removeProperty(property)}
                          >
                            <Trash2 className="text-red-500 hover:text-red-700" />
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
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center">
              <h1 className="flex gap-2 lg:text-xl">
                <ShieldBan /> Favorites are empty, No items have been added.
              </h1>
            </div>
          )
        ) : (
          <div className="w-fit mx-auto space-y-4 flex flex-col justify-center items-center">
            <h1 className="lg:text-xl text-center ">
              Log in to view your favorites
            </h1>

            <RegistrationModel>
              <Button>Sign is</Button>
            </RegistrationModel>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoritePage;
