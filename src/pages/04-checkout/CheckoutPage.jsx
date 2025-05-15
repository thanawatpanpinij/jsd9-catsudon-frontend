import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCreditCard,
  faMobileAlt,
  faQrcode,
  faMapMarkerAlt,
  faPlusCircle,
  faTrashAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div
      key={item.id}
      className="flex justify-between items-center py-2 border-b border-gray-200"
    >
      <div className="flex items-center gap-3">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-md"
          />
        )}
        <div>
          <div className="font-semibold text-sm">{item.name}</div>
          <div className="text-green-500 text-sm">{item.price} THB</div>
          <div className="text-gray-500 text-xs">{item.unit || "1 box"}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200"
          >
            -
          </button>
          <span className="px-2 py-1 text-sm">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-600"
        >
          <FontAwesomeIcon icon={faTrashAlt} size="sm" />
        </button>
      </div>
    </div>
  );
}

function PaymentMethodOption({ method, paymentMethod, setPaymentMethod }) {
  const getIcon = (method) => {
    switch (method) {
      case "cash":
        return faMoneyBillWave;
      case "credit":
        return faCreditCard;
      case "mobile":
        return faMobileAlt;
      case "qr":
        return faQrcode;
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
          <FontAwesomeIcon
            icon={getIcon(method)}
            className="mr-2 text-gray-600"
            size="sm"
          />
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
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const [appliedCodes, setAppliedCodes] = useState([]);

  const validCoupons = {
    cal01: 0.1,
    cal02: 0.2,
    cal03: 0.3,
  };

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Avocado & Egg Bowl",
      price: 120,
      quantity: 2,
      image: "avocado_bowl.jpg",
    },
    {
      id: 2,
      name: "Banana Pancakes",
      price: 85,
      quantity: 1,
      image: "banana_pancakes.jpg",
    },
  ]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = appliedCodes.reduce(
    (sum, code) => sum + subtotal * validCoupons[code],
    0
  );
  const total = subtotal - discountAmount;
  const taxAmount = 0;
  const finalTotal = total + taxAmount;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAllItems = () => {
    setCart([]);
  };

  const applyDiscount = () => {
    const code = discountCodeInput.toLowerCase();
    if (validCoupons.hasOwnProperty(code) && !appliedCodes.includes(code)) {
      setAppliedCodes((prev) => [...prev, code]);
      setDiscountCodeInput("");
    }
  };

  const removeDiscountCode = (codeToRemove) => {
    setAppliedCodes((prev) => prev.filter((code) => code !== codeToRemove));
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
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className="text-gray-400 mb-2"
                />
                <p className="text-xs text-gray-600 mb-4">
                  Add an address or select a saved address
                </p>
                <Link
                  to={"/edit-address"}
                  className="w-full py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 cursor-pointer transition"
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                  Add new locations
                </Link>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-semibold">Choose how to pay</h3>
                  <button className="text-xs text-red-500 hover:text-red-600 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="mr-1 align-middle"
                      size="xs"
                    />
                    Add new method
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
              <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center mr-2">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="sm"
                  color="#6b7280"
                />
              </div>
              <h3 className="text-sm font-semibold">
                Check your menu before checkout
              </h3>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center text-sm text-gray-700 font-semibold mb-2">
                <span>Cart ({totalItems} items)</span>
                <button
                  onClick={removeAllItems}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="mr-1"
                    size="xs"
                  />
                  Remove all
                </button>
              </div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-sm font-semibold mb-1">Discount Code</h3>
            <p className="text-xs text-gray-600 mb-2">
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
                className="w-24 py-3 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 cursor-pointer"
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
                    className="text-red-500 text-xs hover:text-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-sm font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
              <span>Subtotal ({totalItems} items)</span>
              <span>{subtotal} THB</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-sm text-red-600 mb-2">
                <span>Discount:</span>
                <span>-{discountAmount} THB</span>
              </div>
            )}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Tax:</span>
              <span>0 THB</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-base font-semibold text-gray-900 mt-3 mb-4">
              <span>Total:</span>
              <span>{finalTotal} THB</span>
            </div>
            <button
              className={`w-full py-3 rounded-full text-sm font-semibold transition ${
                !address || cart.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              }`}
              disabled={!address || cart.length === 0}
            >
              Place Order
            </button>
            {(!address || cart.length === 0) && (
              <p className="text-xs text-red-500 mt-2">
                Please add an address and make sure your cart is not empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
