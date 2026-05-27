import React from "react";
import { assets } from "../assets/assets";
import { useUserContext } from "../context/UserContext";

const Result = () => {

  const { loading, resultImage } = useUserContext();

  const isLoading = loading;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 px-4 md:px-12 lg:px-24 py-10">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-6 md:p-10 transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-gray-500">Original</p>

            <div className="group h-70 md:h-90 rounded-2xl border-2 border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden transition hover:shadow-md">
              <img
                src={assets.image_w_bg}
                alt="Original"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-gray-500">
              Background Removed
            </p>

            <div className="h-70 md:h-90 rounded-2xl border-2 border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden relative transition hover:shadow-md">
              {isLoading ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-full border-4 border-violet-500 border-t-transparent animate-spin"></div>

                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
                  </div>

                  <p className="text-xs text-gray-400">
                    Removing background...
                  </p>
                </div>
              ) : (
                <img
                  src={resultImage ? resultImage : assets.image_w_bg}
                  alt="Result"
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-10">
          <button className="px-5 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 text-sm font-medium transition">
            Cancel
          </button>

          <button className="px-6 py-2.5 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 text-white text-sm font-medium shadow-md transition">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
