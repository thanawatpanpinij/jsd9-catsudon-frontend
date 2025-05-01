import { useRef, useState } from "react";
import { SidebarFavContext } from "./SidebarFavContext";

export default function SidebarFavProvider({ children }) {
  const [showSidebarFav, setShowSidebarFav] = useState(false);
  const favRef = useRef();
  const mobileFavRef = useRef();

  function handleClickFav() {
    setShowSidebarFav(!showSidebarFav);
  }
  return <SidebarFavContext.Provider value={{ showSidebarFav, setShowSidebarFav, favRef, mobileFavRef, handleClickFav }}>{children}</SidebarFavContext.Provider>;
}
