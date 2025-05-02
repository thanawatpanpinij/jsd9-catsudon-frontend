import { useContext, useEffect } from "react";
import { SidebarCartContext } from "../../contexts/sidebarCartContext/SidebarCartContext";
import { SidebarFavContext } from "../../contexts/sidebarFavContext/SidebarFavContext";
import { useLocation } from "react-router";

export default function ScrollToTop_CloseSidebar() {
  const { pathname } = useLocation();
  const { setShowSidebarCart } = useContext(SidebarCartContext);
  const { setShowSidebarFav } = useContext(SidebarFavContext);
  useEffect(() => {
    setShowSidebarCart(false);
    setShowSidebarFav(false);
    window.scrollTo(0, 0);
  }, [pathname]);
}
