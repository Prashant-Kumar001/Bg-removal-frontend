import { createContext, useCallback, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loadCredit = useCallback(async () => {
    try {
      const token = await getToken();
      const response = await fetch(`${backendUrl}/api/v1/user/credit`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!data?.success) {
        throw new Error(data?.message);
      }

      setCredit(data?.credits);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }, [getToken, backendUrl]);

  const removeBg = useCallback(
    async (image) => {
      if (!isSignedIn) {
        toast.error("Please sign in first.");
        openSignIn();
        return;
      }

      try {
        setImage(image);
        setResultImage(null);
        navigate("/result");
        setLoading(true);

        const token = await getToken();

        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch(`${backendUrl}/api/v1/user/remove-bg`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to remove background");
        }

        console.log(response);

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl)

        toast.success("Background removed successfully");

        setResultImage(imageUrl);
      } catch (error) {
        console.log(error);
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [backendUrl, getToken, isSignedIn, navigate, openSignIn],
  );

  return (
    <UserContext.Provider
      value={{
        credit,
        loadCredit,
        setCredit,
        backendUrl,
        image,
        setImage,
        removeBg,
        resultImage,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
