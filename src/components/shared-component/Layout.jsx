import React, { useContext } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { SidebarCartContext } from "../../contexts/sidebarCartContext/SidebarCartContext.jsx";
import { SidebarFavContext } from "../../contexts/sidebarFavContext/SidebarFavContext.jsx";
import SidebarCart from "./sidebar/sidebar-cart/SidebarCart.jsx";
import SidebarFav from "./sidebar/sidebar-fav/SidebarFav.jsx";
import ScrollToTop_CloseSidebar from "./ScrollToTop_CloseSidebar.jsx";

export default function Layout() {
  const { showSidebarCart } = useContext(SidebarCartContext);
  const { showSidebarFav } = useContext(SidebarFavContext);
  return (
    <>
      <ScrollToTop_CloseSidebar />
      <Header />
      <div className={`z-10 fixed inset-0 ${showSidebarCart || showSidebarFav ? "visible opacity-100" : "invisible opacity-0"} bg-[rgba(3,24,24,0.4)] transition duration-400`}></div>
      <SidebarCart />
      <SidebarFav />
      <Outlet />
      <Footer />
    </>
  );
}
