import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarCartProvider from "./contexts/sidebarCartContext/SidebarCartProvider.jsx";
import SidebarFavProvider from "./contexts/sidebarFavContext/SidebarFavProvider.jsx";
import CartProvider from "./contexts/cartContext/CartProvider.jsx";
import UserProvider from "./contexts/userContext/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <SidebarFavProvider>
          <SidebarCartProvider>
            <App />
          </SidebarCartProvider>
        </SidebarFavProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
