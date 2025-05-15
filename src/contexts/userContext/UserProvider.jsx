import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axiosInstance from "../../utils/axiosInstance";

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");

  async function getUserInfo() {
    try {
      const response = await axiosInstance.get("/auth/user-info");
      setUser(response.data.user);
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, message, setMessage }}>
      {children}
    </UserContext.Provider>
  );
}
