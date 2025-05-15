import { useContext, useEffect, useState } from "react";
import { menuCardContext } from "../menuCardContext/menuCardContext";
import axiosInstance from "../../utils/axiosInstance";

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
    <menuCardContext.Provider value={{ menus }}>
      {children}
    </menuCardContext.Provider>
  );
}

export const useMenuCardContext = () => useContext(menuCardContext);
