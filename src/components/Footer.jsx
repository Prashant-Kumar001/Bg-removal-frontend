import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 px-4 mx-4 py-3 lg:mx-44">
      <img className="w-32" width={150}  src={assets.logo} alt="" />
      <p className="flex-1 border border-gray-100  pl-4 text-sm text-gray-500 max-sm:hidden ">Copyright @Prashant.dev | All rights reserved</p>
      <div className="flex gap-2">
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
