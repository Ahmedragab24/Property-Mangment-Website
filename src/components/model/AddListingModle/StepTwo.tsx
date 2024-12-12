"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { useCreatePropertyMutation } from "@/store/apis/apis";
import { DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSteps } from "@/store/features/stepsAddLidting/stepsSlice";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/ui/uploadImge";
import { SearchProperty } from "@/app/(Pages)/home/components/SearchProprtys";
import SelectBathroom from "./components/SelectBathroom";
import SelectKitchen from "./components/SelectKitchen";
import SelectAmenities from "./components/SelectAmenities";
import FilteringRoom from "@/app/(Pages)/property/components/FilteringRoom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@radix-ui/react-dropdown-menu";
import SelectGests from "@/app/(Pages)/property/components/SelectGests";
import { IError } from "@/interfaces";

const StepTwo = () => {
  const [createProperty, { isLoading }] = useCreatePropertyMutation({
    fixedCacheKey: "createPropertyCache",
  });
  const dispatch = useAppDispatch();
  const { singleImageID, imageGroupIDs } = useAppSelector(
    (state) => state.images
  );
  const { city, guests, room, bathroom, kitchen, amenities } = useAppSelector(
    (state) => state.filteringProperties
  );
  const userId = useAppSelector(
    (state) => state.UserData?.landlord?.data?.documentId
  );
  const [Data, setData] = useState({
    title: "",
    description: "",
    image: singleImageID,
    imageGroup: imageGroupIDs,
    city: city,
    room: room || 2,
    bathroom: bathroom || 1,
    kitchen: kitchen || 1,
    NumPerson: guests || 2,
    price: 0,
    locationName: "",
    locationGoogleMap: "",
    info: amenities || [],
    date: new Date(),
    landlord: userId,
  });
  const [massageError, setMassageError] = useState("");

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      image: singleImageID,
      imageGroup: imageGroupIDs,
      room: room,
      bathroom: bathroom,
      kitchen: kitchen,
      NumPerson: guests,
      city: city,
      info: amenities,
    }));
  }, [
    singleImageID,
    imageGroupIDs,
    room,
    city,
    bathroom,
    kitchen,
    guests,
    amenities,
  ]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const validateData = () => {
  //   if (
  //     !Data.title ||
  //     !Data.description ||
  //     !Data.price ||
  //     !Data.locationName ||
  //     !Data.locationGoogleMap ||
  //     !Data.NumPerson ||
  //     !Data.image ||
  //     !Data.imageGroup
  //   ) {
  //     setMassageError("Please fill all fields correctly.");
  //     return false;
  //   }
  //   return true;
  // };

  const handleSubmit = async () => {
    // if (!validateData()) return;

    try {
      await createProperty({ data: Data }).unwrap();
      dispatch(setSteps({ stepOne: false, stepTwo: false, stepThree: true }));
    } catch (err) {
      const errorMsg =
      (err as IError)?.data?.error?.message || "An error occurred.";
      setMassageError(errorMsg);
    }
  };

  return (
    <ScrollArea className="h-[500px] lg:h-[400px]">
      <div className="flex flex-col gap-6 px-3 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-4 lg:gap-10">
          <span className="text-primary text-3xl">Step 2</span>
          <DialogTitle>Tell Us About Your Property</DialogTitle>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Label className="text-sm">Write the main title</Label>
              <Input
                name="title"
                placeholder="Title"
                value={Data.title}
                onChange={handleInputChange}
                className="h-12 !w-auto"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">
                Write what you want to describe about the apartment.
              </Label>
              <Textarea
                name="description"
                placeholder="Description"
                value={Data.description}
                onChange={handleInputChange}
                className="h-28"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Label className="text-sm">Enter the facility address</Label>
              <Input
                name="locationName"
                placeholder="Location Name"
                value={Data.locationName}
                onChange={handleInputChange}
                className="h-12"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">
                Enter the map on Google, not the link, but by copying the HTML
                content.
              </Label>
              <Textarea
                name="locationGoogleMap"
                placeholder='<iframe src="https://www.google.com/maps/embed..." />'
                value={Data.locationGoogleMap}
                onChange={handleInputChange}
                className="h-28"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-y-6 gap-x-3">
            <div className="flex flex-col gap-1">
              <Label className="text-sm">Price per night</Label>
              <Input
                name="price"
                type="number"
                placeholder="Price"
                value={Data.price.toString()}
                onChange={handleInputChange}
                className="bg-secondary w-44 lg:w-36 px-6 h-12"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">In which city?</Label>
              <SearchProperty className="w-full lg:!w-fit px-20 lg:px-10 py-6 flex justify-center" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">Number of rooms</Label>
              <FilteringRoom className="px-20 lg:px-10 py-6 bg-secondary hover:!bg-primary/40" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-y-6 gap-x-3">
            <div className="flex flex-col gap-1">
              <Label className="text-sm">Number of bathroom</Label>
              <SelectBathroom className="px-20 lg:px-10 py-6" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">Number of Kitchen</Label>
              <SelectKitchen className="px-20 lg:px-10 py-6" />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="text-sm">Number of people</Label>
              <SelectGests className="px-20 lg:px-10 py-6" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm">Amenities available</Label>
            <SelectAmenities />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-sm">Main image</Label>
            <div className="bg-secondary w-full h-full p-6 rounded-md">
              <ImageUploader type="single" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-sm">All images to be added</Label>
          <div className="bg-secondary w-full p-6 rounded-md">
            <ImageUploader type="group" />
          </div>
        </div>

        {massageError && <p className="text-xl text-red-500">{massageError}</p>}

        <Button onClick={handleSubmit} disabled={isLoading} className="w-fit">
          {isLoading && <Loader className="animate-spin mr-2" />} Submit
        </Button>
      </div>
    </ScrollArea>
  );
};

export default StepTwo;
