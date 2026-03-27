import { useUser } from "@clerk/react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  const {  isSignedIn } = useUser();
  

  return (
    <div>
      <Hero isSignedIn={isSignedIn} />
      <Steps />
      <Slider />
      <Testimonials />
      <Upload isSignedIn={isSignedIn} />
    </div>
  );
};

export default Home;
