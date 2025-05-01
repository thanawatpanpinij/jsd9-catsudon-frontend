import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { SidebarCartContext } from "../../contexts/sidebarCartContext/SidebarCartContext";
import { SidebarFavContext } from "../../contexts/sidebarFavContext/SidebarFavContext";

export default function ScrollToTop_CloseSidebar() {
  const { setShowSidebarCart } = useContext(SidebarCartContext);
  const { setShowSidebarFav } = useContext(SidebarFavContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowSidebarCart(false);
    setShowSidebarFav(false);
    window.scrollTo(0, 0);
  }, [pathname]);
}
