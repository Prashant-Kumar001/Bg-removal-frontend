import React from "react";
import { assets } from "../assets/assets";
import { useUserContext } from "../context/UserContext";

const Hero = () => {
  const { removeBg } = useUserContext();
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed!");
      return;
    }

    if (file) {
      removeBg(file);
    }
  };

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from
          <br className="max-md:hidden" /> images for free
        </h1>

        <p className="my-6 text-[15px] text-neutral-500">
          Upload your image and get instant background removal with high
          quality.
        </p>

        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />

        <label
          htmlFor="fileUpload"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer 
                  bg-linear-to-r from-violet-600 to-fuchsia-500 
                  hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <img src={assets.upload_btn_icon} alt="upload" className="w-5" />
          <p className="text-white text-sm font-medium">Upload your image</p>
        </label>
      </div>

      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
