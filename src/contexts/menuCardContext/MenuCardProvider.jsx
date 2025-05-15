import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance.js";
import { MenuCardContext } from "./MenuCardContext.jsx";

export default function MenuCardProvider({ children }) {
  const [menus, setMenus] = useState([]);

  const getMenus = async () => {
    try {
      const res = await axiosInstance.get("/menus");
      setMenus(res.data.menus);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <MenuCardContext.Provider value={{ menus }}>
      {children}
    </MenuCardContext.Provider>
  );
}
