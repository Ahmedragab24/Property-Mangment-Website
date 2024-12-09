import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setSingleImage,
  setImageGroup,
  clearSingleImage,
  clearImageGroup,
} from "@/store/features/UploadingImages/imagesSlice";
import { useUploadImageMutation } from "@/store/apis/apis";

const UploadImages = () => {
  const dispatch = useDispatch();
  const [uploadImage] = useUploadImageMutation();

  const { singleImage, imageGroup } = useSelector(
    (state: RootState) => state.images
  );

  const handleSingleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("files", file);

      try {
        const response = await uploadImage(formData).unwrap();
        const imageUrl = response[0]?.url; // URL النهائي من Strapi
        if (imageUrl) {
          dispatch(setSingleImage(imageUrl)); // حفظ الرابط النهائي
        }
      } catch (err) {
        alert("خطأ أثناء رفع الصورة. حاول مرة أخرى.");
        console.log(err);
      }
    }
  };

  const handleImageGroupChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      try {
        const response = await uploadImage(formData).unwrap();
        const imageUrls = response.map((img: { url: string }) => img.url);
        if (imageUrls.length > 0) {
          dispatch(setImageGroup(imageUrls)); // حفظ الروابط النهائية
        }
      } catch (err) {
        alert("خطأ أثناء رفع الصور. حاول مرة أخرى.");
        console.log(err);
      }
    }
  };

  const handleClear = () => {
    dispatch(clearSingleImage());
    dispatch(clearImageGroup());
  };

  return (
    <div>
      <div>
        <label>
          صورة واحدة:
          <input
            type="file"
            accept="image/*"
            onChange={handleSingleImageChange}
          />
        </label>
        {singleImage && (
          <div>
            <p>صورة واحدة:</p>
            <img
              src={`http://localhost:1337${singleImage}`} // استخدام الرابط النهائي
              alt="Uploaded single"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>

      <div>
        <label>
          مجموعة صور:
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageGroupChange}
          />
        </label>
        {imageGroup.length > 0 && (
          <div className="image-group">
            <p>مجموعة الصور:</p>
            {imageGroup.map((url, index) => (
              <img
                key={index}
                src={`http://localhost:1337${url}`} // استخدام الرابط النهائي
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
          </div>
        )}
      </div>

      <button onClick={handleClear}>مسح الصور</button>
    </div>
  );
};

export default UploadImages;
