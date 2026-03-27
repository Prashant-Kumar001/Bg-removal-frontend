import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
    return (
        <div className="mx-4 lg:mx-44 py-20 xl:py-40">
            <h1 className="text-center  text-2xl md:text-3xl lg:Text-4xl mt-4 font-semibold bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent  ">
                Steps to remove background <br /> image in second{" "}
            </h1>
            <div className="flex items-center flex-wrap gap-4 mt-16 xl:mt-24 justify-center  ">
                <div className="flex items-start bg-white border border-slate-100 drop-shadow-2xl rounded-3xl p-7 pb-10 px-4 mt-20 gap-4 hover:scale-105 transition-all duration-700  ">
                    <img className="max-w-8" src={assets.upload_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium ">Upload Image</p>
                        <p className="text-sm text-neutral-500 mt-1  ">This is a demo, text will replace it later. <br /> this is a demo</p>
                    </div>
                </div>
                <div className="flex items-start bg-white border border-slate-100 drop-shadow-2xl rounded-3xl p-7 pb-10 px-4 mt-20 gap-4 hover:scale-105 transition-all duration-700  ">
                    <img className="max-w-8" src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium ">Remove Background</p>
                        <p className="text-sm text-neutral-500 mt-1  ">This is a demo, text will replace it later. <br /> this is a demo</p>
                    </div>
                </div>
                <div className="flex items-start bg-white border border-slate-100 drop-shadow-2xl rounded-3xl p-7 pb-10 px-4 mt-20 gap-4 hover:scale-105 transition-all duration-700  ">
                    <img className="max-w-8" src={assets.download_icon} alt="" />
                    <div>
                        <p className="text-xl font-medium ">Download Image</p>
                        <p className="text-sm text-neutral-500 mt-1  ">This is a demo, text will replace it later. <br /> this is a demo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
