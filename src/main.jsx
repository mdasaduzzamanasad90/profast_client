import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Context/AuthProvider.jsx";

AOS.init({
  duration: 1000,
  delay: 500,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  offset: 5,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
