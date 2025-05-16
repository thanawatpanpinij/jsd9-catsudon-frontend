import { useEffect, useState } from "react";
import { Link } from "react-router";
import useCartContext from "../../contexts/cartContext/useCartContext";
import useDebounce from "../../hooks/useDebounce";
import { GoTrash } from "react-icons/go";
import { FaPlus, FaMobile, FaPlusCircle, FaShoppingCart } from "react-icons/fa";
import { MdAddHome } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { IoQrCode } from "react-icons/io5";

function CartItem({ item, updateQuantity, deleteCartItem }) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const debouncedQuantity = useDebounce(itemQuantity, 500);

  useEffect(() => {
    if (debouncedQuantity !== item.quantity) {
      updateQuantity(item._id, debouncedQuantity);
    }
  }, [debouncedQuantity]);

  return (
    <article className="flex justify-between items-center py-4 border-b border-gray-200">
      <section className="flex gap-8">
        <div className="overflow-hidden w-[20%] h-fit rounded-4xl">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]"
          />
        </div>
        <section className="flex flex-col justify-between">
          <div>
            <p className="mb-2 text-normal-size font-semibold">{item.name}</p>
            <p className="text-gray-500">{item.servingSize}</p>
          </div>
          <p className="text-primary text-medium-size font-semibold">
            {item.price} THB
          </p>
        </section>
      </section>
      <section className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setItemQuantity((prev) => Math.max(prev - 1, 0))}
            className="cursor-pointer bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200"
          >
            -
          </button>
          <span className="px-2 py-1 text-sm">{itemQuantity}</span>
          <button
            onClick={() => setItemQuantity((prev) => prev + 1)}
            className="cursor-pointer bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <button
          aria-label="Remove item from cart"
          onClick={() => deleteCartItem(item._id)}
          className="cursor-pointer text-secondary hover:text-red-600"
        >
          <GoTrash className="text-xl" />
        </button>
      </section>
    </article>
  );
}

function PaymentMethodOption({ method, paymentMethod, setPaymentMethod }) {
  const getIcon = (method) => {
    switch (method) {
      case "cash":
        return <BsCashCoin className="mr-2" />;
      case "credit":
        return <FaCreditCard className="mr-2" />;
      case "mobile":
        return <FaMobile className="mr-2" />;
      case "qr":
        return <IoQrCode className="mr-2" />;
      default:
        return null;
    }
  };

  const getDisplayName = (method) => {
    switch (method) {
      case "cash":
        return "Cash";
      case "credit":
        return "Credit card";
      case "mobile":
        return "Mobile Banking";
      case "qr":
        return "QR Code";
      default:
        return "";
    }
  };

  return (
    <label
      key={method}
      className={`flex items-center p-2 rounded-md cursor-pointer ${
        paymentMethod === method ? "bg-gray-50" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          {getIcon(method)}
          <span className="text-sm text-gray-700">
            {getDisplayName(method)}
          </span>
        </div>
        <input
          type="radio"
          name="payment"
          value={method}
          checked={paymentMethod === method}
          onChange={() => setPaymentMethod(method)}
          className="form-radio h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300"
        />
      </div>
    </label>
  );
}

export default function CheckoutPage() {
  const { cart, setCart } = useCartContext();
  const { updateQuantity, deleteCartItem, clearCart } = useCartContext();
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const [appliedCodes, setAppliedCodes] = useState([]);

  const validCoupons = {
    cal01: 0.1,
    cal02: 0.2,
    cal03: 0.3,
  };

  const subtotal =
    cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const discountAmount = appliedCodes.reduce(
    (sum, code) => sum + subtotal * validCoupons[code],
    0
  );
  const total = subtotal - discountAmount;
  const taxAmount = 0;
  const finalTotal = total + taxAmount;
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const applyDiscount = () => {
    const code = discountCodeInput.toLowerCase();
    if (validCoupons.hasOwnProperty(code) && !appliedCodes.includes(code)) {
      setAppliedCodes((prev) => [...prev, code]);
      setDiscountCodeInput("");
    } else {
      console.log("Invalid or already applied discount code");
    }
  };

  const removeDiscountCode = (codeToRemove) => {
    setAppliedCodes((prev) => prev.filter((code) => code !== codeToRemove));
  };

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderError, setOrderError] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const handlePlaceOrder = async () => {
    if (!address || cart.length === 0 || isPlacingOrder) {
      console.log(
        "Cannot place order: Missing address, empty cart, or already processing."
      );
      return;
    }

    setIsPlacingOrder(true);
    setOrderError(null);
    setOrderSuccess(null);

    try {
      const orderPayload = {
        userId: "STATIC_USER_ID_EXAMPLE",

        items: cart.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),

        totalAmount: finalTotal,
        shippingAddress: address,
        paymentMethod: paymentMethod,
        discountCodes: appliedCodes,
      };
    } catch (err) {
      console.error(
        "Error placing order:",
        err.response ? err.response.data : err.message
      );

      if (err.response) {
        setOrderError(err.response.data);
      } else if (err.request) {
        setOrderError({
          message: "No response from server. Please try again later.",
        });
      } else {
        setOrderError({
          message: err.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setIsPlacingOrder(false);
    }
  };

  useEffect(() => {
    document.title = `CalNoy | Checkout`;
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto mb-16 px-8">
      <h1 className="text-2xl font-semibold mt-14 mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 p-5">
              <div className="border bg-[#F8F8F8] border-gray-100 rounded-lg p-6 flex-1 text-center flex flex-col items-center justify-between">
                <h3 className="text-sm font-semibold mb-3">
                  {address ? "Delivery Address" : "No address saved"}
                </h3>
                <MdAddHome size={40} color="var(--color-third)" />
                <p className="text-xs text-grey mb-4">
                  Add an address or select a saved address
                </p>
                <Link
                  to={"/edit-address"}
                  className="flex gap-2 justify-center items-center w-full py-2 bg-primary text-white rounded-full font-semibold hover:bg-green-700 cursor-pointer transition"
                >
                  <FaPlusCircle />
                  Add new locations
                </Link>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold">Choose how to pay</h3>
                  <button
                    aria-label="Add new payment method"
                    className="text-xs text-grey cursor-pointer"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="space-y-2">
                  {["cash", "credit", "mobile", "qr"].map((method) => (
                    <PaymentMethodOption
                      key={method}
                      method={method}
                      paymentMethod={paymentMethod}
                      setPaymentMethod={setPaymentMethod}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center mb-3">
              <div className="rounded-full bg-bright-grey h-8 w-8 flex items-center justify-center mr-2">
                <FaShoppingCart />
              </div>
              <h3 className="text-grey font-semibold">
                Check your menu before checkout
              </h3>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center font-semibold mb-2">
                <div>
                  <span className="text-medium-size text-third">Cart</span>{" "}
                  <span className="text-small-size">
                    ({totalItems} {cart?.length > 1 ? "items" : "item"})
                  </span>
                </div>
                <button
                  onClick={clearCart}
                  className="text-secondary hover:text-red-600 cursor-pointer"
                >
                  Remove all
                </button>
              </div>
              {cart?.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  updateQuantity={updateQuantity}
                  deleteCartItem={deleteCartItem}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-medium-size text-third font-semibold mb-1">
              Discount Code
            </h3>
            <p className="text-xs text-grey mb-2">
              Have a coupon? Apply it below.
            </p>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={discountCodeInput}
                onChange={(e) => setDiscountCodeInput(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-full text-sm"
                placeholder="Enter discount code"
              />
              <button
                onClick={applyDiscount}
                className="w-24 py-3 bg-primary text-white text-sm rounded-full hover:bg-green-700 cursor-pointer"
              >
                Apply
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {appliedCodes.map((code, index) => (
                <div
                  key={index}
                  className="flex items-center bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  <span className="mr-2">{code.toUpperCase()}</span>
                  <button
                    onClick={() => removeDiscountCode(code)}
                    className="text-secondary text-xs hover:text-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-medium-size text-thrid font-semibold mb-4">
              Order Summary
            </h3>
            <div className="flex justify-between text-sm font-semibold text-grey mb-2">
              <span>Subtotal ({totalItems} items)</span>
              <span>{subtotal} THB</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-sm text-red-600 mb-2">
                <span>Discount:</span>
                <span>-{discountAmount} THB</span>
              </div>
            )}
            <div className="flex justify-between text-sm text-grey mb-2">
              <span>Tax:</span>
              <span>0 THB</span>
            </div>
            <div className="flex justify-between text-sm text-grey mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-third mt-3 mb-4">
              <span>Total:</span>
              <span>{finalTotal} THB</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className={`w-full py-3 rounded-full text-sm font-semibold transition ${
                !address || cart.length === 0 || isPlacingOrder
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-green-700 cursor-pointer"
              }`}
              disabled={!address || cart.length === 0 || isPlacingOrder}
            >
              {isPlacingOrder ? "Processing Order..." : "Place Order"}
            </button>
            {isPlacingOrder && (
              <p className="text-center text-blue-600 mt-2">
                Placing your order...
              </p>
            )}
            {orderError && (
              <div className="text-secondary mt-2">
                <p>Error placing order:</p>
                <p>{orderError.message || JSON.stringify(orderError)}</p>
              </div>
            )}
            {orderSuccess && (
              <div className="text-green-600 mt-2">
                <p>Order placed successfully!</p>
                <p>Order ID: {orderSuccess._id}</p>
              </div>
            )}
            {(!address || cart.length === 0) && !isPlacingOrder && (
              <p className="text-xs text-secondary mt-2">
                Please add an address and make sure your cart is not empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
