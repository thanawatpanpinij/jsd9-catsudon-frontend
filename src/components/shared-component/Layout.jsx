import React, { useContext } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import SidebarCart from "./sidebar-cart/SidebarCart.jsx";
import { SidebarCartContext } from "../../contexts/sidebarCartContext/SidebarCartContext.jsx";

export default function Layout() {
  const { showSidebarCart } = useContext(SidebarCartContext);
  return (
    <>
      <Header />
      <div className={`z-10 fixed inset-0 bg-[rgba(3,24,24,0.4)] ${showSidebarCart ? "visible opacity-100" : "invisible opacity-0"} transition duration-400`}></div>
      <SidebarCart />
      <Outlet />
      <Footer />
    </>
  );
}
