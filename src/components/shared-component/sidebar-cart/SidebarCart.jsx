import "./sidebarCart.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import MyCartLists from "./MyCartLists";
import { SidebarCartContext } from "../../../contexts/sidebarCartContext/SidebarCartContext";
import MyFavouriteLists from "./MyFavouriteLists";

export default function SidebarCart() {
  const { showSidebarCart, setShowSidebarCart, tab, setTab, cartRef, favRef, sidebarCartRef } = useContext(SidebarCartContext);

  useEffect(() => {
    function handleClickOutside(e) {
      const target = e.target;
      if (!cartRef.current.contains(target) && !favRef.current.contains(target) && !sidebarCartRef.current.contains(target)) {
        setShowSidebarCart(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={sidebarCartRef}
      className={`z-200 fixed top-[100.44px] bottom-0 ${
        showSidebarCart ? "right-0 animate-[slide-in_0.4s_cubic-bezier(0.4,0,0.2,1)]" : "right-[-483px] animate-[slide-out_0.4s_cubic-bezier(0.4,0,0.2,1)]"
      } flex flex-col justify-between w-[min(100%,483px)] p-8 pt-0 bg-white 969px:top-[157.44px]`}
    >
      <section className="flex flex-col overflow-hidden">
        <div className="grid grid-cols-2 text-center text-grey text-medium-size font-semibold">
          <p className={`cursor-pointer ${tab === "My Cart" ? "text-primary" : ""} border-r-2 border-bright-grey transition-colors duration-200`} onClick={() => setTab("My Cart")}>
            My Cart
          </p>
          <p className={`cursor-pointer ${tab === "My Favourite" ? "text-primary" : ""} transition-colors duration-200`} onClick={() => setTab("My Favourite")}>
            My Favorite
          </p>
        </div>
        <section className="overflow-y-auto grid gap-4 py-8">{tab === "My Cart" ? <MyCartLists /> : <MyFavouriteLists />}</section>
      </section>
      <section>
        <div className="grid gap-4 mb-8 pt-8 text-third border-t-2 border-bright-grey">
          <div className="flex justify-between">
            <p className="text-grey">Promocode</p>
            <p>-</p>
          </div>
          <div className="flex justify-between">
            <p className="text-grey">Discount</p>
            <p>-</p>
          </div>
          <div className="flex justify-between">
            <p className="text-grey">Delivery</p>
            <p>FREE</p>
          </div>
          <div className="flex justify-between text-medium-size font-semibold">
            <p>Total</p>
            <p>205 THB</p>
          </div>
        </div>
        <Link to="/checkout">
          <button className="cursor-pointer w-full px-8 py-3 text-normal-size text-white font-medium bg-primary rounded-full transition-colors duration-200 hover:bg-secondary">Confirm Order</button>
        </Link>
      </section>
    </aside>
  );
}
