import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ClerkProvider } from "@clerk/react";
import UserContextProvider from "./context/User.context.jsx";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <ScrollToTop />
      <ClerkProvider>
        <UserContextProvider>
          <App />
          <Toaster />
        </UserContextProvider>
      </ClerkProvider>
    </BrowserRouter>
);
