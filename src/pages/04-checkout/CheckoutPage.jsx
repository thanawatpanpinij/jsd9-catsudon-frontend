/*import React from "react";

export default function CheckoutPage() {
  return <div>Checkout</div>;
} */

  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faMoneyBillWave, faCreditCard, faMobileAlt, faQrcode, faMapMarkerAlt, faPlusCircle, faTrashAlt, faShoppingCart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
  
  // Component ย่อยสำหรับแสดงแต่ละรายการในรถเข็น
  function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />}
          <div>
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-green-500 text-sm">{item.price} THB</div>
            <div className="text-gray-500 text-xs">{item.unit || '1 box'}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200 transition duration-200">-</button>
            <span className="px-2 py-1 text-sm">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-100 text-gray-700 px-2 py-1 hover:bg-gray-200 transition duration-200">+</button>
          </div>
          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600 transition duration-200">
            <FontAwesomeIcon icon={faTrashAlt} size="sm" />
          </button>
        </div>
      </div>
    );
  }
  
  // Component ย่อยสำหรับแสดงตัวเลือกวิธีการชำระเงิน
  function PaymentMethodOption({ method, paymentMethod, setPaymentMethod }) {
    const getIcon = (method) => {
      switch (method) {
        case 'cash': return faMoneyBillWave;
        case 'credit': return faCreditCard;
        case 'mobile': return faMobileAlt;
        case 'qr': return faQrcode;
        default: null;
      }
    };
  
    const getDisplayName = (method) => {
      switch (method) {
        case 'cash': return 'Cash';
        case 'credit': return 'Credit card';
        case 'mobile': return 'Mobile Banking';
        case 'qr': return 'QR Code';
        default: '';
      }
    };
  
    return (
      <label key={method} className={`flex items-center p-2 rounded-md cursor-pointer ${paymentMethod === method ? 'bg-gray-50' : 'hover:bg-gray-50'}`}>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            {getIcon(method) && <FontAwesomeIcon icon={getIcon(method)} className="mr-2 text-gray-600" size="sm" />}
            <span className="text-sm text-gray-700 align-middle">{getDisplayName(method)}</span>
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
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [discountCodeInput, setDiscountCodeInput] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountAmount, setDiscountAmount] = useState(0);
    const availableCoupon = 'PK20%';
    const [cart, setCart] = useState([
      { id: 1, name: 'Avocado & Egg Bowl', price: 120, quantity: 2, image: 'avocado_bowl.jpg' },
      { id: 2, name: 'Banana Pancakes', price: 85, quantity: 1, image: 'banana_pancakes.jpg' }
    ]);
  
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = subtotal - discountAmount;
    const taxRate = 0; // สมมติไม่มีภาษี
    const taxAmount = subtotal * taxRate;
    const finalTotal = total + taxAmount;
  
    const updateQuantity = (id, change) => {
      setCart(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
      );
    };
  
    const removeItem = id => {
      setCart(prev => prev.filter(item => item.id !== id));
    };
  
    const removeAllItems = () => {
      setCart([]);
    };
  
    const applyDiscount = () => {
      if (discountCodeInput.toUpperCase() === availableCoupon.toUpperCase()) {
        setDiscountApplied(true);
        setDiscountAmount(subtotal * 0.20); // ลด 20% ตามโค้ด 'PK20%'
      } else {
        setDiscountApplied(false);
        setDiscountAmount(0);
      }
    };
  
    const applyAvailableCoupon = () => {
      setDiscountCodeInput(availableCoupon);
      setDiscountApplied(true);
      setDiscountAmount(subtotal * 0.20); // ลด 20% ตามโค้ด 'PK20%'
    };
  
    return (
      <div className="mx-auto font-sans p-5">
        <h1 className="text-2xl font-semibold mb-5">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex flex-col lg:flex-row gap-4 p-5">
                <div className="border bg-[#F8F8F8] border-gray-100 rounded-lg p-4 flex-1">
                  <h3 className="text-sm text-center font-semibold mb-3">
                    {address ? 'Delivery Address' : 'No address saved'}
                  </h3>
                  <div className="flex flex-col items-center text-center mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#a0aec0" className="mb-2" />
                    <p className="text-xs text-gray-600 mb-2">Add an address or select a saved address</p>
                  </div>
                  <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 font-semibold text-sm">
                    <FontAwesomeIcon icon={faPlusCircle} className="mr-1" />
                    Add new locations
                  </button>
                </div>
  
                <div className="border border-gray-100 rounded-lg p-4 flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-semibold">Choose how to pay</h3>
                    <button className="text-xs text-red-500 hover:text-red-600 transition duration-200">
                      <FontAwesomeIcon icon={faPlusCircle} className="mr-1 align-middle" size="xs" />
                      <span className="align-middle">Add new method</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {['cash', 'credit', 'mobile', 'qr'].map(method => (
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
                  <FontAwesomeIcon icon={faShoppingCart} size="sm" color="#6b7280" />
                </div>
                <h3 className="text-sm font-semibold">Check your menu before checkout</h3>
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center text-sm text-gray-700 font-semibold mb-2">
                  <span>Cart ({totalItems} items)</span>
                  <button onClick={removeAllItems} className="text-red-500 hover:text-red-600 transition duration-200">
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-1" size="xs" />
                    Remove all
                  </button>
                </div>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-sm font-semibold mb-3">Discount Code</h3>
              <label htmlFor="discountCode" className="block text-gray-700 text-xs font-bold mb-1">
                Have a Coupon?
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="discountCode"
                  value={discountCodeInput}
                  onChange={e => setDiscountCodeInput(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Have a coupon?" // Placeholder ตามภาพ
                />
                <button
                  onClick={applyDiscount}
                  className={`px-4 py-2 bg-green-500 text-white rounded-md text-sm transition duration-200 ml-2 ${
                    discountApplied ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
                  }`}
                  disabled={discountApplied}
                >
                  Apply
                </button>
              </div>
              {!discountApplied && (
                <div className="mt-2 text-xs text-gray-600">
                  Have a {availableCoupon} coupon? <button onClick={applyAvailableCoupon} className="text-green-500 hover:underline">Apply it below.</button>
                </div>
              )}
              {discountApplied && (
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-1" size="xs" />
                  <span>Discount Applied: -{discountAmount.toFixed(2)} THB</span>
                </div>
              )}
              {!discountApplied && discountCodeInput !== '' && discountCodeInput.toUpperCase() !== availableCoupon.toUpperCase() && (
                <p className="text-xs text-red-500 mt-1">Invalid discount code.</p>
              )}
            </div>
  
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="text-sm font-semibold mb-3">Order Summary</h3>
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Subtotal ({totalItems} items):</span>
                <span className="text-right">{subtotal} THB</span> {/* จัดชิดขวา */}
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Discount:</span>
                <span className="text-right">-{discountAmount.toFixed(2)} THB</span> {/* จัดชิดขวา */}
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <span>Tax:</span>
                <span className="text-right">{taxAmount.toFixed(2)} THB</span> {/* จัดชิดขวา */}
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <span>Shipping:</span>
                <span className="text-right">Free</span> {/* จัดชิดขวา */}
              </div>
              <div className="flex justify-between font-semibold text-lg mb-3">
                <span>Total:</span>
                <span className="text-right">{finalTotal.toFixed(2)} THB</span> {/* จัดชิดขวา */}
              </div>
              <button
                disabled={!address || cart.length === 0}
                className={`w-full py-3 rounded-md font-semibold transition duration-200
                ${!address || cart.length === 0
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'}`}
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
      </div>
    );
  }