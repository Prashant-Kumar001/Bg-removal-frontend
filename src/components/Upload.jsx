import React from "react";
import { assets } from "../assets/assets";

const Upload = ({ isSignedIn }) => {



  const handleFileChange = (e) => {

    if(isSignedIn){
      alert("Please sign in first.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="pb-10 text-center">
      <h1
        className="mb-12 sm:mb-20 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold 
        bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent py-6 md:py-16"
      >
        See the magic, Try now ✨
      </h1>

      <div className="flex justify-center">
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={handleFileChange}
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
    </div>
  );
};

export default Upload;
