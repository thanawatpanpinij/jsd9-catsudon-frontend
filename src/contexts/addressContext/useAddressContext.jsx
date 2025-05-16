import { useContext } from "react";
import { AddressContext } from "./AddressContext";

const useAddressContext = () => useContext(AddressContext);

export default useAddressContext;
