import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarCartProvider from "./contexts/sidebarCartContext/SidebarCartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarCartProvider>
      <App />
    </SidebarCartProvider>
  </StrictMode>
);
