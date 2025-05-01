import React from "react";

export default function EditCheckoutPage() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <div className="flex items-center text-green-600">
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
          <span className="ml-2">Cart</span>
        </div>
        <span className="text-gray-400">-------------</span>
        <div className="flex items-center text-green-600">
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
          <span className="ml-2">Review</span>
        </div>
        <span className="text-gray-400">-------------</span>
        <div className="flex items-center text-gray-400">
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
          <span className="ml-2">Checkout</span>
        </div>
      </div>

      {/* Forms Container */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Edit Address */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Edit Address</h2>
          <form className="space-y-4">
            <input className="w-full p-2 border rounded-xl" placeholder="Name" />
            <input className="w-full p-2 border rounded-xl" placeholder="Street Name, Building, House No." />
            <input className="w-full p-2 border rounded-xl" placeholder="Province" />
            <input className="w-full p-2 border rounded-xl" placeholder="Phone No." />
            <input className="w-full p-2 border rounded-xl" placeholder="Sub District, District" />
            <input className="w-full p-2 border rounded-xl" placeholder="Postal Code" />
            <div className="flex justify-between">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">Submit</button>
              <button type="button" className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">Cancel</button>
            </div>
          </form>
        </div>

        {/* Edit Payment */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Edit Payment</h2>
          <div className="mb-4">
            <button className="w-full bg-green-600 text-white py-2 rounded-full">Credit Card/Debit Card</button>
          </div>
          <form className="space-y-4">
            <div className="flex justify-between">
              <label className="text-sm">Card number</label>
              <div className="flex space-x-2">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="w-6 h-6" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="w-6 h-6" />
              </div>
            </div>
            <input className="w-full p-2 border rounded-xl" placeholder="" />
            <input className="w-full p-2 border rounded-xl" placeholder="Name on card" />
            <input className="w-full p-2 border rounded-xl" placeholder="Expiration date" />
            <input className="w-full p-2 border rounded-xl" placeholder="Security Code (CVV/CVC)" />
            <div className="flex justify-between">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">Submit</button>
              <button type="button" className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">Cancel</button>
            </div>
          </form>

          {/* Bank Logos */}
          <div className="flex flex-wrap justify-center mt-6 gap-3">
            {[
              "scb", "kbank", "krungsri", "ktb", "tmb", "uob", "ttb", "citi", "bay", "gsb", "truemoney"
            ].map((bank) => (
              <img
                key={bank}
                src={`https://img.icons8.com/color/48/${bank}.png`}
                alt={bank}
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
