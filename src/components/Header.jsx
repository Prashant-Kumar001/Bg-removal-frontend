import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Show, useAuth, UserButton, useClerk, useUser } from "@clerk/react";
import { RiLoader2Fill } from "react-icons/ri";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import { FaCoins } from "react-icons/fa";

const Header = () => {
  const { openSignIn } = useClerk();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { credit, loadCredit } = useUserContext();

  useEffect(() => {
    if (isSignedIn) {
      loadCredit();
    }
  }, [isSignedIn, loadCredit]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 lg:px-16">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
        </NavLink>

        {!isLoaded ? (
          <RiLoader2Fill className="animate-spin text-2xl text-gray-600" />
        ) : (
          <div className="flex items-center gap-2 sm:gap-3 ">
            <Show when="signed-in">
              <button className="flex items-center gap-2 bg-blue-50 px-4 sm:px-7 py-1.5 sm:py-2.5  rounded-full hover:scale-105 transition-all duration-700 ">
                <img src={assets.credit_icon} alt="" className="w-5" />
                <p className="z-10 text-gray-600 text-xs sm:text-sm font-medium ">
                  Credits {credit ?? 0}
                </p>
              </button>
              <p className="text-gray-600 max-sm:hidden ">Hi, {user?.firstName}</p>
              <UserButton afterSignOutUrl="/" />
            </Show>

            <Show when="signed-out">
              <button
                onClick={() => openSignIn({})}
                className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Get Started →
              </button>
            </Show>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
