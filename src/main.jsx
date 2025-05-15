import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SidebarCartProvider from "./contexts/sidebarCartContext/SidebarCartProvider.jsx";
import SidebarFavProvider from "./contexts/sidebarFavContext/SidebarFavProvider.jsx";
import MenuCardProvider from "./contexts/menuCardContext/menuCardProvider.jsx";
import CartProvider from "./contexts/cartContext/CartProvider.jsx";
import UserProvider from "./contexts/userContext/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <MenuCardProvider>
          <SidebarFavProvider>
            <SidebarCartProvider>
              <App />
            </SidebarCartProvider>
          </SidebarFavProvider>
        </MenuCardProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
