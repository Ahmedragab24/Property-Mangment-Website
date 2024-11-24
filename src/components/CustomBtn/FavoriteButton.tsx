import React, { useEffect, useState } from "react";
import RegistrationModel from "../model/RegistrationModel";
import { CheckCheck, Heart } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/store/features/FavoritesProperties/favoritesProperties";
import { IProperty, IUser } from "@/interfaces";
import { toast } from "@/hooks/use-toast";

interface IProps {
  property: IProperty;
  IsTitle?: boolean;
}

const FavoriteButton = ({ property, IsTitle }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<IUser | null>(null);
  const favorites = useAppSelector((state) => state.favorites.favorites);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setUserData(user ? JSON.parse(user) : null);
    }
  }, []);

  // Favorite Button
  const isFavoriteSome = favorites.some(
    (item: IProperty) => item.documentId === property.documentId
  );

  const handlerFavoriteBtn = () => {
    if (userData) {
      if (isFavoriteSome) {
        dispatch(removeFromFavorites(property));
        toast({
          variant: "destructive",
          title: "success",
          description: "item removed from favorites",
        });
      } else {
        dispatch(addToFavorites(property));
        toast({
          variant: "success",
          title: "Successful",
          description: "Item added to favorites",
        });
      }
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen ? (
        <RegistrationModel>
          <div
            className={`flex justify-center items-center gap-2 mt-3 cursor-pointer ${
              isFavoriteSome ? "text-red-500" : "text-gray-500"
            }`}
            onClick={handlerFavoriteBtn}
          >
            {isFavoriteSome && IsTitle && <CheckCheck />}

            {IsTitle && (
              <h2>
                {isFavoriteSome ? "Added to favorites" : "Add to favorites"}
              </h2>
            )}

            <Heart />
          </div>
        </RegistrationModel>
      ) : (
        <div
          className={`flex justify-center items-center gap-2 mt-3 cursor-pointer ${
            isFavoriteSome ? "text-red-500" : "text-gray-500"
          }`}
          onClick={handlerFavoriteBtn}
        >
          {isFavoriteSome && IsTitle && <CheckCheck />}
          {IsTitle && (
            <h2>
              {isFavoriteSome ? "Added to favorites" : "Add to favorites"}
            </h2>
          )}
          <Heart />
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
