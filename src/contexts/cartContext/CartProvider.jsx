import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axiosInstance from "../../utils/axiosInstance";
import useUserContext from "../userContext/useUserContext";

export default function CartProvider({ children }) {
  const { user } = useUserContext();
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  async function getCart() {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/users/me/cart");
      setCart(response.data.cart);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCart();
  }, [user]);

  async function addToCart(menuId) {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(`/users/me/cart/${menuId}`);
      setCart([...cart, response.item]);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateCartItem(itemId, quantity) {
    try {
      setIsLoading(true);
      await axiosInstance.patch(`/users/me/cart/item/${itemId}`, { quantity });
      getCart();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCartItem(itemId) {
    try {
      setIsLoading(true);
      const response = await axiosInstance.delete(
        `/users/me/cart/item/${itemId}`
      );
      setCart(response.cart);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function clearCart() {
    try {
      setIsLoading(true);
      const response = await axiosInstance.delete("/users/me/cart");
      setMessage(response.message);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        message,
        isLoading,
        getCart,
        addToCart,
        updateCartItem,
        deleteCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
