import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Show, useAuth, UserButton } from "@clerk/react";
import { useClerk } from "@clerk/react";
import { RiLoader2Fill } from "react-icons/ri";

const Header = () => {
  const { openSignIn } = useClerk();
  const { isLoaded } = useAuth();
  return (
    <header className=" flex justify-between items-center mx-4 py-3 lg:mx-44">
      <NavLink to="/">
        <img src={assets.logo} alt="" className="w-32 sm:44" />
      </NavLink>
      {!isLoaded ? (
        <RiLoader2Fill className="animate-spin " />
      ) : (
        <>
          <Show when="signed-in">
            <UserButton />
          </Show>

          <Show when="signed-out">
            <button
              onClick={() => openSignIn({})}
              className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full "
            >
              Get Started{" "}
              <img src={assets.arrow_icon} className="w-3 sm:w-4" alt="" />
            </button>
          </Show>
        </>
      )}
    </header>
  );
};

export default Header;
