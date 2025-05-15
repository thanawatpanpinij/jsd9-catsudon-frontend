import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { SidebarCartContext } from "../../contexts/sidebarCartContext/SidebarCartContext.jsx";
import { SidebarFavContext } from "../../contexts/sidebarFavContext/SidebarFavContext.jsx";
import SidebarCart from "./sidebar/sidebar-cart/SidebarCart.jsx";
import SidebarFav from "./sidebar/sidebar-fav/SidebarFav.jsx";
import ScrollToTop_CloseSidebar from "./ScrollToTop_CloseSidebar.jsx";
import SplashScreen from "../spash-screen/SplashScreen.jsx";

export default function Layout() {
  const { showSidebarCart } = useContext(SidebarCartContext);
  const { showSidebarFav } = useContext(SidebarFavContext);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");

    if (!splashShown) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <ScrollToTop_CloseSidebar />
      <Header />
      <div
        className={`z-10 fixed inset-0 ${
          showSidebarCart || showSidebarFav
            ? "visible opacity-100"
            : "invisible opacity-0"
        } bg-[rgba(3,24,24,0.4)] transition duration-400`}
      ></div>
      <SidebarCart />
      <SidebarFav />
      <Outlet />
      <Footer />
    </>
  );
}
