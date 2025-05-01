import React, { useRef, useState } from "react";
import { SidebarCartContext } from "./SidebarCartContext";

export default function SidebarCartProvider({ children }) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const cartRef = useRef();

  function handleClickCart() {
    setShowSidebarCart(!showSidebarCart);
  }

  return <SidebarCartContext.Provider value={{ showSidebarCart, setShowSidebarCart, cartRef, handleClickCart }}>{children}</SidebarCartContext.Provider>;
}
