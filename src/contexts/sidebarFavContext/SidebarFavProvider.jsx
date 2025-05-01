import { useRef, useState } from "react";
import { SidebarFavContext } from "./SidebarFavContext";

export default function SidebarFavProvider({ children }) {
  const [showSidebarFav, setShowSidebarFav] = useState(false);
  const favRef = useRef();

  function handleClickFav() {
    console.log("show!!!");
    setShowSidebarFav(!showSidebarFav);
  }
  return <SidebarFavContext.Provider value={{ showSidebarFav, setShowSidebarFav, favRef, handleClickFav }}>{children}</SidebarFavContext.Provider>;
}
