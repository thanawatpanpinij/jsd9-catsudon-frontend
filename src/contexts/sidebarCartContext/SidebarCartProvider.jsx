import { useRef, useState } from "react";
import { SidebarCartContext } from "./SidebarCartContext";

export default function SidebarCartProvider({ children }) {
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const cartRef = useRef();
  const mobileCartRef = useRef();

  function handleClickCart() {
    setShowSidebarCart(!showSidebarCart);
  }

  return (
    <SidebarCartContext.Provider
      value={{
        showSidebarCart,
        setShowSidebarCart,
        cartRef,
        mobileCartRef,
        handleClickCart,
      }}
    >
      {children}
    </SidebarCartContext.Provider>
  );
}
