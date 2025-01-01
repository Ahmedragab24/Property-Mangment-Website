import React, { useState } from "react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import { storage } from "@/utils/appwrite/appwriteClient";
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

  const handleSingleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const response = await storage.createFile(
          `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
          "unique()",
          file
        );

        // الحصول على رابط المعاينة
        const filePreview = storage.getFilePreview(
          `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
          response.$id
        );

        // تخزين الرابط في Redux
        setSingleImageState(filePreview);
        dispatch(setSingleImage(filePreview));
        dispatch(setSingleImageID(response.$id));
      } catch (error) {
        console.error("Error uploading single image:", error);
      }
    }
  };

  const handleImageGroupChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      try {
        const filePreviews: string[] = [];
        const fileIDs: string[] = [];

        for (const file of Array.from(files)) {
          const response = await storage.createFile(
            `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
            "unique()",
            file
          );

          // الحصول على رابط المعاينة
          const filePreview = storage.getFilePreview(
            `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
            response.$id
          );

          filePreviews.push(filePreview);
          fileIDs.push(response.$id);
        }

        // تحديث Redux
        setImageGroupState((prev) => [...prev, ...filePreviews]);
        dispatch(setImageGroup(filePreviews));
        dispatch(setImageGroupIDs(fileIDs));
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    }
  };

  const handleRemoveSingleImage = async () => {
    try {
      if (singleImageID) {
        await storage.deleteFile(
          `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
          singleImageID
        );
      }
      setSingleImageState(null);
      dispatch(clearSingleImage());
    } catch (error) {
      console.error("Error removing single image:", error);
    }
  };

  const handleRemoveGroupImage = async (index: number) => {
    try {
      const imageID = imageGroupIDs[index];
      if (imageID) {
        await storage.deleteFile(
          `${process.env.NEXT_PUBLIC_BUCKET_ID}`,
          imageID
        );
      }
      const updatedImages = imageGroup.filter((_, i) => i !== index);
      const updatedImageIDs = imageGroupIDs.filter((_, i) => i !== index);

      setImageGroupState(updatedImages);
      dispatch(setImageGroup(updatedImages));
      dispatch(setImageGroupIDs(updatedImageIDs));
    } catch (error) {
      console.error("Error removing group image:", error);
    }
  };

  return (
    <>
      {/* Single Image */}
      {type === "single" && (
        <div className="w-full max-h-full ">
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
            <div className="h-full relative overflow-hidden p-4 ">
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
