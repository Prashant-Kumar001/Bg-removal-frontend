import { assets } from "../assets/assets";
import ImageCompare from "./ImageCompare";

const Slider = () => {
  return (
    <div className="pb-20 mb:py-20 mx-2 ">
      <h1 className="text-center mb-12 sm:mb-20 not-visited:text-2xl md:text-3xl lg:Text-4xl mt-4 font-semibold bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent ">
        Remove Background with high <br /> Quality and Accuracy{" "}
      </h1>
      <ImageCompare assets={assets} />
    </div>
  );
};

export default Slider;
