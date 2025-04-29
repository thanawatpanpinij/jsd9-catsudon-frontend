import React, { useRef, useState } from "react";
import { SidebarCartContext } from "./SidebarCartContext.jsx";

export default function SidebarCartProvider({ children }) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [tab, setTab] = useState("");
  const cartRef = useRef();
  const favRef = useRef();
  const sidebarCartRef = useRef();

  function handleClickCart() {
    if (tab === "My Favourite") {
      setTab("My Cart");
      return setShowSidebarCart(true);
    }
    setTab("My Cart");
    setShowSidebarCart(!showSidebarCart);
  }

  function handleClickFavourite() {
    if (tab === "My Cart") {
      setTab("My Favourite");
      return setShowSidebarCart(true);
    }
    setTab("My Favourite");
    setShowSidebarCart(!showSidebarCart);
  }

  return (
    <SidebarCartContext.Provider value={{ showSidebarCart, setShowSidebarCart, tab, setTab, cartRef, favRef, sidebarCartRef, handleClickCart, handleClickFavourite }}>
      {children}
    </SidebarCartContext.Provider>
  );
}
