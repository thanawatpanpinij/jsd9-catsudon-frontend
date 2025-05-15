import React, { useState } from "react";
import { AddressContext } from "./AddressContext";
import axiosInstance from "../../utils/axiosInstance";

export default function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);
  const getAddress = async () => {
    try {
      const response = await axiosInstance.get("/users/me/addresses");
      return response.data;
    } catch (error) {
      console.error("Error fetching addresses:", error);
      throw error;
    }
  };

  return (
    <AddressContext.Provider value={{ addresses, setAddresses, getAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
