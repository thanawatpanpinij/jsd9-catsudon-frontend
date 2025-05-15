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
      // const item = cart.find((item) => item.menuId === menuId);

      // if (item) {
      //   console.log(item);
      //   console.log(item.quantity);
      // }

      setCart(response.data.cart);
      getCart();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateQuantity(itemId, quantity) {
    try {
      setIsLoading(true);
      const response = await axiosInstance.patch(
        `/users/me/cart/item/${itemId}`,
        { quantity }
      );
      setCart(response.data.cart);
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
      setCart(response.data.cart);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function clearCart() {
    if (!cart || cart.length <= 0) return;

    try {
      setIsLoading(true);
      const response = await axiosInstance.delete("/users/me/cart");
      setCart(response.data.cart);
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
        updateQuantity,
        deleteCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
