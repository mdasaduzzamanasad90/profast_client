import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";


// const aosElements = document.querySelectorAll('[data-aos]');

// aosElements.forEach(el => {
//   // element এর offset নির্ধারণ
//   const offset = window.innerHeight - 30; // screen height - 50px
//   el.setAttribute('data-aos-offset', offset);
// });

AOS.init({
  duration: 1000,
  delay: 500,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  offset: 10,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="md:max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
