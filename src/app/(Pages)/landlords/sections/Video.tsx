import React from "react";

const Video = () => {
  return (
    <section className="mt-16">
      <div className="bg-secondary shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-4">
          <div className="px-10 py-6 lg:py-0">
            <h3 className="text-primary text-xl lg:text-4xl mb-4">
              We Transfrom Your <br /> Property
            </h3>
            <p className="text-sm text-textColor leading-6">
              Experience a free premium makeover with Hububb Our interior
              designers will enhance your property with stylish decor and modern
              amenities, averaging a £5,000 investment. Enjoy a unique,
              personalized space for tenants and guaranteed rent while we handle
              everything.
            </p>
          </div>

          <video
            className="w-full lg:w-1/2 h-auto lg:h-[450px] object-fill bg-contain brightness-75"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dk4yvlwr0/video/upload/v1728012351/Red_and_Blue_Modern_YouTube_Intro_Video_p5ffgb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
