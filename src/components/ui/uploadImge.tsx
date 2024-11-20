"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, X } from "lucide-react";
import Image from "next/image";
import { Input } from "./input";

const UploadImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setIsUploading(true);
    setUploadSuccess(false);
    setUploadError(false);

    // Simulating an upload process
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUploadSuccess(true);
    } catch (error) {
      console.log(error);

      setUploadError(true);
    } finally {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    if (image) {
      handleUpload();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleReset = () => {
    setImage(null);
    setUploadSuccess(false);
    setUploadError(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      {image && (
        <div className="relative w-64 h-64">
          <Image
            width={200}
            height={200}
            src={image}
            alt="Selected"
            className="w-full h-full object-cover rounded-lg"
          />
          <Button
            onClick={handleReset}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
            aria-label="Remove image"
          >
            <X size={16} />
          </Button>
        </div>
      )}
      <Button
        onClick={handleButtonClick}
        disabled={isUploading}
        className={`w-64 ${
          uploadSuccess
            ? "bg-green-500 hover:bg-green-600"
            : uploadError
            ? "bg-red-500 hover:bg-red-600"
            : ""
        }`}
      >
        {isUploading ? (
          <span className="flex items-center">
            Uploading...
            <Upload className="ml-2 h-4 w-4 animate-bounce" />
          </span>
        ) : image ? (
          uploadSuccess ? (
            <span className="flex items-center">
              Uploaded
              <Check className="ml-2 h-4 w-4" />
            </span>
          ) : uploadError ? (
            <span className="flex items-center">
              Error
              <X className="ml-2 h-4 w-4" />
            </span>
          ) : (
            "Upload Image"
          )
        ) : (
          "Select Image"
        )}
      </Button>
    </div>
  );
};

export default UploadImage;
