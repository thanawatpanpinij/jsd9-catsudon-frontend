import { useContext } from "react";
import { SidebarCartContext } from "./SidebarCartContext";

const useSidebarCartContext = () => useContext(SidebarCartContext);

export default useSidebarCartContext;
