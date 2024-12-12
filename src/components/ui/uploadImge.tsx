import React, { useState } from "react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Button } from "./button";
import {
  useUploadImageMutation,
  useDeleteImageMutation,
} from "@/store/apis/apis";
import { useDispatch } from "react-redux";
import {
  setSingleImageID,
  setImageGroupIDs,
} from "@/store/features/UploadingImages/imagesSlice";

interface ImageType {
  type: "single" | "group";
}

const UploadImages = ({ type }: ImageType) => {
  const [singleImage, setSingleImage] = useState<string | null>(null);
  const [imageGroup, setImageGroup] = useState<string[]>([]);

  const [singleImageID, setSingleImageIDState] = useState<number | null>(null);
  const [imageGroupIDs, setImageGroupIDsState] = useState<number[]>([]);

  const [uploadImage] = useUploadImageMutation();
  const [deleteImage] = useDeleteImageMutation();
  const dispatch = useDispatch();

  const handleSingleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("files", file);

      try {
        const response = await uploadImage(formData).unwrap();
        if (response && response[0]?.id) {
          const imageUrl = URL.createObjectURL(file);
          setSingleImage(imageUrl);
          setSingleImageIDState(response[0]?.id);
          dispatch(setSingleImageID(response[0]?.id));
        }
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
      const formData = new FormData();
      Array.from(files).forEach((file) => formData.append("files", file));

      try {
        const response = await uploadImage(formData).unwrap();
        if (response && response.length > 0) {
          const ids = response.map((img: { id: number }) => img.id);
          const urls = Array.from(files).map((file) =>
            URL.createObjectURL(file)
          );

          setImageGroup(urls);
          setImageGroupIDsState(ids);
          dispatch(setImageGroupIDs(ids));
        }
      } catch (error) {
        console.error("Error uploading image group:", error);
      }
    }
  };

  const handleRemoveImage = async () => {
    if (singleImageID) {
      try {
        await deleteImage(singleImageID).unwrap();
        setSingleImage(null);
        setSingleImageIDState(null);
        dispatch(setSingleImageID(0));
      } catch (error) {
        console.error("Error deleting single image:", error);
      }
    }
  };

  const handleRemoveImageGroup = async (index: number) => {
    const imageID = imageGroupIDs[index];
    if (imageID) {
      try {
        await deleteImage(imageID).unwrap();
        setImageGroup((prevImages) => prevImages.filter((_, i) => i !== index));
        setImageGroupIDsState((prevIDs) =>
          prevIDs.filter((_, i) => i !== index)
        );
        dispatch(setImageGroupIDs(imageGroupIDs.filter((_, i) => i !== index)));
      } catch (error) {
        console.error("Error deleting image from group:", error);
      }
    }
  };

  return (
    <div className="w-full h-full">
      {/* Single Image */}
      {type === "single" && (
        <div className="w-full h-full">
          <form
            className={`${
              singleImage ? "hidden" : "block"
            } w-full h-full flex justify-center items-center`}
          >
            <label htmlFor="file">
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <CloudUpload className="w-20 h-20 duration-300 group-hover:text-primary group-hover:scale-100" />
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
            <div className="relative w-full h-[13.75rem] overflow-hidden rounded-lg shadow-lg">
              <Image src={singleImage} alt="Uploaded image" layout="fill" />
              <Button
                onClick={handleRemoveImage}
                variant={"destructive"}
                size={"icon"}
                className="absolute top-2 right-2 text-[13px] rounded-full px-1 py-1"
              >
                X
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Group Images */}
      {type === "group" && (
        <div className={`w-full ${imageGroup.length ? "h-auto" : "h-44"}`}>
          <form
            className={`${
              imageGroup.length ? "hidden" : "block"
            } w-full h-full flex justify-center items-center`}
          >
            <label htmlFor="file-group">
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <CloudUpload className="w-20 h-20 duration-300 group-hover:text-primary group-hover:scale-100" />
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
            <div className="w-full h-auto flex flex-wrap items-center justify-center gap-4">
              {imageGroup.map((image, index) => (
                <div
                  key={index}
                  className="relative w-40 h-40 overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`Uploaded image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                  <Button
                    onClick={() => handleRemoveImageGroup(index)}
                    variant={"destructive"}
                    size={"icon"}
                    className="absolute top-2 right-2 text-[13px] rounded-full px-1 py-1"
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadImages;
