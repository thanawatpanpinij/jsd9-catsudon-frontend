import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarCartProvider from "./contexts/sidebarCartContext/SidebarCartProvider.jsx";
import SidebarFavProvider from "./contexts/sidebarFavContext/SidebarFavProvider.jsx";
import MenuCardProvider from "./contexts/menuCardContext/menuCardProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuCardProvider>
      <SidebarFavProvider>
        <SidebarCartProvider>
          <App />
        </SidebarCartProvider>
      </SidebarFavProvider>
    </MenuCardProvider>
  </StrictMode>
);
