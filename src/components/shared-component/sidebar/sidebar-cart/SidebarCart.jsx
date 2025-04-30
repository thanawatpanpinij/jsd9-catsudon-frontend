import "../sidebar.css";
import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router";
import CartItem from "./CartItem.jsx";
import { SidebarCartContext } from "../../../../contexts/sidebarCartContext/SidebarCartContext.jsx";

export default function SidebarCart() {
  const sidebarCartRef = useRef();
  const { showSidebarCart, setShowSidebarCart, cartRef } = useContext(SidebarCartContext);

  useEffect(() => {
    function handleClickOutside(e) {
      const target = e.target;
      if (!cartRef.current.contains(target) && !sidebarCartRef.current.contains(target)) {
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
      className={`z-200 fixed top-[100.44px] ${
        showSidebarCart ? "opacity-100 right-0 animate-[slide-in_0.4s_cubic-bezier(0.4,0,0.2,1)]" : "opacity-0 right-[-483px] animate-[slide-out_0.4s_cubic-bezier(0.4,0,0.2,1)]"
      } bottom-0 flex flex-col justify-between w-[min(100%,483px)] p-8 pt-0 bg-white transition-opacity duration-200`}
    >
      <section className="flex flex-col overflow-hidden">
        <div className="flex justify-between items-end text-grey font-semibold">
          <p className={`text-third text-medium-size transition-colors duration-200`}>My cart</p>
          <p className={`transition-colors duration-200`}>0 item</p>
        </div>
        <section className="overflow-y-auto grid gap-4 py-8">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
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
