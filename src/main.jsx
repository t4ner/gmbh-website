import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

// AOS'u başlat
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
