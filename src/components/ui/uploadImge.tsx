"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import { useDispatch } from "react-redux";
import {
  setSingleImage,
  setImageGroup,
  clearSingleImage,
  setSingleImageID,
  setImageGroupIDs,
} from "@/store/features/UploadingImages/imagesSlice";
import { useAppSelector } from "@/store/hooks";

interface ImageType {
  type: "single" | "group";
}

const UploadImages = ({ type }: ImageType) => {
  const [singleImage, setSingleImageState] = useState<string | null>(null);
  const [imageGroup, setImageGroupState] = useState<string[]>([]);
  const { singleImageID, imageGroupIDs } = useAppSelector(
    (state) => state.images
  );
  const dispatch = useDispatch();

  console.log(singleImageID, imageGroupIDs);

  // Cloudinary configuration
  const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL!;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Cloudinary upload failed");

    return res.json();
  };

  const handleSingleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await uploadToCloudinary(file);
      setSingleImageState(data.secure_url);
      dispatch(setSingleImage(data.secure_url));
      dispatch(setSingleImageID(data.public_id));
    } catch (error) {
      console.error("Error uploading single image:", error);
    }
  };

  const handleImageGroupChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;

    const filePreviews: string[] = [];
    const fileIDs: string[] = [];

    for (const file of Array.from(files)) {
      try {
        const data = await uploadToCloudinary(file);
        filePreviews.push(data.secure_url);
        fileIDs.push(data.public_id);
      } catch (error) {
        console.error("Error uploading image in group:", error);
      }
    }

    setImageGroupState((prev) => [...prev, ...filePreviews]);
    dispatch(setImageGroup(filePreviews));
    dispatch(setImageGroupIDs(fileIDs));
  };

  const handleRemoveSingleImage = () => {
    setSingleImageState(null);
    dispatch(clearSingleImage());
  };

  const handleRemoveGroupImage = (index: number) => {
    const updatedImages = imageGroup.filter((_, i) => i !== index);
    const updatedImageIDs = imageGroupIDs.filter((_, i) => i !== index);

    setImageGroupState(updatedImages);
    dispatch(setImageGroup(updatedImages));
    dispatch(setImageGroupIDs(updatedImageIDs));
  };

  return (
    <>
      {/* Single Image */}
      {type === "single" && (
        <div className="w-full max-h-full">
          <form className={`${singleImage ? "hidden" : "block"} py-20`}>
            <label htmlFor="file">
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer duration-300 hover:text-primary hover:scale-105">
                <CloudUpload className="w-20 h-20" />
                <span>Browse file</span>
              </div>
              <input
                id="file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleSingleImageChange}
              />
            </label>
          </form>
          {singleImage && (
            <div className="h-full relative overflow-hidden p-4">
              <Image
                src={singleImage}
                alt="Uploaded image"
                width={500}
                height={400}
                className="w-full max-h-[230px]"
              />
              <Button
                onClick={handleRemoveSingleImage}
                variant="destructive"
                size="icon"
                className="absolute top-3 right-2"
              >
                X
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Group Images */}
      {type === "group" && (
        <div>
          <form className={`${imageGroup.length ? "hidden" : "block"}`}>
            <label htmlFor="file-group">
              <div className="flex flex-col items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:scale-105">
                <CloudUpload className="w-20 h-20" />
                <span>Browse files</span>
              </div>
              <input
                id="file-group"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageGroupChange}
              />
            </label>
          </form>
          {imageGroup.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {imageGroup.map((image, index) => (
                <div key={index} className="relative w-40 h-40 overflow-hidden">
                  <Image
                    src={image}
                    alt={`Uploaded image ${index + 1}`}
                    layout="fill"
                  />
                  <Button
                    onClick={() => handleRemoveGroupImage(index)}
                    variant="destructive"
                    size="icon"
                    className="absolute top-3 right-2 text-[10px] w-7 h-7"
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UploadImages;
